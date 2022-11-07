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
  toGLD,
} from './utils';

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
  });

  describe('Transactions', function () {
    it('Should transfer tokens from owner', async function () {
      const balance = await GoldenToken.balanceOf(users[0].address);
      await owner.GoldenToken.transfer(users[0].address, 50);
      expect(await GoldenToken.balanceOf(users[0].address)).to.equal(
        balance.add(50)
      );
    });
  });

  describe(`Minting`, function () {
    it(`Owner should have minter role`, async function () {
      await expect(await GoldenToken.isMinter(owner.address)).to.be.true;

      for (const user of users) {
        await expect(await GoldenToken.isMinter(user.address)).to.be.false;
      }
    });

    it(`Owner should add minter`, async function () {
      const minter = users[0];
      const addMinter = await owner.GoldenToken.addMinter(minter.address);

      await expect(addMinter)
        .to.emit(owner.GoldenToken, 'MinterAdded')
        .withArgs(minter.address);

      for (const _minter of [minter.address, owner.address]) {
        await expect(await GoldenToken.isMinter(_minter)).to.be.true;
      }

      const nonMinters = users.filter(
        (user) => user.address !== minter.address
      );
      for (const nonMinter of nonMinters) {
        await expect(await GoldenToken.isMinter(nonMinter.address)).to.be.false;
      }
    });

    it(`Owner should remove minter`, async function () {
      const minter = users[0];
      await owner.GoldenToken.addMinter(minter.address);
      await expect(await GoldenToken.isMinter(minter.address)).to.be.true;

      const removeMinter = await owner.GoldenToken.removeMinter(minter.address);

      await expect(removeMinter)
        .to.emit(owner.GoldenToken, 'MinterRemoved')
        .withArgs(minter.address);

      await expect(await GoldenToken.isMinter(minter.address)).to.be.false;
    });

    it(`Should not allow minter to remove another minter`, async function () {
      const minter = users[0];
      await owner.GoldenToken.addMinter(minter.address);
      await expect(await GoldenToken.isMinter(minter.address)).to.be.true;
      await expect(
        minter.GoldenToken.removeMinter(owner.address)
      ).to.be.revertedWith('Ownable: caller is not the owner');
    });

    it(`Should mint to address`, async function () {
      const verifier = users[1];
      const verifierBalance = await GoldenToken.balanceOf(verifier.address);
      const amount = toGLD('5');

      await owner.GoldenToken.mint(verifier.address, amount);
      expect(await GoldenToken.balanceOf(verifier.address)).to.equal(
        verifierBalance.add(amount)
      );
    });
  });
});
