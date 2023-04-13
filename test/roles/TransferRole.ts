import { expect } from 'chai';
import { Contracts as _Contracts, setupUser, setupUsers, User } from '../utils';
import {
  deployments,
  ethers,
  getNamedAccounts,
  getUnnamedAccounts,
} from 'hardhat';

type GoldenToken = Pick<_Contracts, 'GoldenToken'>;

describe(`TransferRole`, () => {
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

  it(`Should allow an owner to grant and revoke transfer`, async () => {
    const alice = users[0];
    const bob = users[1];

    for (const nonTransferAcc of [alice, bob]) {
      await expect(
        await GoldenToken.hasGrantsToTransfer(nonTransferAcc.address)
      ).to.be.false;
      const addFn = await owner.GoldenToken.grantTransfer(
        nonTransferAcc.address
      );
      await expect(addFn)
        .to.emit(GoldenToken, 'TransferGranted')
        .withArgs(nonTransferAcc.address, owner.address);
      await expect(
        await GoldenToken.hasGrantsToTransfer(nonTransferAcc.address)
      ).to.be.true;
    }

    const rmFn = await owner.GoldenToken.revokeTransfer(bob.address);
    await expect(rmFn)
      .to.emit(GoldenToken, 'TransferRevoked')
      .withArgs(bob.address, owner.address);
    await expect(await GoldenToken.hasGrantsToTransfer(bob.address)).to.be
      .false;
  });

  it(`Granted addresses should not allow to grant or revoke transfers`, async () => {
    const alice = users[0];
    const bob = users[1];
    for (const grantedAcc of [alice, bob]) {
      await owner.GoldenToken.grantTransfer(grantedAcc.address);
      await expect(await GoldenToken.hasGrantsToTransfer(grantedAcc.address)).to
        .be.true;
    }

    await expect(
      alice.GoldenToken.grantTransfer(users[3].address)
    ).to.be.revertedWith(ownerErr);

    await expect(
      alice.GoldenToken.revokeTransfer(bob.address)
    ).to.be.revertedWith(ownerErr);
  });
});
