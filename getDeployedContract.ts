import GoldenTokenLocalhost from './deployments/localhost/GoldenToken.json';
import GoldenTokenRinkeby from './deployments/rinkeby/GoldenToken.json';

export const getGoldenTokenContract = (chainId: number) => {
  switch (chainId) {
    case 1337:
      return GoldenTokenLocalhost;
    case 4:
      return GoldenTokenRinkeby;
    default:
      throw Error(`Unknown chainId: ${chainId}`);
  }
};
