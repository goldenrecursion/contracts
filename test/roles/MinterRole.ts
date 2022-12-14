import { expect } from 'chai';
import { Contracts as _Contracts, setupUser, setupUsers, User } from '../utils';
import {
  deployments,
  ethers,
  getNamedAccounts,
  getUnnamedAccounts,
} from 'hardhat';

type GoldenToken = Pick<_Contracts, 'GoldenToken'>;

describe(`MinterRole`, () => {
  let GoldenToken: GoldenToken['GoldenToken'];
  let owner: User<GoldenToken>;
  let users: User<GoldenToken>[];
  const ownerErr = 'OwnerRole: caller does not have the Owner role';

  beforeEach(async () => {
    await deployments.fixture(['GoldenToken']);
    GoldenToken = await ethers.getContract('GoldenToken');
    const { deployer } = await getNamedAccounts();
    owner = await setupUser(deployer, { GoldenToken });
    users = await setupUsers(await getUnnamedAccounts(), { GoldenToken });
  });

  it(`Should allow an owner to add or remove minters`, async () => {
    const minter1 = users[0];
    const minter2 = users[1];

    for (const nonMinter of [minter1, minter2]) {
      await expect(await GoldenToken.isMinter(nonMinter.address)).to.be.false;
      const addFn = await owner.GoldenToken.addMinter(nonMinter.address);
      await expect(addFn)
        .to.emit(GoldenToken, 'MinterAdded')
        .withArgs(nonMinter.address, owner.address);
      await expect(await GoldenToken.isMinter(nonMinter.address)).to.be.true;
    }

    const rmFn = await owner.GoldenToken.removeMinter(minter2.address);
    await expect(rmFn)
      .to.emit(GoldenToken, 'MinterRemoved')
      .withArgs(minter2.address, owner.address);
    await expect(await GoldenToken.isMinter(minter2.address)).to.be.false;
  });

  it(`Should not allow minter to add or remove other minters`, async () => {
    const minter1 = users[0];
    const minter2 = users[1];
    for (const minter of [minter1, minter2]) {
      await owner.GoldenToken.addMinter(minter.address);
      await expect(await GoldenToken.isMinter(minter.address)).to.be.true;
    }

    await expect(
      minter1.GoldenToken.addMinter(users[3].address)
    ).to.be.revertedWith(ownerErr);

    await expect(
      minter1.GoldenToken.removeMinter(minter2.address)
    ).to.be.revertedWith(ownerErr);
  });
});
