import { expect } from 'chai';
import { Contracts as _Contracts, setupUser, setupUsers, User } from '../utils';
import {
  deployments,
  ethers,
  getNamedAccounts,
  getUnnamedAccounts,
} from 'hardhat';

type LockedStaking = Pick<_Contracts, 'LockedStaking'>;

describe(`ValidatorRole`, () => {
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

  it(`Should allow an owner to add or remove validator`, async () => {
    const validator1 = users[0];
    const validator2 = users[1];

    for (const nonValidator of [validator1, validator2]) {
      await expect(await LockedStaking.isValidator(nonValidator.address)).to.be
        .false;
      const addFn = await owner.LockedStaking.addValidator(
        nonValidator.address
      );
      await expect(addFn)
        .to.emit(LockedStaking, 'ValidatorAdded')
        .withArgs(nonValidator.address, owner.address);
      await expect(await LockedStaking.isValidator(nonValidator.address)).to.be
        .true;
    }

    const rmFn = await owner.LockedStaking.removeValidator(validator2.address);
    await expect(rmFn)
      .to.emit(LockedStaking, 'ValidatorRemoved')
      .withArgs(validator2.address, owner.address);
    await expect(await LockedStaking.isValidator(validator2.address)).to.be
      .false;
  });

  it(`Should not allow validator to add or remove other validator`, async () => {
    const validator1 = users[0];
    const validator2 = users[1];
    for (const nonValidator of [validator1, validator2]) {
      await owner.LockedStaking.addValidator(nonValidator.address);
      await expect(await LockedStaking.isValidator(nonValidator.address)).to.be
        .true;
    }

    await expect(
      validator1.LockedStaking.addValidator(users[3].address)
    ).to.be.revertedWith(ownerErr);

    await expect(
      validator1.LockedStaking.addValidator(validator2.address)
    ).to.be.revertedWith(ownerErr);
  });
});
