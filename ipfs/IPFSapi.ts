import { CID, create } from 'ipfs-http-client';
import { config } from 'dotenv';

config();

type PredicateConstraintBase = {
  type: string;
};

type FormatPredicateConstraint = PredicateConstraintBase | { regex_pattern: string; };

type PredicateConstraint = FormatPredicateConstraint;

type IPFSPredicateBase = {
  id: string;
  name: string;
  object_type: string;
  description: string;
  label: string;
  constraints?: PredicateConstraint[];
};

export type IPFSPredicatePayload = IPFSPredicateBase & {
  prevVersion?: CID;
};

export type IPFSPredicate = IPFSPredicateBase & {
  cid: string;
  prevVersions?: IPFSPredicate[];
};

let CLIENT: ReturnType<typeof create>;

const getClient = () => {
  if (!CLIENT) {
    CLIENT = create(
      process.env.INFURA_AUTH_TOKEN
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
        : { timeout: 10000 }
    );
  }
  return CLIENT;
};

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
    const data = await getClient().dag.get(cid);
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
    const data = await getClient().dag.get(cid);
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
  const cid = await getClient().dag.put(data, { pin: true });
  return cid;
};
