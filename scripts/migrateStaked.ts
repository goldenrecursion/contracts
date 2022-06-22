import fs from 'fs';
import { ethers, getNamedAccounts } from 'hardhat';
import { GoldenToken } from '../typechain';

import oldGoldenTokenAbi from '../abis/GoldenToken.json'

const uniqueAddresses: string[] = []
const toStake: { addr: string, amount: string }[] = []

async function main() {
  const file = fs.readFileSync('./scripts/old_contract_transactions.csv');
  const { deployer } = await getNamedAccounts();
  const contract = await ethers.getContract('GoldenToken');

  const contractSigned = contract.connect(
    await ethers.getSigner(deployer)
  ) as GoldenToken;


  file
    .toString()
    .split('\n')
    .slice(1) // Remove first line of headers
    .map(async (line) => {
      const elements = line.split(',')
      for (let element of elements) {
        element = element.replaceAll("\"", "")
        // console.log('element: ', element)
        if (ethers.utils.isAddress(element) && !uniqueAddresses.includes(element)) {
          uniqueAddresses.push(element)
        }
      }
    });
  let totalAmount = BigInt(0)
  for (let addr of uniqueAddresses) {
    const amountStaked = await readStaked(addr)
    console.log('Staked', addr, amountStaked)
    toStake.push({
      addr: addr,
      amount: amountStaked.toString
    })
    totalAmount += amountStaked
    await sleep(300); // Api throttling 
  }
  console.log('Migration Generated', toStake);
  const result = contractSigned.bulkStake(toStake, totalAmount.toString())
  console.log('Migration DONE', (await result).data);
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const readStaked = async (address: string) => {
  const contractAddress = "0x951525a20e217CdCE468518EbB88c3f05038D8f7" // Old contract
  const alchemyProvider = new ethers.providers.AlchemyProvider('rinkeby', process.env.ALCHEMY_RINKEBY_KEY);

  const signer = new ethers.Wallet(
    process.env.PRIVATE_KEY!,
    alchemyProvider
  );
  const contract = new ethers.Contract(contractAddress, oldGoldenTokenAbi, signer);
  const staked = await contract.stakeOf(address)
  return staked.toString()
}

main();
