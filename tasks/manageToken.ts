import { BigNumber } from 'ethers';
import { task } from 'hardhat/config';

const done = (hash: string, networkName: string) => {
  console.log('DONE');
  console.log(`https://${networkName}.etherscan.io/tx/${hash}`);
};

task(`mint`, `Mint to address, minter role is required`)
  .addParam(`minter`, `Private key of Minter`)
  .addParam(`address`, `Destination address`)
  .addParam(`amount`, `Amount of GLD to be minted`)
  .setAction(async (taskParams, hre) => {
    const { ethers } = hre;
    const minter = new ethers.Wallet(taskParams.minter);
    const amount = ethers.utils.parseUnits(taskParams.amount, '18');
    const address = taskParams.address;
    const minterAddress = await minter.getAddress();
    const goldenToken = await ethers.getContract('GoldenToken');
    await goldenToken.connect(minter);

    if (!(await goldenToken.isMinter(minterAddress))) {
      throw new Error(`address=${minterAddress} does not have minter role!`);
    }

    const mintTx = await goldenToken.mint(address, amount);
    done(mintTx.hash, hre.network.name);
    console.log({
      balanceOf: ethers.utils.formatUnits(
        await goldenToken.balanceOf(address),
        '18'
      ),
      mintTx,
    });
  });

task(`burn`, `Burn tokens, burner role required`)
  .addParam(`burner`, `Private key of Burner`)
  .addParam(`from`, `Burn from address`)
  .addParam(`amount`, `Amount of GLD to be burner`)
  .setAction(async (taskParams, hre) => {
    const { ethers } = hre;
    const burner = new ethers.Wallet(taskParams.minter);
    const amount = ethers.utils.parseUnits(taskParams.amount, '18');
    const address = taskParams.address;
    const burnerAddress = await burner.getAddress();
    const goldenToken = await ethers.getContract('GoldenToken');
    await goldenToken.connect(burner);

    if (!(await goldenToken.isMinter(burnerAddress))) {
      throw new Error(`address=${burnerAddress} does not have burner role!`);
    }

    const burnTx = await goldenToken.burn(address, amount);
    done(burnTx.hash, hre.network.name);
    console.log({
      balanceOf: ethers.utils.formatUnits(
        await goldenToken.balanceOf(address),
        '18'
      ),
      burnTx,
    });
  });

/**
 *  These tasks are for goerli (and mainnet later), since ownership is transfered to
 *  gnosis safe we don't can't sign transactions. These tasks will instead generate the data
 *  that you can pass to a gnosis transaction with custom data.
 */

task('slashForUser', 'Slash all of staked tokens from account')
  .addParam('account', "The account's address to slash")
  .setAction(async ({ account }, { ethers, network, getNamedAccounts }) => {
    const { deployer } = await getNamedAccounts();
    const contract = (await ethers.getContract('GoldenToken')).connect(
      await ethers.getSigner(deployer)
    );
    const toSlash: { addr: string; amount: string }[] = [];
    const userStaked = await contract.stakeOf(account);
    if (BigNumber.from(userStaked.toString()).eq(0)) {
      console.error('CANCELING: The user has no staked balance');
      return done('', network.name);
    }
    toSlash.push({
      addr: account,
      amount: userStaked.toString(),
    });
    try {
      // This will fail as we aren't the owner, but we need the generated data parameter.
      await contract.bulkSlash(toSlash, userStaked);
    } catch (err: any) {
      console.log(
        'Paste this data into gnosis transaction with custom data:\n',
        err.transaction.data
      );
      done('', network.name);
    }
  });

task('stakeForUser', 'Stake tokens for account')
  .addParam('account', "The account's address to slash")
  .setAction(async ({ account }, { ethers, network, getNamedAccounts }) => {
    const { deployer } = await getNamedAccounts();
    const contract = (await ethers.getContract('GoldenToken')).connect(
      await ethers.getSigner(deployer)
    );
    const amount = ethers.utils.parseUnits('10', 18);
    const toStake: { addr: string; amount: string }[] = [];
    toStake.push({
      addr: account,
      amount: amount.toString(),
    });
    try {
      // This will fail as we aren't the owner, but we need the generated data parameter.
      await contract.bulkStake(toStake, amount);
    } catch (err: any) {
      console.log(
        'Paste this data into gnosis transaction with custom data:\n',
        err.transaction.data
      );
      done('', network.name);
    }
  });
