import fs from 'fs';
import { ethers, getNamedAccounts } from 'hardhat';
import { GoldenToken } from '../typechain';

const seenAddresses: string[] = []

async function main() {
  const file = fs.readFileSync('./scripts/old_contract_transactions.csv');
  const { deployer } = await getNamedAccounts();
  const contract = await ethers.getContract('GoldenToken');
  // const _amount = ethers.utils.parseUnits('10', 18);
  const contractSigned = contract.connect(
    await ethers.getSigner(deployer)
  ) as GoldenToken;

  // console.log(
  //   [
  //     `Network: ${network.name}`,
  //     `Contract address: ${contract.address}`,
  //     `Deployer address: ${deployer}`,
  //   ].join('\n')
  // );

  file
    .toString()
    .split('\n')
    .slice(1) // Remove first line of headers
    .map(async (line) => {
      const elements = line.split(',')
      for (let element of elements) {
        element = element.replaceAll("\"", "")
        // console.log('element: ', element)
        if (ethers.utils.isAddress(element) && !seenAddresses.includes(element)) {
          console.log('New Address: ', element)
          seenAddresses.push(element)
          console.log('Staked', element, await contractSigned.stakeOf(element))
        }
      }
    });

  console.log('Migration DONE');
}

void main();
