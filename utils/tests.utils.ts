import { ethers } from 'ethers';

export const waitTillBlock = async (
  provider: ethers.providers.JsonRpcProvider,
  blockNr: number
) => {
  return new Promise<void>((resolve) => {
    provider.on('block', (blockNumber) => {
      if (blockNumber === blockNr) {
        resolve();
        provider.off('block', undefined);
      }
    });
  });
};
