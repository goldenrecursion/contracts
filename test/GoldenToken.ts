import { expect } from 'chai';
import {
  deployments,
  ethers,
  getNamedAccounts,
  getUnnamedAccounts,
} from 'hardhat';

import {
  setupUsers,
  setupUser,
  User,
  TOTAL_SUPPLY,
  Contracts as _Contracts,
} from './utils';

type Contracts = Pick<_Contracts, 'GoldenToken'>;

describe('GoldenToken - ERC20 token', function () {
  let contract: Contracts['GoldenToken'];
  let owner: User<Contracts>;
  let users: User<Contracts>[];

  beforeEach(async function () {
    await deployments.fixture(['GoldenToken']);
    contract = await ethers.getContract('GoldenToken');
    const contracts = { GoldenToken: contract };
    const { deployer } = await getNamedAccounts();
    owner = await setupUser(deployer, contracts);
    users = await setupUsers(await getUnnamedAccounts(), contracts);
  });

  describe('Deployment', function () {
    it('Should have correct token total supply', async function () {
      expect(await contract.totalSupply()).to.equal(TOTAL_SUPPLY);
    });

    it('Should assign the total supply of tokens to the deployer', async function () {
      const ownerBalance = await contract.balanceOf(owner.address);
      expect(TOTAL_SUPPLY).to.equal(ownerBalance);
    });
  });

  describe('Pausable', function () {
    it('(un)pausing should (un)block transactions', async function () {
      await owner.GoldenToken.pause();
      await expect(
        owner.GoldenToken.transfer(users[0].address, 50)
      ).to.be.revertedWith('Pausable: paused');
      await owner.GoldenToken.unpause();
      await expect(owner.GoldenToken.transfer(users[0].address, 50)).to.not.be
        .reverted;
    });
  });

  describe('Transactions', function () {
    it('Should transfer tokens between accounts', async function () {
      expect(await contract.balanceOf(users[0].address)).to.equal(0);

      // Transfer 50 tokens from owner to users[0].address
      await owner.GoldenToken.transfer(users[0].address, 50);
      expect(await contract.balanceOf(users[0].address)).to.equal(50);

      // Transfer 50 tokens from users[0].address to addr2
      await users[0].GoldenToken.transfer(users[1].address, 50);
      expect(await contract.balanceOf(users[1].address)).to.equal(50);
      expect(await contract.balanceOf(users[0].address)).to.equal(0);
    });

    it('Should fail if sender doesn’t have enough tokens', async function () {
      const initialOwnerBalance = await contract.balanceOf(owner.address);

      // Try to send 1 token from users[0].address (0 tokens) to owner (1000000 tokens).
      // `require` will evaluate false and revert the transaction.
      await expect(
        users[0].GoldenToken.transfer(owner.address, 1)
      ).to.be.revertedWith('ERC20: transfer amount exceeds balance');

      // Owner balance shouldn't have changed.
      expect(await contract.balanceOf(owner.address)).to.equal(
        initialOwnerBalance
      );
    });
  });
});
