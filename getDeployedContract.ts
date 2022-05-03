import GoldenTokenLocalhost from './deployments/localhost/GoldenToken.json';
import GoldenTokenRinkeby from './deployments/rinkeby/GoldenToken.json';

export const getGoldenTokenContract = (network: string) => {
  switch (network) {
    case 'localhost':
      return GoldenTokenLocalhost;
    case 'rinkeby':
      return GoldenTokenRinkeby;
    default:
      throw Error(`Unknown network: ${network}`);
  }
};
