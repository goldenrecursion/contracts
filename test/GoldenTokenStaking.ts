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
import { INITIAL_SUPPLY } from '../deploy/3_GoldenToken';

export const generateBulkStakeUsers = (nrOfUsers: number) => {
  const userStakes = [];
  const userAddresses = [];
  for (let i = 0; i < nrOfUsers; i++) {
    const id = crypto.randomBytes(32).toString('hex');
    const privateKey = '0x' + id;

    var wallet = new Wallet(privateKey);
    userAddresses.push(wallet.address);
    userStakes[i] = {
      addr: wallet.address,
      amount: 10,
    };
  }
  return {
    userStakes,
    userAddresses,
  };
};

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
      const stake = await contract._stakeOf(user.address);
      await user.GoldenToken.stake(10);
      expect(await contract.stakeOf(user.address)).to.equal(stake.add(10));
      expect(await contract.balanceOf(user.address)).to.equal(balance.sub(10));
    });

    it("Should NOT allow a user to unstake tokens they didn't stake", async () => {
      const user = users[0];
      const stake = await contract._stakeOf(user.address);
      await expect(user.GoldenToken.unstake(stake.add(10))).to.be.revertedWith(
        '_unstake: exceeds balance'
      );
    });

    it('Should allow a user to unstake tokens', async () => {
      const user = users[0];
      const balance = await contract.balanceOf(user.address);
      const stake = await contract._stakeOf(user.address);
      await user.GoldenToken.stake(10);
      await user.GoldenToken.unstake(10);
      expect(await contract.stakeOf(user.address)).to.equal(stake);
      expect(await contract.balanceOf(user.address)).to.equal(balance);
    });

    it('Staking should increase vote weight', async () => {
      const user = users[0];
      const voteWeight = await contract.getVotes(user.address);
      await user.GoldenToken.stake(10);
      expect(await contract.getVotes(user.address)).to.equal(
        voteWeight.add(10)
      );
    });

    it('Should bulk stake 500 users', async () => {
      const user = users[0];
      const { userStakes, userAddresses } = generateBulkStakeUsers(500);
      const ownerBalanceBefore = await contract.balanceOf(owner.address)
      const contractBalanceBefore = await contract.balanceOf(owner.GoldenToken.address)
      await owner.GoldenToken.bulkStake(userStakes, 5000); // 10 * 500
      for (let addr of userAddresses) {
        expect(await user.GoldenToken.stakeOf(addr)).to.equal(10);
      }
      expect(ownerBalanceBefore.sub(5000)).to.equal(await contract.balanceOf(owner.address));
      expect(await contract.balanceOf(owner.GoldenToken.address)).to.equal(contractBalanceBefore.add(5000));
    });

    it('Should fail bulk stake 10 users', async () => {
      const user = users[0];
      const { userStakes, userAddresses } = generateBulkStakeUsers(10);
      await expect(
        owner.GoldenToken.bulkStake(userStakes, 25 /** wrong number */)
      ).to.be.revertedWith('incorrect totalAmount');

      for (let addr of userAddresses) {
        expect(await user.GoldenToken.stakeOf(addr)).to.equal(0);
      }
    });

    it('Should fail bulk stake, only owner', async () => {
      const user = users[0];
      const { userStakes } = generateBulkStakeUsers(10);
      await expect(
        user.GoldenToken.bulkStake(userStakes, 20)
      ).to.be.revertedWith('Ownable: caller is not the owner');
    });
  });

  describe('Slashing', () => {
    it("Owner can slash user's stakes", async () => {
      const user = users[0];
      const userBalance = await contract.balanceOf(user.address);
      const ownerBalance = await contract.balanceOf(owner.address);
      const contractBalance = await contract.balanceOf(contract.address);
      const userStake = await contract.stakeOf(user.address);
      const ownerStake = await contract.stakeOf(owner.address);
      const contractStake = await contract.stakeOf(contract.address);

      // user +10staked, contract +10tokens
      await user.GoldenToken.stake(10);
      const newUserBalance = await contract.balanceOf(user.address)
      const newUserStake = await contract.stakeOf(user.address)
      const newContractBalance = await contract.balanceOf(contract.address)
      expect(newUserBalance).to.equal(userBalance.sub(10));
      expect(newContractBalance).to.equal(contractBalance.add(10));
      expect(newUserStake).to.equal(userStake.add(10)); // No change
      expect(await contract.stakeOf(contract.address)).to.equal(contractStake); // No change
      expect(await contract.stakeOf(owner.address)).to.equal(ownerStake); // No change

      // user -5staked, contract - 5tokens, owner +5tokens
      await owner.GoldenToken.slash(user.address, 5);
      expect(await contract.stakeOf(user.address)).to.equal(newUserStake.sub(5));
      expect(await contract.balanceOf(contract.address)).to.equal(newContractBalance.sub(5));
      expect(await contract.balanceOf(owner.address)).to.equal(ownerBalance.add(5));
      expect(await contract.stakeOf(contract.address)).to.equal(contractStake); // No change
      expect(await contract.stakeOf(owner.address)).to.equal(ownerStake); // No change
   
      expect(await contract.totalSupply()).to.equal(INITIAL_SUPPLY);
    });
    it("Non-Owner can not slash user's stakes", async () => {
      const user = users[0];
      await user.GoldenToken.stake(10);
      await expect(user.GoldenToken.slash(user.address, 10)).to.be.revertedWith(
        'Ownable: caller is not the owner'
      );
    });
    it("Bulk Slash", async () => {
      const user = users[0];
      await user.GoldenToken.stake(10);
      await expect(user.GoldenToken.slash(user.address, 10)).to.be.revertedWith(
        'Ownable: caller is not the owner'
      );
    });
  });
  describe('Events', function () {
    it('Should emit events', async function () {
      await expect(owner.GoldenToken.stake(7134))
        .to.emit(owner.GoldenToken, 'Staked')
        .withArgs(owner.address, 7134);
      await expect(owner.GoldenToken.unstake(2000))
        .to.emit(owner.GoldenToken, 'UnStaked')
        .withArgs(owner.address, 2000);
      await expect(owner.GoldenToken.slash(owner.address, 1000))
        .to.emit(owner.GoldenToken, 'Slashed')
        .withArgs(owner.address, 1000);
      const { userStakes } = generateBulkStakeUsers(500);
      const receipt = await (await owner.GoldenToken.bulkStake(userStakes, 5000)).wait()
      console.log('>>>>>> log 1', receipt.logs[0])
      console.log('>>>>>> event 1', receipt.events[0])
    });
  });
});
