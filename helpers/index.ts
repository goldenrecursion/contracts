import { parseEnvNetwork } from '../ipfs/utils/parseEnvNetwork';
import { EthStaking__factory } from '../typechain';
import { ethers } from 'ethers';
import getContractAddress from '../deployments/getContractAddress';

export const getEthStakingContract = async (ethNetwork: string) => {
  const [_id, url] = parseEnvNetwork(ethNetwork);
  const provider = new ethers.providers.JsonRpcProvider(url);
  const network = await provider.getNetwork();
  // eslint-disable-next-line camelcase
  const EthStaking = EthStaking__factory.connect(
    getContractAddress('EthStaking', network),
    provider
  );
  return EthStaking;
};