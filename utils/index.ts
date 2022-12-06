import { HardhatRuntimeEnvironment } from 'hardhat/types';

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
