import { HardhatRuntimeEnvironment, Network } from 'hardhat/types';
import getContractAddress from '../deployments/getContractAddress';
import { getTenderlyForkChainId } from './env.utils';
import dotenv from 'dotenv';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import testHelpersConfig from '@openzeppelin/test-helpers/configure';

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

export const init = (network: Network) => {
  testHelpersConfig({ provider: network.provider });
  dotenv.config();
};

export const isDev = (network: Network) => {
  return ['hardhat', 'localhost'].includes(network.name);
};
