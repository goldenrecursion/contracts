import { ethers } from 'ethers';

export const getBlockchainNodeJsonRpcProviderURL = (network: ethers.providers.Networkish) => {
  const networkName = ethers.providers.getNetwork(network)?.name ?? network;
  switch (networkName) {
    case 'localhost':
      return 'http://127.0.0.1:8545';
    case 'rinkeby':
      return 'https://eth-rinkeby.alchemyapi.io/v2/GYJ9yLtBeZyXmbRkDl94Ux1JqgIdhe14';
    case 'mainnet':
      return 'https://eth-mainnet.g.alchemy.com/v2/dZXxOpiA9EV27_BIqMyILADpzw_GKguc';
    case 'goerli':
      return 'https://eth-goerli.g.alchemy.com/v2/Xca6f9GvZ6nW7TAnmb0lEPmoOyvE89CO';
  }
};

export const getBlockchainNodeWebSocketProviderURL = (network: ethers.providers.Networkish) => {
  const networkName = ethers.providers.getNetwork(network)?.name ?? network;
  switch (networkName) {
    case 'localhost':
      return 'ws://127.0.0.1:8545';
    case 'rinkeby':
      return 'wss://eth-rinkeby.alchemyapi.io/v2/GYJ9yLtBeZyXmbRkDl94Ux1JqgIdhe14';
    case 'goerli':
      return 'wss://eth-goerli.g.alchemy.com/v2/Xca6f9GvZ6nW7TAnmb0lEPmoOyvE89CO';
  }
};
