import { JsonRpcProvider } from '@ethersproject/providers';

export const waitTillBlock = async (
  provider: JsonRpcProvider,
  blockNr: number
) => {
  console.log('waitTillBlock', blockNr);
  return new Promise<void>((resolve) => {
    provider.on('block', (blockNumber) => {
      console.log('on block', blockNumber);
      if (blockNumber == blockNr) {
        resolve();
      }
    });
  });
};
