import { ethers } from 'ethers';

export default function getRandomBytes32HexString(): string {
  return ethers.utils.hexlify(ethers.utils.randomBytes(32));
}
