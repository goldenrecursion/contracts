import { expect } from 'chai';
import { setupUser, setupUsers, User } from '../utils';
import {
  deployments,
  ethers,
  getNamedAccounts,
  getUnnamedAccounts,
} from 'hardhat';
import {
  LockStakeBuilder,
  Contracts,
  GoldenToken,
  LockedStaking,
} from '../locked-staking/LockedStaking.utils';
import { toBN } from '../../utils/number.utils';

describe(`Pausable`, () => {
  let LockedStaking: LockedStaking['LockedStaking'];
  let GoldenToken: GoldenToken['GoldenToken'];
  let owner: User<Contracts>;
  let users: User<Contracts>[];
  const pauserErr = 'PauserRole: caller does not have the Pauser role';

  beforeEach(async () => {
    await deployments.fixture(['GoldenToken', 'LockedStaking']);
    GoldenToken = await ethers.getContract('GoldenToken');
    LockedStaking = await ethers.getContract('LockedStaking');
    const { deployer } = await getNamedAccounts();
    const contracts = { LockedStaking, GoldenToken };
    owner = await setupUser(deployer, contracts);
    users = await setupUsers(await getUnnamedAccounts(), contracts);
  });

  it(`Pauser should be able to pause/unpause the contract`, async () => {
    const pauser = users[1];
    await owner.LockedStaking.addPauser(pauser.address);
    await expect(await LockedStaking.isPauser(pauser.address)).to.be.true;

    // try pausing with non-pauser role
    await expect(users[2].LockedStaking.pause()).to.be.revertedWith(pauserErr);

    const pauseFn = await pauser.LockedStaking.pause();
    await expect(pauseFn)
      .to.emit(LockedStaking, 'Paused')
      .withArgs(pauser.address);
    await expect(await LockedStaking.paused()).to.be.true;

    const unpause = await pauser.LockedStaking.unpause();
    await expect(unpause)
      .to.emit(LockedStaking, 'Unpaused')
      .withArgs(pauser.address);
    await expect(await LockedStaking.paused()).to.be.false;
  });

  it(`Paused contract should prevent claiming`, async () => {
    const builder = new LockStakeBuilder()
      .setOwner(owner)
      .setVerifier(users[1])
      .setPauser(users[4])
      .setValidator(users[5])
      .setHash(
        '0x48656c6c6f20776f726c64000000000000000000000000000000000000000000'
      )
      .setLockedStaking(LockedStaking)
      .build();

    await builder.addValidatorRole();

    await expect(await LockedStaking.isValidator(users[5].address)).to.be.true;

    // Mint 100 GLD to Verifier address
    await builder.prepare(100, 100);
    expect(await GoldenToken.balanceOf(builder.getVerifier().address)).to.equal(
      toBN(100)
    );

    await builder.approve(100);
    await builder.preStake(100);
    expect(await GoldenToken.balanceOf(builder.getVerifier().address)).to.equal(
      toBN(0)
    );

    await builder.lockStake(100);
    expect(
      await LockedStaking.getLockedStake(
        builder.getVerifier().address,
        builder.getHash()
      )
    ).to.equal(toBN(100));

    await builder.unlockStake(100, 20);
    expect(
      await LockedStaking.getClaimableStake(builder.getVerifier().address)
    ).to.be.gt(toBN(100));

    await builder.addPauserRole();
    await expect(await LockedStaking.isPauser(users[4].address)).to.be.true;

    await builder.pause();
    await expect(await LockedStaking.paused()).to.be.true;

    await expect(builder.claim(100)).to.be.revertedWith('Pausable: paused');
  });
});
