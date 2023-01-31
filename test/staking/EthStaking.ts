import chai, { expect } from 'chai';
import { deployments, ethers } from 'hardhat';
import type { EthStaking } from '../../typechain/contracts/staking/EthStaking';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { GoldenToken } from '../../typechain';
import { stakingPeriodDev } from '../../deploy/5_EthStaking';
import { waitTillBlock } from '../utils';
chai.config.includeStack = true;
chai.Assertion.includeStack = true;

const address = '0x61bfCd8d7fcbd61508027Ba5935176A3298E941e';

const ownableError = 'Ownable: caller is not the owner';

describe('EthStaking', function () {
  let EthStaking: EthStaking;
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
    await deployments.fixture(['EthStaking']);
    EthStaking = await ethers.getContract('EthStaking');
    GoldenToken = await ethers.getContract('GoldenToken');
    expect(await EthStaking.minimumStaking()).to.equal(1);
    expect(await EthStaking.stakingPeriod()).to.equal(stakingPeriodDev);
    const [deployer, addr1] = await ethers.getSigners();
    owner = deployer;
    user1 = addr1;
    GoldenToken.connect(owner);
    EthStaking.connect(owner);

    tx = (overrides?: Partial<TxType>) => {
      return {
        to: EthStaking.address,
        value: toSend.toString(),
        gasLimit: '9999999',
        from: owner.address,
        gasPrice: gasPrice.toString(),
        ...overrides,
      };
    };
  });

  it('Should test onlyOwner functions', async () => {
    await EthStaking.setMinimumStaking(3);
    expect(await EthStaking.minimumStaking()).to.equal(3);
    await EthStaking.setStakingPeriod(12345);
    expect(await EthStaking.stakingPeriod()).to.equal(12345);
    expect(await GoldenToken.balanceOf(EthStaking.address)).to.equal(0);
    const toSend = 33333;
    await GoldenToken.transfer(EthStaking.address, toSend);
    expect(await GoldenToken.balanceOf(EthStaking.address)).to.equal(toSend);
    expect(await GoldenToken.balanceOf(owner.address)).to.equal(
      '999999999999999999999966667'
    );
    await EthStaking.recoverERC20(GoldenToken.address);
    expect(await GoldenToken.balanceOf(owner.address)).to.equal(
      '1000000000000000000000000000'
    );
    expect(await GoldenToken.balanceOf(EthStaking.address)).to.equal(0);
  });

  it('Should fail calling onlyOwner functions', async () => {
    await EthStaking.transferOwnership(address);
    await expect(EthStaking.setMinimumStaking(3)).to.be.revertedWith(
      ownableError
    );
    await expect(EthStaking.setStakingPeriod(12345)).to.be.revertedWith(
      ownableError
    );
    await expect(
      EthStaking.recoverERC20(GoldenToken.address)
    ).to.be.revertedWith(ownableError);
  });

  it('Should test deposit then withdrawal', async () => {
    await EthStaking.setMinimumStaking(3);
    let ownerValue = await ethers.provider.getBalance(owner.address);
    // expect(await ethers.provider.getBalance(owner.address)).to.equal('777');
    expect(await ethers.provider.getBalance(EthStaking.address)).to.equal(0);

    expect(await EthStaking.balances(owner.address)).to.equal(0);

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
    expect(await ethers.provider.getBalance(EthStaking.address)).to.equal(
      toSend
    );
    expect(await EthStaking.balances(owner.address)).to.equal(toSend);
    expect(await EthStaking.lockedUntilBlock(owner.address)).to.equal(
      blockNumber + stakingPeriodDev
    );
    EthStaking = EthStaking.connect(user1);
    await expect(EthStaking.withdraw()).to.be.revertedWith('Not Staked');
    EthStaking = EthStaking.connect(owner);
    await expect(EthStaking.withdraw()).to.be.revertedWith(
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
    expect(await ethers.provider.getBalance(EthStaking.address)).to.equal(
      toSend + toSend
    );
    expect(await EthStaking.balances(owner.address)).to.equal(toSend + toSend);
    const lastLockedUntil = blockNumber + stakingPeriodDev;
    expect(await EthStaking.lockedUntilBlock(owner.address)).to.equal(
      lastLockedUntil
    );

    await expect(EthStaking.withdraw()).to.be.revertedWith(
      'Lock time has not expired'
    );

    // This extra one will just push the block nr up so we can unlock it
    await expect(EthStaking.withdraw()).to.be.revertedWith(
      'Lock time has not expired'
    );

    ownerValue = await ethers.provider.getBalance(owner.address);
    receipt = await (await EthStaking.withdraw()).wait(1);
    blockNumber = await ethers.provider.getBlockNumber();
    fee = receipt.cumulativeGasUsed.mul(receipt.effectiveGasPrice);
    await waitTillBlock(ethers.provider, blockNumber);

    expect(await ethers.provider.getBalance(owner.address)).to.equal(
      ownerValue.sub(fee).add(toSend).add(toSend)
    );
    expect(await ethers.provider.getBalance(EthStaking.address)).to.equal(0);
    expect(await EthStaking.balances(owner.address)).to.equal(0);
    expect(await EthStaking.lockedUntilBlock(owner.address)).to.equal(
      lastLockedUntil
    );

    ownerValue = await ethers.provider.getBalance(owner.address);
  });

  it('Should test events', async function () {
    await expect(EthStaking.setMinimumStaking(3))
      .to.emit(EthStaking, 'MinimumStakingChanged')
      .withArgs(3);
    await expect(EthStaking.setStakingPeriod(1))
      .to.emit(EthStaking, 'StakingPeriodChanged')
      .withArgs(1);
    let blockNumber = await ethers.provider.getBlockNumber();
    await expect(owner.sendTransaction(tx()))
      .to.emit(EthStaking, 'Received')
      .withArgs(owner.address, toSend, blockNumber + 2); // period set to 1 in this block + 1 the tx.
    await GoldenToken.transfer(EthStaking.address, '25');
    await expect(EthStaking.recoverERC20(GoldenToken.address))
      .to.emit(EthStaking, 'TokensRecovered')
      .withArgs(GoldenToken.address, 25);
    blockNumber = await ethers.provider.getBlockNumber();
    console.log(
      'LockedUntil',
      (await EthStaking.lockedUntilBlock(owner.address)).toString()
    );
    // Withdraw works as some blocks already passed
    await expect(EthStaking.withdraw())
      .to.emit(EthStaking, 'Withdrawn')
      .withArgs(owner.address, toSend);
  });
});
