import { expect } from 'chai';
import {
  deployments,
  ethers,
  getNamedAccounts,
  getUnnamedAccounts,
} from 'hardhat';
import { setupUsers, setupUser, toBN, User } from '../utils';
import {
  LockStakeBuilder,
  Contracts,
  GoldenToken,
  LockedStaking,
} from './LockedStaking.utils';

const defaultHash =
  '0x3131333133310000000000000000000000000000000000000000000000000000';

describe(`LockedStaking`, () => {
  let GoldenToken: GoldenToken['GoldenToken'];
  let owner: User<Contracts>;
  let users: User<Contracts>[];
  const VALIDATOR_ROLE =
    '0xa95257aebefccffaada4758f028bce81ea992693be70592f620c4c9a0d9e715a';
  const PAUSER_ROLE =
    '0x65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a';

  let LockedStaking: LockedStaking['LockedStaking'];

  // Pre-stake & approve
  const prepare = async (
    verifier: User<Contracts>,
    grantValidatorRole = true,
    mintAmount = 100,
    approveAmount = 100
  ) => {
    const builder = new LockStakeBuilder()
      .setOwner(owner)
      .setVerifier(verifier)
      .setHash(defaultHash)
      .setLockedStaking(LockedStaking)
      .build();
    await builder.prepare(mintAmount, approveAmount);
    if (grantValidatorRole) {
      await builder.grantRole(VALIDATOR_ROLE);
    }

    return builder;
  };

  beforeEach(async () => {
    await deployments.fixture(['GoldenToken', 'LockedStaking']);
    GoldenToken = await ethers.getContract('GoldenToken');
    LockedStaking = await ethers.getContract('LockedStaking');

    const contracts = { GoldenToken, LockedStaking };
    const { deployer } = await getNamedAccounts();
    owner = await setupUser(deployer, contracts);
    users = await setupUsers(await getUnnamedAccounts(), contracts);
  });

  describe(`Deployment`, () => {
    it(`Should have correct admin setup`, async () => {
      const ADMIN_ROLE = await LockedStaking.DEFAULT_ADMIN_ROLE();
      await expect(await LockedStaking.hasRole(ADMIN_ROLE, owner.address)).to.be
        .true;
      await expect(await LockedStaking.hasRole(PAUSER_ROLE, owner.address)).to
        .be.true;

      await expect(await LockedStaking.hasRole(ADMIN_ROLE, users[0].address)).to
        .be.false;
      await expect(await LockedStaking.hasRole(PAUSER_ROLE, users[0].address))
        .to.be.false;

      // Should not have validator role by default
      await expect(await LockedStaking.hasRole(VALIDATOR_ROLE, owner.address))
        .to.be.false;
    });
  });

  describe(`Role administration`, () => {
    it(`Admin should set and revoke validator role`, async () => {
      const builder = await prepare(users[1], false);
      const VALIDATORS = [users[1].address, users[2].address];

      for (const validator of VALIDATORS) {
        await builder
          .getOwner()
          .LockedStaking.grantRole(VALIDATOR_ROLE, validator);

        await expect(await LockedStaking.hasRole(VALIDATOR_ROLE, validator));
      }

      await LockedStaking.revokeRole(VALIDATOR_ROLE, VALIDATORS[0]);
      await expect(await LockedStaking.hasRole(VALIDATOR_ROLE, VALIDATORS[0]))
        .to.be.false;
      await expect(await LockedStaking.hasRole(VALIDATOR_ROLE, VALIDATORS[1]))
        .to.be.true;
    });

    it(`Should not allow validator role, role administration`, async () => {
      const builder = await prepare(users[1], false);
      const VALIDATORS = [users[1], users[2]];

      for (const validator of VALIDATORS) {
        await builder
          .getOwner()
          .LockedStaking.grantRole(VALIDATOR_ROLE, validator.address);

        await expect(
          await LockedStaking.hasRole(VALIDATOR_ROLE, validator.address)
        );

        const ADMIN_ROLE = await LockedStaking.DEFAULT_ADMIN_ROLE();
        await expect(
          validator.LockedStaking.revokeRole(
            ADMIN_ROLE,
            builder.getOwner().address
          )
        ).to.be.revertedWith(
          `AccessControl: account ${validator.address.toLowerCase()} is missing role ${ADMIN_ROLE.toLowerCase()}`
        );

        await expect(
          validator.LockedStaking.revokeRole(VALIDATOR_ROLE, validator.address)
        ).to.be.revertedWith(
          `AccessControl: account ${validator.address.toLowerCase()} is missing role ${ADMIN_ROLE.toLowerCase()}`
        );
      }
    });
  });

  describe(`Locking stake`, () => {
    it(`Should not lock stake if amount is 0`, async () => {
      const lockedStakingBuilder = new LockStakeBuilder()
        .setOwner(owner)
        .setVerifier(users[1])
        .setHash(defaultHash)
        .setLockedStaking(LockedStaking)
        .build();

      await expect(lockedStakingBuilder.lockStake(0)).to.revertedWith(
        'lock: invalid amount'
      );
    });

    it(`Should not lock stake if pre-stake is 0`, async () => {
      const lockedStakingBuilder = new LockStakeBuilder()
        .setOwner(owner)
        .setVerifier(users[1])
        .setHash(defaultHash)
        .setLockedStaking(LockedStaking)
        .build();

      expect(await lockedStakingBuilder.getLockedStake()).to.equals(toBN(0));

      await expect(lockedStakingBuilder.lockStake(10)).to.revertedWith(
        'lock: invalid amount'
      );
    });

    it(`Should not lock stake if stake has already been locked`, async () => {
      const lockStakingBuilder = new LockStakeBuilder()
        .setOwner(owner)
        .setVerifier(users[2])
        .setHash(defaultHash)
        .setLockedStaking(LockedStaking)
        .build();

      expect(await lockStakingBuilder.getBalance()).to.equal(toBN(0));
      await lockStakingBuilder.mint(500);
      expect(await lockStakingBuilder.getBalance()).to.equal(toBN(500));

      // Approve
      await lockStakingBuilder.approve(100);
      expect(await lockStakingBuilder.allowance()).to.equal(toBN(100));

      await lockStakingBuilder.preStake(30);
      // Verify tokens have been transferred from address to contract
      expect(await lockStakingBuilder.getBalance()).to.equal(toBN(470));
      // Verify stake has been changed to the preStake value
      expect(await lockStakingBuilder.getClaimableStake()).to.equal(toBN(30));

      await lockStakingBuilder.lockStake(10);
      // Verify locked stake has been locked
      expect(await lockStakingBuilder.getLockedStake()).to.equals(toBN(10));

      // Verify claimable stake has been deducted by the locked stake amount
      expect(await lockStakingBuilder.getClaimableStake()).to.equal(20);
      expect(await lockStakingBuilder.getClaimableStake()).to.not.equal(30);

      // Try locking on the same hash
      await expect(lockStakingBuilder.lockStake(10)).to.revertedWith(
        'lock: duplicate entry'
      );
      // Try locking on the same hash with different number
      await expect(lockStakingBuilder.lockStake(5)).to.revertedWith(
        'lock: duplicate entry'
      );

      // Verify locked and claimable state hasn't changed
      expect(await lockStakingBuilder.getLockedStake()).to.equal(toBN(10));
      expect(await lockStakingBuilder.getClaimableStake()).to.equal(20);
    });

    it(`Should not lock if pre staked amount is less then amount to be locked`, async () => {
      const builder = new LockStakeBuilder()
        .setOwner(owner)
        .setVerifier(users[3])
        .setHash(defaultHash)
        .setLockedStaking(LockedStaking)
        .build();
      await builder.prepare(10, 10);

      await builder.preStake(10);
      expect(await builder.getBalance()).to.equal(toBN(0));
      expect(await builder.getClaimableStake()).to.equal(toBN(10));

      await expect(builder.lockStake(20)).to.revertedWith(
        'lock: invalid amount'
      );
      expect(await builder.getLockedStake()).to.equal(toBN(0));
    });

    it(`Should successfully lock stake`, async () => {
      const builder = new LockStakeBuilder()
        .setOwner(owner)
        .setVerifier(users[3])
        .setHash(defaultHash)
        .setLockedStaking(LockedStaking)
        .build();

      const { balance, allowance } = await builder.prepare(100, 100);
      expect(await GoldenToken.balanceOf(users[3].address)).to.equals(balance);
      expect(
        await GoldenToken.allowance(users[3].address, LockedStaking.address)
      ).to.equals(allowance);

      await builder.preStake(90);
      expect(await builder.getBalance()).to.equal(toBN(10));
      expect(await builder.getClaimableStake()).to.equal(toBN(90));

      const lockFn = await builder.lockStake(10);
      await expect(lockFn)
        .to.emit(LockedStaking, 'Lock')
        .withArgs(builder.getVerifier().address, defaultHash, toBN(10));
      expect(await builder.getLockedStake()).to.equal(toBN(10));
      expect(await builder.getClaimableStake()).to.equal(toBN(80));
    });
  });

  describe(`Unlocking stake`, () => {
    const _calculateReward = (
      unlockedAmount: number,
      percentReward: number
    ) => {
      const _reward = toBN(unlockedAmount * percentReward).div(100);
      return toBN(unlockedAmount).add(_reward);
    };

    it(`Should not unlock stake that hasn't been locked`, async () => {
      const builder = await prepare(users[1]);

      await expect(builder.unlockStake(30, 20)).to.revertedWith(
        'unlock: cannot unlock non existing stake'
      );
    });

    it(`Should not unlock if it's called by non-validator role`, async () => {
      const builder = await prepare(users[1], false);

      await builder.preStake(30);
      await builder.lockStake(30);

      await expect(
        builder
          .getVerifier()
          .LockedStaking.unlockStake(
            builder.getVerifier().address,
            builder.getHash(),
            toBN(30),
            toBN(20)
          )
      ).to.be.revertedWith(
        `AccessControl: account ${builder
          .getVerifier()
          .address.toLowerCase()} is missing role ${VALIDATOR_ROLE.toLowerCase()}`
      );
    });

    it(`Should not unlock if it exceeds total locked stake`, async () => {
      const builder = await prepare(users[1]);

      await builder.preStake(30);
      await builder.lockStake(30);

      await expect(builder.unlockStake(31, 20)).to.revertedWith(
        'unlock: exceeds total locked stake'
      );
    });

    it(`Should un-lock portion of the stake`, async () => {
      const TO_LOCK = toBN(20);
      const TO_UNLOCK = toBN(5);
      const REWARD_PERCENT = toBN(20);

      const builder = await prepare(users[1]);

      await builder.preStake(TO_LOCK.toNumber());
      await builder.lockStake(TO_LOCK.toNumber());

      expect(await builder.getLockedStake()).to.equal(TO_LOCK);
      expect(await builder.getBalance()).to.equal(toBN(100).sub(TO_LOCK));
      expect(await builder.getClaimableStake()).to.equal(toBN(0));

      const unlockFn = await builder.unlockStake(
        TO_UNLOCK.toNumber(),
        REWARD_PERCENT.toNumber()
      );
      const totalReward = _calculateReward(
        TO_UNLOCK.toNumber(),
        REWARD_PERCENT.toNumber()
      );

      await expect(unlockFn)
        .to.emit(LockedStaking, 'Unlock')
        .withArgs(builder.getVerifier().address, defaultHash, totalReward);

      expect(totalReward).to.equal(toBN(6));
      expect(await builder.getClaimableStake()).to.equal(totalReward);
      expect(await builder.getLockedStake()).to.equal(TO_LOCK.sub(TO_UNLOCK));
      expect(await builder.getBalance()).to.equal(toBN(80));
    });

    it(`Should un-lock all locked stake`, async () => {
      const builder = await prepare(users[1]);
      const TO_LOCK = toBN(20);
      const TO_UNLOCK = toBN(20);
      const REWARD_PERCENT = toBN(50);

      await builder.preStake(TO_LOCK.toNumber());
      await builder.lockStake(TO_LOCK.toNumber());
      await builder.unlockStake(
        TO_UNLOCK.toNumber(),
        REWARD_PERCENT.toNumber()
      );
      const totalReward = _calculateReward(
        TO_UNLOCK.toNumber(),
        REWARD_PERCENT.toNumber()
      );

      expect(totalReward).to.equal(toBN(30));
      expect(await builder.getClaimableStake()).to.equal(totalReward);
      expect(await builder.getLockedStake()).to.equal(toBN(0));
    });
  });

  describe(`Slash`, () => {
    it(`Non-validator roles should not be allowed to call slash fn`, async () => {
      const user = users[3];
      await expect(
        user.LockedStaking.slash(users[2].address, defaultHash, toBN(10))
      ).to.be.revertedWith(
        `AccessControl: account ${user.address.toLowerCase()} is missing role ${VALIDATOR_ROLE.toLowerCase()}`
      );
    });

    it(`Should revert if locked stake is 0`, async () => {
      const builder = await prepare(users[2]);

      await expect(
        builder.slash(builder.getVerifier().address, 100)
      ).to.be.revertedWith('slash: cannot slash 0 locked stake');
    });

    it(`Should revert if slash amount exceeds locked amount`, async () => {
      const builder = await prepare(users[2]);
      await builder.preStake(30);
      await builder.lockStake(30);

      expect(await builder.getLockedStake()).to.equal(toBN(30));

      await expect(
        builder.slash(builder.getVerifier().address, 100)
      ).to.be.revertedWith('slash: exceeds balance');
    });

    it(`Should slash partial amount of locked stake`, async () => {
      const builder = await prepare(users[2]);
      const LOCK_AMOUNT = toBN(30);
      const SLASH_AMOUNT = toBN(20);

      await builder.preStake(LOCK_AMOUNT.toNumber());
      await builder.lockStake(LOCK_AMOUNT.toNumber());

      const slashFn = await builder.slash(
        builder.getVerifier().address,
        SLASH_AMOUNT.toNumber()
      );

      await expect(slashFn)
        .to.emit(LockedStaking, 'Slashed')
        .withArgs(builder.getVerifier().address, defaultHash, SLASH_AMOUNT);

      expect(await builder.getLockedStake()).to.equal(
        LOCK_AMOUNT.sub(SLASH_AMOUNT)
      );
      expect(await builder.getClaimableStake()).to.equal(toBN(0));
    });
  });

  describe(`Claim`, () => {
    it(`Should revert if unlocked stake is 0`, async () => {
      const builder = await prepare(users[1]);
      const LOCK_AMOUNT = 30;

      await builder.preStake(LOCK_AMOUNT);
      await builder.lockStake(LOCK_AMOUNT);

      expect(await builder.getLockedStake()).to.equal(toBN(LOCK_AMOUNT));
      expect(await builder.getClaimableStake()).to.equal(toBN(0));
      expect(await builder.getBalance()).to.equal(toBN(70));

      await expect(builder.claim(LOCK_AMOUNT)).to.be.revertedWith(
        'claim: nothing to claim'
      );
    });

    it(`Should revert if claim amount exceeds claimable amount`, async () => {
      const builder = await prepare(users[1]);
      const LOCK_AMOUNT = 30;

      await builder.preStake(LOCK_AMOUNT);
      await builder.lockStake(LOCK_AMOUNT);
      await builder.unlockStake(LOCK_AMOUNT, 20);

      expect(await builder.getLockedStake()).to.equal(toBN(0));
      expect(await builder.getClaimableStake()).to.equal(toBN(36));
      expect(await builder.getBalance()).to.equal(toBN(70));

      await expect(builder.claim(37)).to.be.revertedWith(
        'claim: exceeds balance'
      );
    });

    it(`Should paritally claim tokens successfully`, async () => {
      const builder = await prepare(users[1]);
      const LOCK_AMOUNT = 30;

      await builder.preStake(LOCK_AMOUNT);
      await builder.lockStake(LOCK_AMOUNT);
      await builder.unlockStake(LOCK_AMOUNT, 20);

      expect(await builder.getLockedStake()).to.equal(toBN(0));
      expect(await builder.getClaimableStake()).to.equal(toBN(36));
      expect(await builder.getBalance()).to.equal(toBN(70));

      // SEND SOME BUFFER AMOUNT OF TOKENS TO LOCKED_LOCKED STAKING SMART CONTRACT
      // IN ORDER TO BE ABLE TO PAY REWARDS
      await GoldenToken.transfer(
        LockedStaking.address,
        toBN(LOCK_AMOUNT).add(toBN(100))
      );

      const claimFn = await builder.claim(10);
      await expect(claimFn)
        .to.emit(LockedStaking, 'Claimed')
        .withArgs(builder.getVerifier().address, toBN(10));

      expect(await builder.getClaimableStake()).to.equal(toBN(26));
      expect(await builder.getBalance()).to.equal(toBN(70 + 10));
    });

    it(`Should claim all tokens successfully`, async () => {
      const builder = await prepare(users[1]);
      const LOCK_AMOUNT = 30;

      await builder.preStake(LOCK_AMOUNT);
      await builder.lockStake(LOCK_AMOUNT);
      await builder.unlockStake(LOCK_AMOUNT, 20);

      expect(await builder.getLockedStake()).to.equal(toBN(0));
      expect(await builder.getClaimableStake()).to.equal(toBN(36));
      expect(await builder.getBalance()).to.equal(toBN(70));

      // SEND SOME BUFFER AMOUNT OF TOKENS TO LOCKED_LOCKED STAKING SMART CONTRACT
      // IN ORDER TO BE ABLE TO PAY REWARDS
      await GoldenToken.transfer(
        LockedStaking.address,
        toBN(LOCK_AMOUNT).add(toBN(100))
      );

      const claimFn = await builder.claim(36);
      await expect(claimFn)
        .to.emit(LockedStaking, 'Claimed')
        .withArgs(builder.getVerifier().address, toBN(36));

      expect(await builder.getClaimableStake()).to.equal(toBN(0));
      expect(await builder.getBalance()).to.equal(toBN(70 + 36));
    });

    it(`Should not be allowed to claim if contract is paused`, async () => {
      const builder = await prepare(users[1]);
      await builder.grantRole(PAUSER_ROLE, users[2].address);
      await expect(await LockedStaking.hasRole(PAUSER_ROLE, users[2].address))
        .to.be.true;

      await users[2].LockedStaking.pause();

      const LOCK_AMOUNT = 30;

      await builder.preStake(LOCK_AMOUNT);
      await builder.lockStake(LOCK_AMOUNT);
      await builder.unlockStake(LOCK_AMOUNT, 20);

      await expect(builder.claim(10)).to.be.revertedWith('Pausable: paused');
    });
  });
});
