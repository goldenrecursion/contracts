import { CID, create } from 'ipfs-http-client';
import { config } from 'dotenv';

config();

type IPFSPredicateBase = {
  id: string;
  name: string;
  object_type: string;
  description: string;
};

export type IPFSPredicatePayload = IPFSPredicateBase & {
  prevVersion?: CID;
};

export type IPFSPredicate = IPFSPredicateBase & {
  cid: string;
  prevVersions?: IPFSPredicate[];
};

const ipfsClientOptions = process.env.INFURA_AUTH_TOKEN
  ? {
      host: 'ipfs.infura.io',
      port: 5001,
      protocol: 'https',
      headers: {
        authorization:
          'Basic ' +
          Buffer.from(process.env.INFURA_AUTH_TOKEN).toString('base64'),
      },
    }
  : undefined;

const client = create(ipfsClientOptions);

const formatNode = async (node: IPFSPredicatePayload, cid: CID) => {
  const { prevVersion, ...data } = node;
  const prevVersions = await getPrevVersions(prevVersion);
  return {
    data: {
      ...data,
      cid: cid.toString(),
    },
    prevVersions,
  };
};

const getPrevVersions = async (cid?: CID): Promise<IPFSPredicate[]> => {
  const versions: IPFSPredicate[] = [];

  if (!cid) {
    return versions;
  }

  try {
    const data = await client.dag.get(cid, {
      timeout: 1000,
    });
    const { prevVersions, data: cleanData } = await formatNode(data.value, cid);
    return [...versions, cleanData, ...prevVersions];
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }

  return versions;
};

const _getDataFromIPFSByCID = async (
  hash: string
): Promise<IPFSPredicate | null> => {
  const cid = CID.parse(hash);

  if (!cid) {
    return null;
  }

  try {
    const data = await client.dag.get(cid, {
      timeout: 1000,
    });
    const { prevVersions, data: cleanData } = await formatNode(data.value, cid);
    return { ...cleanData, prevVersions };
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }

  return null;
};

// FIXME: No idea what's Typescript's problem here...
type ReturnTypeOverride<T> = T extends string[]
  ? IPFSPredicate[]
  : IPFSPredicate | null;

export const getDataFromIPFSByCID = async <T extends string | string[]>(
  hashes: T
): Promise<ReturnTypeOverride<T>> => {
  if (!Array.isArray(hashes)) {
    return (await _getDataFromIPFSByCID(
      hashes
    )) as unknown as ReturnTypeOverride<T>;
  }

  let data = [];
  for (let i = 0; i < hashes.length; i++) {
    const hash = hashes[i];
    if (!hash) {
      continue;
    }
    const nodeData = await _getDataFromIPFSByCID(hash);
    if (!nodeData) {
      continue;
    }
    data.push(nodeData);
  }

  return data as unknown as ReturnTypeOverride<T>;
};

export const addToIPFS = async (data: IPFSPredicatePayload) => {
  const cid = await client.dag.put(data, { pin: true });
  return cid;
};
