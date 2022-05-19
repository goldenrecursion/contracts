import fs from 'fs';

import { ethers } from 'ethers';

const getContractAddress = (contractTag: string, network: ethers.providers.Networkish) => {
  try {
    const networkName = ethers.providers.getNetwork(network).name;
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
