import { expect } from 'chai';
import { Wallet, Contract } from 'ethers';
import {
  deployments,
  ethers,
  getNamedAccounts,
  getUnnamedAccounts,
} from 'hardhat';
import crypto from 'crypto';

import { setupUsers, setupUser, User } from './utils';
import { INITIAL_SUPPLY } from '../deploy/GoldenToken';

const generateBulkStakeUsers = (nrOfUsers: number) => {
  const userStakes = []
  const userAddresses = []
  for (let i = 1; i <= nrOfUsers; i++) {
    const id = crypto.randomBytes(32).toString('hex');
    const privateKey = "0x" + id;

    var wallet = new Wallet(privateKey);
    userAddresses.push(wallet.address);
    userStakes[i - 1] = {
      addr: wallet.address,
      amount: 10
    }
  }
  return {
    userStakes,
    userAddresses
  }
}

describe('GoldenTokenStaking', () => {
  let contract: Contract;
  let owner: User<{ GoldenToken: Contract }>;
  let users: User<{ GoldenToken: Contract }>[];

  beforeEach(async function () {
    await deployments.fixture(['GoldenToken']);
    contract = await ethers.getContract('GoldenToken');
    const contracts = {
      GoldenToken: await ethers.getContract('GoldenToken'),
    };
    const { deployer } = await getNamedAccounts();
    owner = await setupUser(deployer, contracts);
    users = await setupUsers(await getUnnamedAccounts(), contracts);
  });

  describe('Deployment', () => {
    it('Should be the owner of the contract', async () => {
      expect(await contract.owner()).to.equal(owner.address);
    });
  });

  describe('Staking', () => {
    it("Should NOT allow a user to stake tokens they don't have", async () => {
      const user = users[0];
      const balance = await contract.balanceOf(user.address);
      await expect(user.GoldenToken.stake(balance.add(10))).to.be.revertedWith(
        'ERC20: transfer amount exceeds balance'
      );
    });

    it('Should allow a user to stake tokens', async () => {
      const user = users[0];
      const balance = await contract.balanceOf(user.address);
      await user.GoldenToken.stake(10);
      expect(await contract._stakeOf(user.address)).to.equal(10);
      expect(await contract.balanceOf(user.address)).to.equal(balance.sub(10));
    });

    it("Should NOT allow a user to unstake tokens they didn't stake", async () => {
      const user = users[0];
      await expect(user.GoldenToken.unstake(10)).to.be.revertedWith(
        '_unstake: exceeds balance'
      );
    });

    it('Should allow a user to unstake tokens', async () => {
      const user = users[0];
      const balance = await contract.balanceOf(user.address);
      await user.GoldenToken.stake(10);
      await user.GoldenToken.unstake(10);
      expect(await contract._stakeOf(user.address)).to.equal(0);
      expect(await contract.balanceOf(user.address)).to.equal(balance);
    });

    it('Staking should not lower vote weight', async () => {
      const user = users[0];
      await owner.GoldenToken.transfer(user.address, 10);
      await user.GoldenToken.stake(10);
      expect(await contract.getVotes(user.address)).to.equal(10);
    });
    it('Should bulk stake 500 users', async () => {
      const user = users[0];
      const { userStakes, userAddresses } = generateBulkStakeUsers(500)

      await owner.GoldenToken.bulkStake(userStakes, 5000); // 2 * 500
      for (let addr of userAddresses) {
        expect(await user.GoldenToken._stakeOf(addr)).to.not.equal(0);
      }
    });
    it('Should fail bulk stake 10 users', async () => {
      const user = users[0];
      const { userStakes, userAddresses } = generateBulkStakeUsers(10)
      await expect(owner.GoldenToken.bulkStake(userStakes, 25/** wrong number */)).to.be.revertedWith(
        'incorrect totalAmount'
      );

      for (let addr of userAddresses) {
        expect(await user.GoldenToken._stakeOf(addr)).to.equal(0);
      }
    });
    it('Should fail bulk stake, only owner', async () => {
      const user = users[0];
      const { userStakes } = generateBulkStakeUsers(10)
      await expect(user.GoldenToken.bulkStake(userStakes, 20)).to.be.revertedWith(
        'Ownable: caller is not the owner'
      );

    });
  });

  describe('Slashing', () => {
    it("Owner can slash user's stakes", async () => {
      const user = users[0];
      const balance = await contract.balanceOf(user.address);
      await user.GoldenToken.stake(10);
      await owner.GoldenToken.slash(user.address, 10);
      expect(await contract._stakeOf(user.address)).to.equal(0);
      expect(await contract.balanceOf(user.address)).to.equal(balance.sub(10));
      expect(await contract.totalSupply()).to.equal(INITIAL_SUPPLY);
    });
    it("Non-Owner can not slash user's stakes", async () => {
      const user = users[0];
      await user.GoldenToken.stake(10);
      await expect(user.GoldenToken.slash(user.address, 10)).to.be.revertedWith(
        'Ownable: caller is not the owner'
      );
    });
  });
});
