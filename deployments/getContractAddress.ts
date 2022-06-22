import fs from 'fs';

import { ethers } from 'ethers';
import { Provider } from "@ethersproject/providers";

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

export const getNetworkInfo = async (provider: Provider): Promise<{
  expectedNetworkName: string,
  userNetworkName: string,
  isCorrectNetwork: boolean
}> => {
  const network = await provider.getNetwork();

  const expectedNetworkName: string = getNetworkName(window.env.ETH_NETWORK);
  return {
    expectedNetworkName,
    userNetworkName: network.name,
    isCorrectNetwork: expectedNetworkName === network.name,
  };
};


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
