import fs from 'fs';
import path from 'path';

import { ethers } from 'ethers';

const getContractPath = (contractTag: string, network: ethers.providers.Networkish) => {
  const networkName = getNetworkName(network);
  let fileName = '';

  if (process.cwd().includes('contracts')) {
    fileName = path.resolve(__dirname, networkName, `${contractTag}.json`)
  } else {
    fileName = path.resolve('contracts', 'deployments', networkName, `${contractTag}.json`)
  }

  return fileName
}
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

  if (standardName === 'tenderly') {
    const { chainId } = ethers.providers.getNetwork('tenderly')
    return `tenderly_${chainId}`;
  }

  return standardName ?? network;
};

// ts-prune-ignore-next
export const getContractAbi = (contractTag: string, network: ethers.providers.Networkish) => {
  try {
    const fileName = getContractPath(contractTag, network);
    const contractJSON = fs.readFileSync(fileName).toString();
    return JSON.parse(contractJSON).abi
  } catch (err) {
    console.log(err);
  }
};

const getContractAddress = (
  contractTag: string,
  network: ethers.providers.Networkish,
) => {
  try {
    const fileName = getContractPath(contractTag, network);
    const contractJSON = fs.readFileSync(fileName).toString();
    return JSON.parse(contractJSON).address as string;
  } catch (e) {
    console.error(e);
  }
  return '0x0000000000000000000000000000000000000000';
};

export default getContractAddress;