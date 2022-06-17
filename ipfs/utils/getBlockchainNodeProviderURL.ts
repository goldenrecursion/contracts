import { ethers } from 'ethers';

export const getBlockchainNodeJsonRpcProviderURL = (network: ethers.providers.Networkish) => {
  const networkName = ethers.providers.getNetwork(network)?.name ?? network;
  switch (networkName) {
    case 'localhost':
      return 'http://127.0.0.1:8545';
    case 'rinkeby':
      return 'https://eth-rinkeby.alchemyapi.io/v2/Qi577B6D3wleEiJwHyoh9a2sj8vchoIr';
    case 'mainnet':
      return 'https://eth-mainnet.alchemyapi.io/v2/O4mYQs1L1DOma_ri_4rdGPjcDg8uRey9';
  }
};

export const getBlockchainNodeWebSocketProviderURL = (network: ethers.providers.Networkish) => {
  const networkName = ethers.providers.getNetwork(network)?.name ?? network;
  switch (networkName) {
    case 'localhost':
      return 'ws://127.0.0.1:8545';
    case 'rinkeby':
      return 'wss://eth-rinkeby.alchemyapi.io/v2/Qi577B6D3wleEiJwHyoh9a2sj8vchoIr';
  }
};
