import { task } from 'hardhat/config';

/**
 *  These tasks will only work on local node where your deployer owns the contract
 */
task(
  'generateWallets',
  'Generate a number of wallets private keys and print out a json array with them'
)
  .addParam('nr', 'How many wallets')
  .setAction(async ({ nr }, { ethers, getNamedAccounts }) => {
    let nrOfWallets = parseInt(nr);
    const obj = [];
    const addresses = []
    while (nrOfWallets > 0) {
      nrOfWallets--;
      const wallet = ethers.Wallet.createRandom();
      obj.push(wallet.privateKey);
      addresses.push(wallet.address);
    }
    console.log('Result', JSON.stringify(obj));
    const { deployer } = await getNamedAccounts();
    const contract = (await ethers.getContract('GoldenNFTv1')).connect(
      await ethers.getSigner(deployer)
    );
    try {
      // This will fail as we aren't the owner, but we need the generated data parameter.
      await (await contract.addMinters(addresses)).wait(1);
    } catch (err: any) {
      console.log(
        'addMinters: Paste this data into gnosis transaction with custom data:\n',
        err.transaction?.data
      );
      if (!err.transaction?.data) console.error(err)
    }
    try {
      // This will fail as we aren't the owner, but we need the generated data parameter.
      await (await contract.addBurners(addresses)).wait(1);
    } catch (err: any) {
      console.log(
        'addBurners: Paste this data into gnosis transaction with custom data:\n',
        err.transaction?.data
      );
      if (!err.transaction?.data) console.error(err)
    }


  });
