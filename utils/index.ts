import { HardhatRuntimeEnvironment, Network } from 'hardhat/types';
import getContractAddress from '../deployments/getContractAddress';
import { getTenderlyForkChainId } from './env.utils';
import dotenv from 'dotenv';
import { ethers } from 'ethers';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import testHelpersConfig from '@openzeppelin/test-helpers/configure';
import { parseEnvNetwork } from '../ipfs/utils/parseEnvNetwork';
import { EthStaking__factory } from '../typechain';

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

export const init = (network: Network) => {
  testHelpersConfig({ provider: network.provider });
  dotenv.config();
};

export const isDev = (network: Network) => {
  return ['hardhat', 'localhost'].includes(network.name);
};
