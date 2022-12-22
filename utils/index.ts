import { HardhatRuntimeEnvironment } from 'hardhat/types';
import getContractAddress from '../deployments/getContractAddress';
import { getTenderlyForkChainId } from './env.utils';

// Hacky way to deal with missing url in HardhatRuntimeEnvironment['network']
export const getProvider = (
  ethers: HardhatRuntimeEnvironment['ethers'],
  network: HardhatRuntimeEnvironment['network']
) => {
  if ('url' in network.config) {
    return new ethers.providers.JsonRpcProvider(network.config.url);
  }
  return new ethers.providers.JsonRpcProvider(network.name);
};

export const getContract = async (
  ethers: HardhatRuntimeEnvironment['ethers'],
  network: HardhatRuntimeEnvironment['network'],
  contractName: string
) => {
  if (network.name === 'tenderly') {
    const forkId = getTenderlyForkChainId(true);
    return ethers.getContractAt(
      contractName,
      getContractAddress(contractName, {
        name: `tenderly_${forkId}`,
        chainId: getTenderlyForkChainId(),
      })
    );
  }
  return ethers.getContract(contractName);
};
