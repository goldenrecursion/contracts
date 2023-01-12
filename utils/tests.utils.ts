import { ethers } from 'ethers';

export const waitTillBlock = async (
  provider: ethers.providers.JsonRpcProvider,
  blockNr: number
) => {
  return new Promise<void>((resolve) => {
    console.log('waitTillBlock', blockNr);

    provider.on('block', (blockNumber) => {
      console.log('blockNumber', blockNumber);
      if (blockNumber === blockNr) {
        resolve();
        provider.off('block', undefined);
      }
    });
  });
};
