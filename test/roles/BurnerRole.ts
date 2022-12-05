import { expect } from 'chai';
import { Contracts as _Contracts, setupUser, setupUsers, User } from '../utils';
import {
  deployments,
  ethers,
  getNamedAccounts,
  getUnnamedAccounts,
} from 'hardhat';

type GoldenToken = Pick<_Contracts, 'GoldenToken'>;

describe(`BurnerRole`, () => {
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

  it(`Should allow an owner to add or remove burners`, async () => {
    const burner1 = users[0];
    const burner2 = users[1];

    for (const nonBurner of [burner1, burner2]) {
      await expect(await GoldenToken.isBurner(nonBurner.address)).to.be.false;
      const addFn = await owner.GoldenToken.addBurner(nonBurner.address);
      await expect(addFn)
        .to.emit(GoldenToken, 'BurnerAdded')
        .withArgs(nonBurner.address, owner.address);
      await expect(await GoldenToken.isBurner(nonBurner.address)).to.be.true;
    }

    const rmFn = await owner.GoldenToken.removeBurner(burner2.address);
    await expect(rmFn)
      .to.emit(GoldenToken, 'BurnerRemoved')
      .withArgs(burner2.address, owner.address);
    await expect(await GoldenToken.isBurner(burner2.address)).to.be.false;
  });

  it(`Should not allow burner to add or remove other burners`, async () => {
    const burner1 = users[0];
    const burner2 = users[1];
    for (const burner of [burner1, burner2]) {
      await owner.GoldenToken.addBurner(burner.address);
      await expect(await GoldenToken.isBurner(burner.address)).to.be.true;
    }

    await expect(
      burner1.GoldenToken.addBurner(users[3].address)
    ).to.be.revertedWith(ownerErr);

    await expect(
      burner1.GoldenToken.addBurner(burner2.address)
    ).to.be.revertedWith(ownerErr);
  });
});
