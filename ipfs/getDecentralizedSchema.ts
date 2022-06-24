import { ethers } from 'ethers';

import getContractAddress from '../../contracts/deployments/getContractAddress';
import { GoldenSchema__factory } from '../../contracts/typechain/factories/GoldenSchema__factory';
import { bytes16ToUUID } from './utils/bytes16UUID';
import { bytes32ToCid } from './utils/bytes32IPFSHash';
import { getBlockchainNodeJsonRpcProviderURL } from './utils/getBlockchainNodeProviderURL';

import { getDataFromIPFSByCID, IPFSPredicate } from './IPFSapi';

const getDecentralizedSchema = async (): Promise<{
  predicates: IPFSPredicate[];
}> => {
  const provider = new ethers.providers.JsonRpcProvider(
    getBlockchainNodeJsonRpcProviderURL(process.env.ETH_NETWORK!)
  );
  const network = await provider.getNetwork();
  const GoldenSchema = GoldenSchema__factory.connect(
    getContractAddress('GoldenSchema', network),
    provider
  );

  // Get contract state and decode IPFS hashes from bytes32 into CIDs
  const predicateCIDs: string[] = [];
  const contractPredicates = (await GoldenSchema.predicates()).map(
    ([uuidBytes32, cidBytes32]) => {
      const cid = bytes32ToCid(cidBytes32);
      predicateCIDs.push(cid);
      return [bytes16ToUUID(uuidBytes32), cid] as [string, string];
    }
  );

  // Get IPFS data from CIDs
  const ipfsPredicates = await getDataFromIPFSByCID(predicateCIDs);

  // This is a sanity check that sholud never happen. If it does we have a
  // big problem as it means the IPFS and Contract states have diverged.
  ipfsPredicates.forEach((ipfsPredicate) => {
    const { id: uuidIPFS, cid } = ipfsPredicate;
    const contractPredicate = contractPredicates.find(
      ([, _cid]) => _cid === cid
    )!;
    const [uuidContract] = contractPredicate;
    if (uuidIPFS !== uuidContract) {
      throw new Error(
        `Mismatch between contract and IPFS data:\nipfs ${ipfsPredicate}\ncontract: ${contractPredicate}`
      );
    }
  });

  return { predicates: ipfsPredicates };
};

export default getDecentralizedSchema;
