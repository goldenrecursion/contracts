import { task, types } from 'hardhat/config';
import getContractAddress from '../deployments/getContractAddress';

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
      lockedStakeLeft: ethers.utils.formatUnits(
        await lockedStaking.getLockedStake(address, hash),
        '18'
      ),
      claimableStake: ethers.utils.formatUnits(
        await lockedStaking.getClaimableStake(address),
        '18'
      ),
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
      lockedStakeLeft: ethers.utils.formatUnits(
        await lockedStaking.getLockedStake(address, hash),
        '18'
      ),
      claimableStake: ethers.utils.formatUnits(
        await lockedStaking.getClaimableStake(address),
        '18'
      ),
      slashTx,
    });
  });

task(`getLockedStake`, 'Get locked stake for account by commitment hash')
  .addParam('account')
  .addParam('hash')
  .setAction(async (taskParams, hre) => {
    const { ethers } = hre;
    const hash = taskParams.hash;
    const account = taskParams.account;

    const lockedStaking = await ethers.getContractAt(
      'LockedStaking',
      getContractAddress('LockedStaking', hre.network.name)
    );

    if (!ethers.utils.isAddress(account)) {
      throw new Error(`Invalid address=${account}`);
    }

    console.log({
      hash,
      account,
      lockedAmount: ethers.utils.formatUnits(
        await lockedStaking.getLockedStake(account, hash),
        '18'
      ),
    });
  });

task(`getClaimableStake`, 'Get claimable stake for account')
  .addParam('account')
  .setAction(async (taskParams, hre) => {
    const { ethers } = hre;
    const account = taskParams.account;

    const lockedStaking = await ethers.getContractAt(
      'LockedStaking',
      getContractAddress('LockedStaking', hre.network.name)
    );

    if (!ethers.utils.isAddress(account)) {
      throw new Error(`Invalid address=${account}`);
    }

    console.log({
      account,
      claimableStake: ethers.utils.formatUnits(
        await lockedStaking.getClaimableStake(account),
        '18'
      ),
    });
  });
