import fs from 'fs';

import { ethers } from 'ethers';

const getNetworkName = (network: ethers.providers.Networkish) => {
  if (network === 'localhost') {
    return network;
  }

  const standardName = ethers.providers.getNetwork(network)?.name;

  if (standardName === 'unknown') {
    return 'localhost';
  }

  return standardName ?? network;
}

const getContractAddress = (contractTag: string, network: ethers.providers.Networkish) => {
  try {
    const networkName = getNetworkName(network);
    const contractJSON = fs
      .readFileSync(
        `./contracts/deployments/${networkName}/${contractTag}.json`
      )
      .toString();
    return JSON.parse(contractJSON).address as string;
  } catch (e) {
    console.error(e);
  }
  return '0x0000000000000000000000000000000000000000';
};

export default getContractAddress;