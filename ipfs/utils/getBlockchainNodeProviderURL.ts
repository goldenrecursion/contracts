import { ethers } from 'ethers';

const getBlockchainNodeProviderURL = (network: ethers.providers.Networkish) => {
  const networkName = ethers.providers.getNetwork(network)?.name ?? network;
  switch (networkName) {
    case 'localhost':
      return 'http://127.0.0.1:8545';
    case 'rinkeby':
      return 'https://eth-rinkeby.alchemyapi.io/v2/wJsSSKTeAmqF2G5D56g00CX8fzwumcu0';
    case 'mainnet':
      return 'https://eth-mainnet.alchemyapi.io/v2/O4mYQs1L1DOma_ri_4rdGPjcDg8uRey9';
  }
};

export default getBlockchainNodeProviderURL;
