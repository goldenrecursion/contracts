import { expect } from 'chai';
import { Contracts as _Contracts, setupUser, setupUsers, User } from '../utils';
import {
  deployments,
  ethers,
  getNamedAccounts,
  getUnnamedAccounts,
} from 'hardhat';

type LockedStaking = Pick<_Contracts, 'LockedStaking'>;

describe(`PauserRole`, () => {
  let LockedStaking: LockedStaking['LockedStaking'];
  let owner: User<LockedStaking>;
  let users: User<LockedStaking>[];
  const ownerErr = 'OwnerRole: caller does not have the Owner role';

  beforeEach(async () => {
    await deployments.fixture(['GoldenToken', 'LockedStaking']);
    LockedStaking = await ethers.getContract('LockedStaking');
    const { deployer } = await getNamedAccounts();
    owner = await setupUser(deployer, { LockedStaking });
    users = await setupUsers(await getUnnamedAccounts(), { LockedStaking });
  });

  it(`Should allow an owner to add or remove pauser`, async () => {
    const pauser1 = users[0];
    const pauser2 = users[1];

    for (const nonPauser of [pauser1, pauser2]) {
      await expect(await LockedStaking.isPauser(nonPauser.address)).to.be.false;
      const addFn = await owner.LockedStaking.addPauser(nonPauser.address);
      await expect(addFn)
        .to.emit(LockedStaking, 'PauserAdded')
        .withArgs(nonPauser.address, owner.address);
      await expect(await LockedStaking.isPauser(nonPauser.address)).to.be.true;
    }

    const rmFn = await owner.LockedStaking.removePauser(pauser2.address);
    await expect(rmFn)
      .to.emit(LockedStaking, 'PauserRemoved')
      .withArgs(pauser2.address, owner.address);
    await expect(await LockedStaking.isPauser(pauser2.address)).to.be.false;
  });

  it(`Should not allow pauser to add or remove other pauser`, async () => {
    const pauser1 = users[0];
    const pauser2 = users[1];
    for (const burner of [pauser1, pauser2]) {
      await owner.LockedStaking.addPauser(burner.address);
      await expect(await LockedStaking.isPauser(burner.address)).to.be.true;
    }

    await expect(
      pauser1.LockedStaking.addPauser(users[3].address)
    ).to.be.revertedWith(ownerErr);

    await expect(
      pauser1.LockedStaking.addPauser(pauser2.address)
    ).to.be.revertedWith(ownerErr);
  });
});
