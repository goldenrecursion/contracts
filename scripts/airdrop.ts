import fs from 'fs';
import { ethers, getNamedAccounts, network } from 'hardhat';
import { GoldenToken } from '../typechain';

async function main() {
  const file = fs.readFileSync('./scripts/airdrop_addresses.csv');
  const { deployer } = await getNamedAccounts();
  const contract = await ethers.getContract('GoldenToken');
  const _amount = ethers.utils.parseUnits('10', 18);
  const contractSigned = contract.connect(
    await ethers.getSigner(deployer)
  ) as GoldenToken;

  console.log(
    [
      `Network: ${network.name}`,
      `Contract address: ${contract.address}`,
      `Deployer address: ${deployer}`,
    ].join('\n')
  );

  const addresses = file
    .toString()
    .split('\n')
    .slice(1) // Remove first line of headers
    .map((line) => line.split(',').pop()!); // get last column which is the address

  console.log(`Addresses to airdrop:\n${addresses.join('\n')}`);

  for (const address of addresses) {
    const { hash } = await contractSigned.transfer(address, _amount);
    console.log(address, hash);
  }

  console.log('ALL DONE');
}

void main();
