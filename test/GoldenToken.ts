import { expect } from 'chai';
import {
  deployments,
  ethers,
  getNamedAccounts,
  getUnnamedAccounts,
} from 'hardhat';
import { INITIAL_SUPPLY } from '../deploy/3_GoldenToken';

import {
  setupUsers,
  setupUser,
  User,
  Contracts as _Contracts,
  toBN,
} from './utils';
import { BigNumber } from 'ethers';

type Contracts = Pick<_Contracts, 'GoldenToken'>;

describe('GoldenToken - ERC20 token', function () {
  let GoldenToken: Contracts['GoldenToken'];
  let owner: User<Contracts>;
  let users: User<Contracts>[];

  beforeEach(async function () {
    await deployments.fixture(['GoldenToken']);
    GoldenToken = await ethers.getContract('GoldenToken');
    const contracts = { GoldenToken };
    const { deployer } = await getNamedAccounts();
    owner = await setupUser(deployer, contracts);
    users = await setupUsers(await getUnnamedAccounts(), contracts);
  });

  describe('Deployment', function () {
    it('Should have correct token total supply', async function () {
      expect(await GoldenToken.totalSupply()).to.equal(INITIAL_SUPPLY);
    });

    it('Should set owner with transfer grant', async function () {
      expect(await GoldenToken.hasGrantsToTransfer(owner.address)).to.be.true;

      for (const user of users) {
        expect(await GoldenToken.hasGrantsToTransfer(user.address)).to.be.false;
      }
    });
  });

  describe(`Transfers`, function () {
    const TRANSFER_ERROR_MSG =
      'Transfer: caller does not have the grants to transfer';

    const transfer = async (to: string, amount: BigNumber) =>
      owner.GoldenToken.transfer(to, amount);

    it(`Should not allow arbitrary addresses to transfer`, async function () {
      const sender = users[0];
      const receiver = users[1];

      // To mitigate ERC20: Transfer exceeds balance error
      // we will transfer some GLD from the owner who has grants to transfer
      await transfer(sender.address, toBN(10));
      expect(await GoldenToken.balanceOf(sender.address)).to.equal(toBN(10));

      await expect(
        sender.GoldenToken.transfer(receiver.address, toBN(1))
      ).to.be.revertedWith(TRANSFER_ERROR_MSG);
    });

    it(`Should allow granted addresses to transfer to arbitrary address`, async function () {
      const alice = users[0];
      const bob = users[1];

      // Grant transfers
      await owner.GoldenToken.grantTransfer(alice.address);

      // Send some GLD to Alice
      await transfer(alice.address, toBN(10));

      await alice.GoldenToken.transfer(bob.address, toBN(3));
      expect(await GoldenToken.balanceOf(bob.address)).to.equal(toBN(3));
      expect(await GoldenToken.balanceOf(alice.address)).to.equal(toBN(7));
    });

    it(`Should require minter to be granted a TransferRole`, async function () {
      const minter = users[3];
      const bob = users[0];

      expect(await GoldenToken.isMinter(minter.address)).to.be.false;
      await owner.GoldenToken.addMinter(minter.address);
      expect(await GoldenToken.isMinter(minter.address)).to.be.true;

      await expect(
        minter.GoldenToken.mint(bob.address, toBN(1))
      ).to.be.revertedWith(TRANSFER_ERROR_MSG);

      await owner.GoldenToken.grantTransfer(minter.address);
      await minter.GoldenToken.mint(bob.address, toBN(1));

      expect(await GoldenToken.balanceOf(bob.address)).to.equal(toBN(1));
    });
  });
});
