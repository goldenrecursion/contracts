import chai, { expect } from 'chai';
import { deployments, ethers } from 'hardhat';
import type { GoldenStaking } from '../../typechain/contracts/staking/GoldenStaking';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { GoldenToken } from '../../typechain';
import { waitTillBlock } from '../../utils/tests.utils';
chai.config.includeStack = true;
chai.Assertion.includeStack = true;

const address = '0x61bfCd8d7fcbd61508027Ba5935176A3298E941e';

const ownableError = 'Ownable: caller is not the owner';
const overrides = {
  gasLimit: 9999999,
};

const stakingTime = 5;

describe('GoldenStaking', function () {
  let GoldenStaking: GoldenStaking;
  let GoldenToken: GoldenToken;
  let owner: SignerWithAddress;

  beforeEach(async function () {
    await deployments.fixture(['GoldenToken']);
    await deployments.fixture(['GoldenStaking']);
    GoldenStaking = await ethers.getContract('GoldenStaking');
    GoldenToken = await ethers.getContract('GoldenToken');
    expect(await GoldenStaking.minimumStaking()).to.equal(1);
    expect(await GoldenStaking.stakingTime()).to.equal(stakingTime);
    const [deployer] = await ethers.getSigners();
    owner = deployer;
    GoldenToken.connect(owner);
    GoldenStaking.connect(owner);
  });

  describe('Access control', function () {
    it('Should test onlyOwner functions', async () => {
      await GoldenStaking.setMinimumStaking(3);
      expect(await GoldenStaking.minimumStaking()).to.equal(3);
      await GoldenStaking.setStakingTime(12345);
      expect(await GoldenStaking.stakingTime()).to.equal(12345);
      await GoldenToken.transfer(GoldenStaking.address, '33333');
      expect(await GoldenToken.balanceOf(GoldenStaking.address)).to.equal(
        '33333'
      );
      expect(await GoldenToken.balanceOf(owner.address)).to.equal(
        '999999999999999999999966667'
      );
      await GoldenStaking.recoverERC20(GoldenToken.address);
      expect(await GoldenToken.balanceOf(owner.address)).to.equal(
        '1000000000000000000000000000'
      );
    });

    it('Should fail calling onlyOwner functions', async () => {
      await GoldenStaking.transferOwnership(address);
      await expect(GoldenStaking.setMinimumStaking(3)).to.be.revertedWith(
        ownableError
      );
      await expect(GoldenStaking.setStakingTime(12345)).to.be.revertedWith(
        ownableError
      );
      await expect(
        GoldenStaking.recoverERC20(GoldenToken.address)
      ).to.be.revertedWith(ownableError);
    });
    it('Should test deposit/withdraw', async () => {
      const ownerAmount = await ethers.provider.getBalance(owner.address);
      expect(await GoldenStaking.balances(owner.address)).to.equal(0);
      expect(await ethers.provider.getBalance(owner.address)).to.equal(
        ownerAmount.toString()
      );
      const toSend = 3333;
      const gasPrice = 5000000000;
      const tx = {
        to: GoldenStaking.address,
        value: toSend,
        gasLimit: overrides.gasLimit,
        from: owner.address,
        gasPrice,
      };
      const resp = await owner.sendTransaction(tx);
      const receipt = await resp.wait(1);
      await expect(owner.sendTransaction(tx)).to.be.revertedWith(
        'Already deposited'
      );
      const blockStamp = (await ethers.provider.getBlock(receipt.blockNumber))
        .timestamp;
      // const fee = BigNumber.from(receipt.gasUsed).mul(BigNumber.from(gasPrice)).add(BigNumber.from(toSend))
      // expect(await ethers.provider.getBalance(owner.address)).to.equal(ownerAmount.sub(fee));
      expect(await ethers.provider.getBalance(GoldenStaking.address)).to.equal(
        toSend
      );
      expect(await GoldenStaking.balances(owner.address)).to.equal(toSend);
      expect(await GoldenStaking.lockedUntilTimes(owner.address)).to.equal(
        blockStamp + stakingTime
      );
      await expect(GoldenStaking.withdraw()).to.be.revertedWith(
        'Lock time has not expired'
      );
      await waitTillBlock(ethers.provider, receipt.blockNumber + 1);
      await GoldenStaking.withdraw();
      expect(await GoldenStaking.balances(owner.address)).to.equal(0);
    });

    it('Should test events', async function () {
      await expect(GoldenStaking.setMinimumStaking(3))
        .to.emit(GoldenStaking, 'MinimumStakingChanged')
        .withArgs(3);
      await expect(GoldenStaking.setStakingTime(5))
        .to.emit(GoldenStaking, 'StakingTimeChanged')
        .withArgs(5);
      const toSend = 3333;
      const gasPrice = 5000000000;
      const tx = {
        to: GoldenStaking.address,
        value: toSend,
        gasLimit: overrides.gasLimit,
        from: owner.address,
        gasPrice,
      };
      const blockStamp = (
        await ethers.provider.getBlock(ethers.provider.blockNumber)
      ).timestamp;
      await expect(owner.sendTransaction(tx))
        .to.emit(GoldenStaking, 'Received')
        .withArgs(owner.address, toSend, blockStamp + 8);
      await GoldenToken.transfer(GoldenStaking.address, '25');
      await expect(GoldenStaking.recoverERC20(GoldenToken.address))
        .to.emit(GoldenStaking, 'TokensRecovered')
        .withArgs(GoldenToken.address, 25);
      await waitTillBlock(ethers.provider, ethers.provider.blockNumber + 2);
      await expect(GoldenStaking.withdraw())
        .to.emit(GoldenStaking, 'Withdrawn')
        .withArgs(owner.address, toSend);
    });
  });
});
