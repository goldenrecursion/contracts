import fs from 'fs';
import { ethers } from 'hardhat';

import oldGoldenTokenAbi from '../abis/GoldenTokenRinkeby.json';

const uniqueAddresses: string[] = [];
const toStake: { addr: string; amount: string }[] = [];

async function main() {
  const file = fs.readFileSync('./scripts/old_contract_transactions.csv');

  file
    .toString()
    .split('\n')
    .slice(1) // Remove first line of headers
    .map(async (line) => {
      const elements = line.split(',');
      for (let element of elements) {
        element = element.replaceAll('"', '');
        if (
          ethers.utils.isAddress(element) &&
          !uniqueAddresses.includes(element)
        ) {
          uniqueAddresses.push(element);
        }
      }
    });
  let totalAmount = BigInt(0);
  const amount = '10000000000000000000';
  for (let addr of uniqueAddresses) {
    toStake.push({
      addr: addr,
      amount: amount,
    });
    totalAmount += BigInt(amount);
  }
  for (let addr of uniqueAddresses) {
    const amountStaked = await readStaked(addr);
    toStake.push({
      addr: addr,
      amount: amountStaked.toString(),
    });
    totalAmount += amountStaked;
    await sleep(300); // Api throttling
  }
  console.log('User accounts generated', toStake, totalAmount);
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const readStaked = async (address: string) => {
  const contractAddress = '0x951525a20e217CdCE468518EbB88c3f05038D8f7'; // Old GoldenToken contract
  const alchemyProvider = new ethers.providers.AlchemyProvider(
    'rinkeby',
    process.env.ALCHEMY_RINKEBY_KEY
  );

  const signer = new ethers.Wallet(process.env.PRIVATE_KEY!, alchemyProvider);
  const contract = new ethers.Contract(
    contractAddress,
    oldGoldenTokenAbi,
    signer
  );
  const Staked = await contract.stakeOf(address);
  return Staked.toString();
};

main();
