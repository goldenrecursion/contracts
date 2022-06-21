import { expect } from 'chai';
import {
  deployments,
  ethers,
  getNamedAccounts,
  getUnnamedAccounts,
  upgrades
} from 'hardhat';
import { INITIAL_SUPPLY, SEED_AMOUNT } from '../deploy/GoldenToken';

import { setupUsers, setupUser, User, Contracts as _Contracts } from './utils';

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

  describe('Upgrade', function () {
    it('Should upgrade to new implementation', async function () {
      const GoldenToken = await ethers.getContractFactory("GoldenToken")
      const GoldenTokenV2 = await ethers.getContractFactory("GoldenTokenV2")
  
      let goldenToken = await upgrades.deployProxy(GoldenToken, [INITIAL_SUPPLY], {initializer: 'initialize'})
      expect(await goldenToken.balanceOf(goldenToken.signer.getAddress())).to.equal("1000000000000000000000000000")
  
      let goldenTokenV2 = await upgrades.upgradeProxy(goldenToken.address, GoldenTokenV2)
      console.log(goldenTokenV2.address," goldenTokenV2/proxy")
      
      expect(await goldenTokenV2.newValue()).to.equal("")
      await goldenTokenV2.setNewValue("Some string")
      expect(await goldenTokenV2.balanceOf(goldenToken.signer.getAddress())).to.equal("1000000000000000000000000000")
      expect(await goldenTokenV2.newValue()).to.equal("Some string")
 
    });

  });
  describe('Deployment', function () {
    it('Should have correct token total supply', async function () {
      expect(await GoldenToken.totalSupply()).to.equal(INITIAL_SUPPLY);
    });

    it('Should assign the total supply of tokens to the deployer', async function () {
      const ownerBalance = await GoldenToken.balanceOf(owner.address);
      // Initial supply subtracted by the seed amounts for localhost accounts
      const totalBalance = INITIAL_SUPPLY.sub(SEED_AMOUNT.mul(users.length));
      expect(ownerBalance).to.equal(totalBalance);
    });
  });

  describe('Transactions', function () {
    it('Should transfer tokens from owner', async function () {
      const balance = await GoldenToken.balanceOf(users[0].address);
      await owner.GoldenToken.transfer(users[0].address, 50);
      expect(await GoldenToken.balanceOf(users[0].address)).to.equal(
        balance.add(50)
      );
    });

    it('Should NOT transfer tokens from a user', async function () {
      const balance = await GoldenToken.balanceOf(users[1].address);
      await expect(
        users[0].GoldenToken.transfer(users[1].address, 50)
      ).to.be.revertedWith('ERC20: Not allowed to transfer');
      expect(await GoldenToken.balanceOf(users[1].address)).to.equal(balance);
    });
  });
});
