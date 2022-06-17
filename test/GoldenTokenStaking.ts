import {expect} from 'chai';
import {Wallet} from 'ethers';
import {
  deployments,
  ethers,
  getNamedAccounts,
  getUnnamedAccounts,
} from 'hardhat';
import {Contract} from 'ethers';
import crypto from 'crypto';

import {setupUsers, setupUser, User} from './utils';
import {INITIAL_SUPPLY} from '../deploy/GoldenToken';

describe('GoldenTokenStaking', () => {
  let contract: Contract;
  let owner: User<{GoldenToken: Contract}>;
  let users: User<{GoldenToken: Contract}>[];

  beforeEach(async function () {
    await deployments.fixture(['GoldenToken']);
    contract = await ethers.getContract('GoldenToken');
    const contracts = {
      GoldenToken: await ethers.getContract('GoldenToken'),
    };
    const {deployer} = await getNamedAccounts();
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
    it('Should bulk stake 100 users', async () => {
      const user = users[0];
      const userStakes = []
      const userAddresses = []
      for (let i = 1; i <= 100; i++) {
        const id = crypto.randomBytes(32).toString('hex');
        const privateKey = "0x" + id;

        var wallet = new Wallet(privateKey);
        userAddresses.push(wallet.address)
        userStakes[i - 1] = {
          addr: wallet.address,
          amount: i
        }
      }
      console.log('HEHE', userStakes[0])
      await owner.GoldenToken._bulkStake(userStakes);
      for (let addr of userAddresses) {
        expect(await user.GoldenToken._stakeOf(addr)).to.not.equal(0);
      }

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
  });
});
