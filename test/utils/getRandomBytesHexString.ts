import { ethers } from 'ethers';

export default function getRandomBytesHexString(n = 32): string {
  return ethers.utils.hexlify(ethers.utils.randomBytes(n));
}
