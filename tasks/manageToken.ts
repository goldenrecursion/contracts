import { BigNumber } from 'ethers';
import { task } from 'hardhat/config';

const done = (hash: string, networkName: string) => {
  console.log('DONE');
  console.log(`https://${networkName}.etherscan.io/tx/${hash}`);
};

/**
 *  These tasks will only work on local node where your deployer owns the contract
 */
task('sendToken', 'Sends tokens from owner to address')
  .addParam('to', "The receiver account's address")
  .addParam('amount', 'The amount of tokens to send')
  .setAction(async ({ to, amount }, { ethers, getNamedAccounts, network }) => {
    const { deployer } = await getNamedAccounts();
    const contract = await ethers.getContract('GoldenToken');
    const contractSigned = contract.connect(await ethers.getSigner(deployer));
    const _amount = ethers.utils.parseUnits(amount.toString(), 18);
    const { hash } = await contractSigned.transfer(to, _amount);
    done(hash, network.name);
  });

task('stake', 'Stake tokens as owner')
  .addParam('amount', 'The amount of tokens to send')
  .setAction(async ({ amount }, { ethers, getNamedAccounts, network }) => {
    const { deployer } = await getNamedAccounts();
    const contract = await ethers.getContract('GoldenToken');
    const contractSigned = contract.connect(await ethers.getSigner(deployer));
    const _amount = ethers.utils.parseUnits(amount.toString(), 18);
    const { hash } = await contractSigned.stake(_amount);
    done(hash, network.name);
  });

task('slash', 'Slash tokens from account')
  .addParam('account', "The account's address to slash")
  .addParam('amount', 'The amount of tokens to slash')
  .setAction(
    async ({ account, amount }, { ethers, getNamedAccounts, network }) => {
      const { deployer } = await getNamedAccounts();
      const contract = await ethers.getContract('GoldenToken');
      const contractSigned = contract.connect(await ethers.getSigner(deployer));
      const _amount = ethers.utils.parseUnits(amount.toString(), 18);
      const { hash } = await contractSigned.slash(account, _amount);
      done(hash, network.name);
    }
  );

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
