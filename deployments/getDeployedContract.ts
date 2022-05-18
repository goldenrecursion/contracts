import GoldenTokenLocalhost from './localhost/GoldenToken.json';
import GoldenTokenRinkeby from './rinkeby/GoldenToken.json';
import GoldenSchemaLocalhost from './localhost/GoldenSchema.json';
// import GoldenSchemaRinkeby from './rinkeby/GoldenSchema.json';

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

export const getGoldenSchemaContract = (chainId: number) => {
  switch (chainId) {
    case 1337:
      return GoldenSchemaLocalhost;
    case 4:
    // return GoldenSchemaRinkeby;
    default:
      throw Error(`Unknown chainId: ${chainId}`);
  }
};
