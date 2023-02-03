import { parseEnvNetwork } from '../ipfs/utils/parseEnvNetwork';
// eslint-disable-next-line camelcase
import { EthStaking__factory } from '../typechain';
import { ethers } from 'ethers';
import getContractAddress from '../deployments/getContractAddress';

const getEthStakingContract = async (ethNetwork: string) => {
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

export default getEthStakingContract;
