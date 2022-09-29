import { task } from 'hardhat/config';

/**
 *  These tasks will only work on local node where your deployer owns the contract
 */
task('generateWallets', 'Generate a number of wallets private keys and print out a json array with them')
  .addParam('nr', 'How many wallets')
  .setAction(async ({ nr }, { ethers }) => {
    let nrOfWallets = parseInt(nr)
    const obj = []
    while (nrOfWallets > 0) {
      nrOfWallets--
      const wallet = ethers.Wallet.createRandom()
      obj.push(wallet.privateKey)
    }
    console.log('Result', JSON.stringify(obj))
  });
