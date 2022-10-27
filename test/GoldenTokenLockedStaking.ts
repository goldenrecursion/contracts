import { Contracts, setupUser, setupUsers, User } from './utils';
import {
  deployments,
  ethers,
  getNamedAccounts,
  getUnnamedAccounts,
} from 'hardhat';
import { BigNumber } from 'ethers';
import { expect } from 'chai';

type Args = {
  amount?: BigNumber;
  hash?: string;
};
const setupLock = async (user: User<Contracts>, args?: Args) => {
  const defaultArgs = {
    amount: BigNumber.from(10),
    hash: '0x3131333133310000000000000000000000000000000000000000000000000000',
  };
  const opts = { ...defaultArgs, ...args };
  const verifier = user;
  await verifier.GoldenToken.approve(verifier.address, opts.amount);
  const balanceBeforeLock = await verifier.GoldenToken.balanceOf(
    verifier.address
  );
  const lockFn = await verifier.GoldenToken.lock(opts.hash, opts.amount);
  const balanceAfterLock = await verifier.GoldenToken.balanceOf(
    verifier.address
  );

  return {
    opts,
    verifier,
    lockFn,
    balanceBeforeLock,
    balanceAfterLock,
  };
};

describe.only('Locked Staking', () => {
  let GoldenToken: Contracts['GoldenToken'];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let owner: User<Contracts>;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let users: User<Contracts>[];

  beforeEach(async function () {
    await deployments.fixture(['GoldenToken']);
    GoldenToken = await ethers.getContract('GoldenToken');
    const contracts = { GoldenToken };
    const { deployer } = await getNamedAccounts();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    owner = await setupUser(deployer, contracts);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    users = await setupUsers(await getUnnamedAccounts(), contracts);

    // Initially transfer GLD tokens to addresses
    for (const user of users) {
      await owner.GoldenToken.transfer(user.address, BigNumber.from(100));
    }
  });

  describe(`lock`, () => {
    it(`should lock stake & deduct locked amount from the wallet`, async () => {
      const { opts, verifier, balanceBeforeLock, lockFn } = await setupLock(
        users[0]
      );

      await expect(lockFn)
        .to.emit(verifier.GoldenToken, 'Lock')
        .withArgs(verifier.address, opts.hash, opts.amount);

      const lockedAmount = await GoldenToken.getLockedStake(
        verifier.address,
        opts.hash
      );
      expect(await GoldenToken.balanceOf(verifier.address)).to.equal(
        balanceBeforeLock.sub(lockedAmount)
      );
    });
    it(`should not allow locking more stake then the wallet holds`, async () => {
      const verifier = users[0];

      await verifier.GoldenToken.approve(
        verifier.address,
        BigNumber.from(10_000)
      );

      await expect(
        verifier.GoldenToken.lock(
          '0x3131333133310000000000000000000000000000000000000000000000000000',
          // User initially holds 10000000000000000000100
          BigNumber.from('10000000000000000000101')
        )
      ).to.be.revertedWith('lock: not enough GLD token in your wallet');
    });
    it(`should not allow to lock amount lt 0`, async () => {
      const verifier = users[0];

      for (const amount of [BigNumber.from(0), BigNumber.from(-1)]) {
        await expect(
          verifier.GoldenToken.lock(
            '0x3131333133310000000000000000000000000000000000000000000000000000',
            amount
          )
        ).to.be.reverted;
      }
    });
  });

  describe(`unlock`, () => {
    it(`should allow only owner to unlock locked stake`, async () => {
      const { verifier, opts } = await setupLock(users[0]);

      // Revert when non-owner calls unlock
      await expect(verifier.GoldenToken.unlock(verifier.address, opts.hash)).to
        .be.reverted;

      const unlockFn = owner.GoldenToken.unlock(verifier.address, opts.hash);
      await expect(unlockFn).to.not.be.reverted;

      // Locked stake should be 0
      expect(
        await GoldenToken.getLockedStake(verifier.address, opts.hash)
      ).to.equal(BigNumber.from(0));

      // Unlocked stake should be the same amount as initially locked stake
      expect(await GoldenToken.getUnlockedStake(verifier.address)).to.equal(
        opts.amount
      );
    });
    it(`should not unlock non-existing locked stake`, async () => {
      // Undefined account
      await expect(
        owner.GoldenToken.unlock(
          '0x29D7d1dd5B6f9C864d9db560D72a247c178aE86B',
          '0x3131333133310000000000000000000000000000000000000000000000000000'
        )
      ).to.be.revertedWith('unlock: cannot unlock undefined account or hash');

      // Undefined hash
      await expect(
        owner.GoldenToken.unlock(
          users[0].address,
          '0x537262696a6120646f20546f6b696a6100000000000000000000000000000000'
        )
      ).to.be.revertedWith('unlock: cannot unlock undefined account or hash');
    });
    it(`should unlock locked stake and emit event`, async () => {
      const amount = BigNumber.from(30);
      const { verifier, opts } = await setupLock(users[0], {
        hash: '0x537262696a6120646f20546f6b696a6100000000000000000000000000000000',
        amount,
      });

      const unlockFn = owner.GoldenToken.unlock(verifier.address, opts.hash);
      await expect(unlockFn)
        .to.emit(owner.GoldenToken, 'Unlock')
        .withArgs(verifier.address, opts.hash, amount);

      expect(await GoldenToken.getUnlockedStake(verifier.address)).to.equal(
        amount
      );
    });
  });

  describe(`slash`, () => {
    it(`should not allow to be called from non-owner role`, async () => {
      const { verifier, opts } = await setupLock(users[0]);

      for (const addrs of [
        verifier.address,
        users[1].address,
        users[2].address,
      ]) {
        await expect(
          verifier.GoldenToken.slash(addrs, opts.hash, BigNumber.from(10))
        ).to.be.revertedWith('Ownable: caller is not the owner');
      }
    });
    it(`should revert if slashing amount exceeds locked stake`, async () => {
      const { verifier, opts } = await setupLock(users[0]);
      await expect(
        owner.GoldenToken.slash(verifier.address, opts.hash, BigNumber.from(11))
      ).to.revertedWith('slash: exceeds locked staked');

      await expect(
        owner.GoldenToken.slash(verifier.address, opts.hash, BigNumber.from(10))
      ).to.not.be.reverted;
    });
    it(`should revert if slashing undefined account or hash`, async () => {
      const { verifier, opts } = await setupLock(users[0]);

      await expect(
        owner.GoldenToken.slash(users[1].address, opts.hash, BigNumber.from(10))
      ).to.revertedWith('slash: exceeds locked staked');

      await expect(
        owner.GoldenToken.slash(
          verifier.address,
          '0x537262696a6120646f20546f6b696a6100000000000000000000000000000000',
          BigNumber.from(10)
        )
      ).to.revertedWith('slash: exceeds locked staked');
    });
    it(`should deduct slashed amount from locked stake and emit event`, async () => {
      const { verifier, opts } = await setupLock(users[0]);

      // Slash half of locked stake
      const slsFn1 = await owner.GoldenToken.slash(
        verifier.address,
        opts.hash,
        BigNumber.from(5)
      );

      await expect(slsFn1)
        .to.emit(owner.GoldenToken, 'Slashed')
        .withArgs(verifier.address, opts.hash, BigNumber.from(5));

      expect(
        await GoldenToken.getLockedStake(verifier.address, opts.hash)
      ).to.equal(BigNumber.from(5));

      // Slash all
      const slsFn2 = await owner.GoldenToken.slash(
        verifier.address,
        opts.hash,
        BigNumber.from(5)
      );

      await expect(slsFn2)
        .to.emit(owner.GoldenToken, 'Slashed')
        .withArgs(verifier.address, opts.hash, BigNumber.from(5));
      expect(
        await GoldenToken.getLockedStake(verifier.address, opts.hash)
      ).to.equal(BigNumber.from(0));
    });
  });

  describe(`claim`, () => {
    it(`should revert if there's no unlocked stake`, async () => {
      const { verifier } = await setupLock(users[0]);

      await expect(verifier.GoldenToken.claim()).to.be.revertedWith(
        'claim: Nothing to claim'
      );
    });
    it(`should increase balance of verifier and emit balance`, async () => {
      const { verifier, opts, balanceBeforeLock } = await setupLock(users[0]);

      expect(await GoldenToken.balanceOf(verifier.address)).to.equal(
        balanceBeforeLock.sub(opts.amount)
      );

      expect(
        await GoldenToken.getLockedStake(verifier.address, opts.hash)
      ).to.equal(opts.amount);
      expect(await GoldenToken.getUnlockedStake(verifier.address)).to.equal(
        BigNumber.from(0)
      );

      await owner.GoldenToken.unlock(verifier.address, opts.hash);
      expect(await GoldenToken.getUnlockedStake(verifier.address)).to.equal(
        opts.amount
      );
      expect(
        await GoldenToken.getLockedStake(verifier.address, opts.hash)
      ).to.equal(BigNumber.from(0));

      const claimFn = await verifier.GoldenToken.claim();

      await expect(claimFn)
        .to.emit(owner.GoldenToken, 'Claimed')
        .withArgs(verifier.address, opts.amount);

      expect(await GoldenToken.balanceOf(verifier.address)).to.equal(
        balanceBeforeLock
      );

      expect(
        await GoldenToken.getLockedStake(verifier.address, opts.hash)
      ).to.equal(BigNumber.from(0));
      expect(await GoldenToken.getUnlockedStake(verifier.address)).to.equal(
        BigNumber.from(0)
      );
    });
  });
});
