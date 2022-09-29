import { ethers, getNamedAccounts } from 'hardhat';

async function main() {
  console.log('process.argv', process.argv)
  const wallet = ethers.Wallet.createRandom()
}

main();
