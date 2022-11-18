import { task, types } from 'hardhat/config';
import getContractAddress from '../deployments/getContractAddress';

task(`preStakeUser`, `Pre stake address to enter the dApp`)
  .addParam(
    `account`,
    `Private key of the account to deduct GLD tokens from`,
    undefined,
    types.string,
    false
  )
  .addParam(`address`, `Address to pre-stake`, undefined, types.string, false)
  .addParam(`amount`, `Amount to pre-stake`, undefined, types.string, false)
  .setAction(async (taskParams, hre) => {
    const { ethers } = hre;
    const account = new ethers.Wallet(taskParams.account);
    const amount = ethers.utils.parseUnits(taskParams.amount, '18');
    const address = taskParams.address;
    const accountAddress = await account.getAddress();

    const goldenToken = await ethers.getContractAt(
      'GoldenToken',
      getContractAddress('GoldenToken', hre.network.name)
    );
    const lockedStaking = await ethers.getContractAt(
      'LockedStaking',
      getContractAddress('LockedStaking', hre.network.name)
    );

    if (!ethers.utils.isAddress(address)) {
      throw new Error(`Invalid address=${address}`);
    }

    await goldenToken.connect(account);
    await lockedStaking.connect(account);

    const balance = await goldenToken.balanceOf(accountAddress);
    const allowance = await goldenToken.allowance(
      lockedStaking.address,
      accountAddress
    );

    if (balance.lt(amount)) {
      throw new Error(
        `Balance=${balance.toString()} of account=${accountAddress} is less then amount=${amount.toString()}`
      );
    }

    if (allowance.lt(amount)) {
      const approveTx = await goldenToken.approve(
        lockedStaking.address,
        amount
      );
      console.log(`Approved`, approveTx);
    }

    const preStakeTx = await lockedStaking.preStake(amount);
    console.log(`Pre Staked`, preStakeTx);
  });

task(
  `unlockStake`,
  `Unlock locked stake for address, validator role is required`
)
  .addParam(
    `validator`,
    `Private key of the validator`,
    undefined,
    types.string,
    false
  )
  .addParam(`hash`, `Commitment hash`, undefined, types.string, false)
  .addParam(`address`, `Wallet address`, undefined, types.string, false)
  .addParam(`amount`, `Amount to pre-stake`, undefined, types.string, false)
  .addParam(`reward`, `Reward percent`, undefined, types.string, false)
  .setAction(async (taskParams, hre) => {
    const { ethers } = hre;
    const validator = new ethers.Wallet(taskParams.validator);
    const amount = ethers.utils.parseUnits(taskParams.amount, '18');
    const reward = ethers.utils.parseUnits(taskParams.reward, '18');
    const hash = taskParams.hash;
    const address = taskParams.address;

    const lockedStaking = await ethers.getContractAt(
      'LockedStaking',
      getContractAddress('LockedStaking', hre.network.name)
    );

    if (!ethers.utils.isAddress(address)) {
      throw new Error(`Invalid address=${address}`);
    }

    await lockedStaking.connect(validator);
    const lockedStake = await lockedStaking.getLockedStake(address, hash);

    if (lockedStake.lt(amount)) {
      throw new Error(`Cannot unlock address=${address} hash=${hash}`);
    }

    const unlockTx = await lockedStaking.unlockStake(
      address,
      hash,
      amount,
      reward
    );
    console.log({
      lockedStakeLeft: (
        await lockedStaking.getLockedStake(address, hash)
      ).toString(),
      claimableStake: (
        await lockedStaking.getClaimableStake(address)
      ).toString(),
      unlockTx,
    });
  });

task(`slash`, `Slash locked stake for address, validator role is required`)
  .addParam(
    `validator`,
    `Private key of the validator`,
    undefined,
    types.string,
    false
  )
  .addParam(`address`, `Wallet address`, undefined, types.string, false)
  .addParam(`hash`, `Commitment hash`, undefined, types.string, false)
  .addParam(`amount`, `Amount to pre-stake`, undefined, types.string, false)
  .setAction(async (taskParams, hre) => {
    const { ethers } = hre;
    const validator = new ethers.Wallet(taskParams.validator);
    const amount = ethers.utils.parseUnits(taskParams.amount, '18');
    const hash = taskParams.hash;
    const address = taskParams.address;

    const lockedStaking = await ethers.getContractAt(
      'LockedStaking',
      getContractAddress('LockedStaking', hre.network.name)
    );

    if (!ethers.utils.isAddress(address)) {
      throw new Error(`Invalid address=${address}`);
    }

    await lockedStaking.connect(validator);
    const lockedStake = await lockedStaking.getLockedStake(address, hash);

    if (lockedStake.gt(amount)) {
      throw new Error(`Slash amount exceeds locked stake amount`);
    }

    const slashTx = await lockedStaking.slash(address, hash, amount);
    console.log({
      lockedStakeLeft: (
        await lockedStaking.getLockedStake(address, hash)
      ).toString(),
      claimableStake: (
        await lockedStaking.getClaimableStake(address)
      ).toString(),
      slashTx,
    });
  });
