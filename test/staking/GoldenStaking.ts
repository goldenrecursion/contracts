import chai, { expect } from 'chai';
import { deployments, ethers } from 'hardhat';
import type { GoldenStaking } from '../../typechain/contracts/staking/GoldenStaking';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { GoldenToken } from '../../typechain';
import { stakingPeriodDev } from '../../deploy/5_GoldenStaking';
import { waitTillBlock } from '../../utils/tests.utils';
chai.config.includeStack = true;
chai.Assertion.includeStack = true;

const address = '0x61bfCd8d7fcbd61508027Ba5935176A3298E941e';

const ownableError = 'Ownable: caller is not the owner';

describe('GoldenStaking', function () {
  let GoldenStaking: GoldenStaking;
  let GoldenToken: GoldenToken;
  let owner: SignerWithAddress;
  let user1: SignerWithAddress;
  type TxType = {
    to: string;
    value: string;
    gasLimit: string;
    from: string;
    gasPrice: string;
  };
  let tx: (overrides?: Partial<TxType>) => TxType;
  const toSend = 3333;
  const gasPrice = 5000000000;

  beforeEach(async function () {
    await deployments.fixture(['GoldenToken']);
    await deployments.fixture(['GoldenStaking']);
    GoldenStaking = await ethers.getContract('GoldenStaking');
    GoldenToken = await ethers.getContract('GoldenToken');
    expect(await GoldenStaking.minimumStaking()).to.equal(1);
    expect(await GoldenStaking.stakingPeriod()).to.equal(stakingPeriodDev);
    const [deployer, addr1] = await ethers.getSigners();
    owner = deployer;
    user1 = addr1;
    GoldenToken.connect(owner);
    GoldenStaking.connect(owner);

    tx = (overrides?: Partial<TxType>) => {
      return {
        to: GoldenStaking.address,
        value: toSend.toString(),
        gasLimit: '9999999',
        from: owner.address,
        gasPrice: gasPrice.toString(),
        ...overrides,
      };
    };
  });

  it('Should test onlyOwner functions', async () => {
    await GoldenStaking.setMinimumStaking(3);
    expect(await GoldenStaking.minimumStaking()).to.equal(3);
    await GoldenStaking.setStakingPeriod(12345);
    expect(await GoldenStaking.stakingPeriod()).to.equal(12345);
    expect(await GoldenToken.balanceOf(GoldenStaking.address)).to.equal(0);
    const toSend = 33333;
    await GoldenToken.transfer(GoldenStaking.address, toSend);
    expect(await GoldenToken.balanceOf(GoldenStaking.address)).to.equal(toSend);
    expect(await GoldenToken.balanceOf(owner.address)).to.equal(
      '999999999999999999999966667'
    );
    await GoldenStaking.recoverERC20(GoldenToken.address);
    expect(await GoldenToken.balanceOf(owner.address)).to.equal(
      '1000000000000000000000000000'
    );
    expect(await GoldenToken.balanceOf(GoldenStaking.address)).to.equal(0);
  });

  it('Should fail calling onlyOwner functions', async () => {
    await GoldenStaking.transferOwnership(address);
    await expect(GoldenStaking.setMinimumStaking(3)).to.be.revertedWith(
      ownableError
    );
    await expect(GoldenStaking.setStakingPeriod(12345)).to.be.revertedWith(
      ownableError
    );
    await expect(
      GoldenStaking.recoverERC20(GoldenToken.address)
    ).to.be.revertedWith(ownableError);
  });

  it('Should test deposit then withdrawal', async () => {
    await GoldenStaking.setMinimumStaking(3);
    let ownerValue = await ethers.provider.getBalance(owner.address);
    // expect(await ethers.provider.getBalance(owner.address)).to.equal('777');
    expect(await ethers.provider.getBalance(GoldenStaking.address)).to.equal(0);

    expect(await GoldenStaking.balances(owner.address)).to.equal(0);

    await expect(owner.sendTransaction(tx({ value: '0' }))).to.be.revertedWith(
      'Min Staking violation'
    );
    await expect(owner.sendTransaction(tx({ value: '2' }))).to.be.revertedWith(
      'Min Staking violation'
    );
    ownerValue = await ethers.provider.getBalance(owner.address);
    // Send one deposit
    let resp = await owner.sendTransaction(tx());
    let receipt = await resp.wait(1);
    let fee = receipt.cumulativeGasUsed.mul(receipt.effectiveGasPrice);
    let blockNumber = await ethers.provider.getBlockNumber();

    expect(await ethers.provider.getBalance(owner.address)).to.equal(
      ownerValue.sub(fee).sub(toSend)
    );
    expect(await ethers.provider.getBalance(GoldenStaking.address)).to.equal(
      toSend
    );
    expect(await GoldenStaking.balances(owner.address)).to.equal(toSend);
    expect(await GoldenStaking.lockedUntilBlock(owner.address)).to.equal(
      blockNumber + stakingPeriodDev
    );
    GoldenStaking = GoldenStaking.connect(user1);
    await expect(GoldenStaking.withdraw()).to.be.revertedWith('Not Staked');
    GoldenStaking = GoldenStaking.connect(owner);
    await expect(GoldenStaking.withdraw()).to.be.revertedWith(
      'Lock time has not expired'
    );

    ownerValue = await ethers.provider.getBalance(owner.address);

    // Send one more deposit
    resp = await owner.sendTransaction(tx());
    receipt = await resp.wait(1);
    fee = receipt.cumulativeGasUsed.mul(receipt.effectiveGasPrice);
    blockNumber = await ethers.provider.getBlockNumber();

    expect(await ethers.provider.getBalance(owner.address)).to.equal(
      ownerValue.sub(fee).sub(toSend)
    );
    expect(await ethers.provider.getBalance(GoldenStaking.address)).to.equal(
      toSend + toSend
    );
    expect(await GoldenStaking.balances(owner.address)).to.equal(
      toSend + toSend
    );
    const lastLockedUntil = blockNumber + stakingPeriodDev;
    expect(await GoldenStaking.lockedUntilBlock(owner.address)).to.equal(
      lastLockedUntil
    );

    await expect(GoldenStaking.withdraw()).to.be.revertedWith(
      'Lock time has not expired'
    );

    // This extra one will just push the block nr up so we can unlock it
    await expect(GoldenStaking.withdraw()).to.be.revertedWith(
      'Lock time has not expired'
    );

    ownerValue = await ethers.provider.getBalance(owner.address);
    receipt = await (await GoldenStaking.withdraw()).wait(1);
    blockNumber = await ethers.provider.getBlockNumber();
    fee = receipt.cumulativeGasUsed.mul(receipt.effectiveGasPrice);
    await waitTillBlock(ethers.provider, blockNumber)

    expect(await ethers.provider.getBalance(owner.address)).to.equal(
      ownerValue.sub(fee).add(toSend).add(toSend)
    );
    expect(await ethers.provider.getBalance(GoldenStaking.address)).to.equal(0);
    expect(await GoldenStaking.balances(owner.address)).to.equal(0);
    expect(await GoldenStaking.lockedUntilBlock(owner.address)).to.equal(
      lastLockedUntil
    );

    ownerValue = await ethers.provider.getBalance(owner.address);
  });

  it('Should test events', async function () {
    await expect(GoldenStaking.setMinimumStaking(3))
      .to.emit(GoldenStaking, 'MinimumStakingChanged')
      .withArgs(3);
    await expect(GoldenStaking.setStakingPeriod(1))
      .to.emit(GoldenStaking, 'StakingPeriodChanged')
      .withArgs(1);
    let blockNumber = await ethers.provider.getBlockNumber();
    await expect(owner.sendTransaction(tx()))
      .to.emit(GoldenStaking, 'Received')
      .withArgs(owner.address, toSend, blockNumber + 2); // period set to 1 in this block + 1 the tx.
    await GoldenToken.transfer(GoldenStaking.address, '25');
    await expect(GoldenStaking.recoverERC20(GoldenToken.address))
      .to.emit(GoldenStaking, 'TokensRecovered')
      .withArgs(GoldenToken.address, 25);
    blockNumber = await ethers.provider.getBlockNumber();
    console.log(
      'LockedUntil',
      (await GoldenStaking.lockedUntilBlock(owner.address)).toString()
    );
    // Withdraw works as some blocks already passed
    await expect(GoldenStaking.withdraw())
      .to.emit(GoldenStaking, 'Withdrawn')
      .withArgs(owner.address, toSend);
  });
});
