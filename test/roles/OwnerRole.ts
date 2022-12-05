import { expect } from 'chai';
import { Contracts as _Contracts, setupUser, setupUsers, User } from '../utils';
import {
  deployments,
  ethers,
  getNamedAccounts,
  getUnnamedAccounts,
} from 'hardhat';

type GoldenToken = Pick<_Contracts, 'GoldenToken'>;

describe(`OwnerRole`, () => {
  let GoldenToken: GoldenToken['GoldenToken'];
  let owner: User<GoldenToken>;
  let users: User<GoldenToken>[];
  const err = 'OwnerRole: caller does not have the Owner role';

  beforeEach(async () => {
    await deployments.fixture(['GoldenToken']);
    GoldenToken = await ethers.getContract('GoldenToken');

    const { deployer } = await getNamedAccounts();
    owner = await setupUser(deployer, { GoldenToken });
    users = await setupUsers(await getUnnamedAccounts(), { GoldenToken });
  });

  it(`Deployer should be owner`, async () => {
    await expect(await GoldenToken.isOwner(owner.address)).to.be.true;
    for (const user of users) {
      await expect(await GoldenToken.isOwner(user.address)).to.be.false;
    }
  });

  it(`Should allow an owner to add or remove owners`, async () => {
    const owner1 = owner;
    const owner2 = users[0];
    await expect(await GoldenToken.isOwner(owner1.address)).to.be.true;

    const addFn = await GoldenToken.addOwner(owner2.address);
    await expect(addFn)
      .to.emit(GoldenToken, 'OwnerAdded')
      .withArgs(owner2.address, owner1.address);
    await expect(await GoldenToken.isOwner(owner2.address)).to.be.true;

    const rmFn = await owner2.GoldenToken.removeOwner(owner1.address);
    await expect(rmFn)
      .to.emit(GoldenToken, 'OwnerRemoved')
      .withArgs(owner1.address, owner2.address);
    await expect(await GoldenToken.isOwner(owner1.address)).to.be.false;
  });

  it(`Should not allow invalid address to be added as owner`, async () => {
    await expect(
      owner.GoldenToken.addOwner('0x0000000000000000000000000000000000000000')
    ).to.be.revertedWith('Invalid 0x0 address');
  });

  it(`Should not allow non owner to add or remove owners`, async () => {
    const user = users[0];
    await expect(
      user.GoldenToken.addOwner(users[1].address)
    ).to.be.revertedWith(err);

    await expect(
      user.GoldenToken.removeOwner(users[1].address)
    ).to.be.revertedWith(err);
  });
});
