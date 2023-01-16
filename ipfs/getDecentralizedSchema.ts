import { ethers } from 'ethers';

import getContractAddress from '../deployments/getContractAddress';
// eslint-disable-next-line camelcase
import { GoldenSchema__factory } from '../../contracts/typechain/factories/contracts/GoldenSchema__factory';
import { bytes16ToUUID } from './utils/bytes16UUID';
import { bytes32ToCid } from './utils/bytes32IPFSHash';
import { parseEnvNetwork } from './utils/parseEnvNetwork';

import {
  getDataFromIPFSByCID,
  IPFSNodeBody,
  IPFSPredicateBody,
  IPFSEntityTypeBody,
  IPFSNode,
} from './IPFSapi';

const getIPFSNodes = async <T extends IPFSNodeBody>(
  encodedContractCidsByUuid: [string, string][]
) => {
  const cids: string[] = [];

  // Get contract state and decode IDs
  const contractCidsByUuid = encodedContractCidsByUuid.map(
    ([uuidBytes16, cidBytes32]) => {
      const cid = bytes32ToCid(cidBytes32);
      cids.push(cid);
      return [bytes16ToUUID(uuidBytes16), cid] as [string, string];
    }
  );

  // Get IPFS data from CIDs
  const ipfsNodes = await getDataFromIPFSByCID<T>(cids);

  // This is a sanity check that sholud never happen. If it does we have a
  // big problem as it means the IPFS and Contract states have diverged.
  ipfsNodes.forEach((ipfsNode) => {
    const { id: uuidIPFS, cid } = ipfsNode;
    const contractNode = contractCidsByUuid.find(([, _cid]) => _cid === cid)!;
    const [uuidContract] = contractNode;
    if (uuidIPFS !== uuidContract) {
      throw new Error(
        `Mismatch between contract and IPFS data:\nipfs ${ipfsNode}\ncontract: ${contractNode}`
      );
    }
  });

  return ipfsNodes;
};

const getDecentralizedSchema = async (): Promise<{
  predicates: IPFSNode<IPFSPredicateBody>[];
  entityTypes: IPFSNode<IPFSEntityTypeBody>[];
}> => {
  const [_id, url] = parseEnvNetwork(process.env.ETH_NETWORK!);
  const provider = new ethers.providers.JsonRpcProvider(url);
  const network = await provider.getNetwork();
  // eslint-disable-next-line camelcase

  const GoldenSchema = GoldenSchema__factory.connect(
    getContractAddress('GoldenSchema', network),
    provider
  );
  const contractPredicates = await GoldenSchema.predicates();
  const contractEntityTypes = await GoldenSchema.entityTypes();
  console.log('>>>> getDecentralizedSchema contractPredicates', contractPredicates.length)
  console.log('>>>> getDecentralizedSchema contractEntityTypes', contractEntityTypes.length)
  return {
    predicates: await getIPFSNodes(contractPredicates),
    entityTypes: await getIPFSNodes(contractEntityTypes),
  };
};

export default getDecentralizedSchema;
