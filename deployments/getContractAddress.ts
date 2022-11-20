import fs from 'fs';
import path from 'path';

import { ethers } from 'ethers';

// ts-prune-ignore-next
export const getNetworkName = (network: ethers.providers.Networkish) => {
  if (network === 'localhost') {
    return network;
  }

  const standardName = ethers.providers.getNetwork(network)?.name;

  if (standardName === 'unknown') {
    return 'localhost';
  }

  if (standardName === 'maticmum') {
    return 'mumbai';
  }
  if (standardName === 'arbitrum-goerli') {
    return 'arbitrumGoerli';
  }

  return standardName ?? network;
};

const getContractAddress = (
  contractTag: string,
  network: ethers.providers.Networkish
) => {
  try {
    const networkName = getNetworkName(network);
    let fileName = '';

    if (process.cwd().includes('contracts')) {
      fileName = path.resolve(__dirname, networkName, `${contractTag}.json`)
    } else {
      fileName = path.resolve('contracts', 'deployments', networkName, `${contractTag}.json`)
    }

    const contractJSON = fs.readFileSync(fileName).toString();
    return JSON.parse(contractJSON).address as string;
  } catch (e) {
    console.error(e);
  }
  return '0x0000000000000000000000000000000000000000';
};

export default getContractAddress;
