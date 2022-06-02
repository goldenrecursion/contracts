import { ethers } from 'ethers';
import { parse, stringify } from 'uuid';

export const UUIDToBytes16 = (uuid: string) => {
  return ethers.utils.hexlify(parse(uuid));
};

export const bytes16ToUUID = (bytes16: string) => {
  return stringify(ethers.utils.arrayify(bytes16));
};
