import chai, { expect } from 'chai';
import { deployments, ethers } from 'hardhat';
import type { PayoutsController } from '../../typechain/contracts/payouts/PayoutsController';
import { BigNumber } from 'ethers';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import getRandomBytesHexString from '../utils';
import BalanceTree from '../../contracts/libraries/trees/balance-tree';
import { GoldenToken } from '../../typechain';
chai.config.includeStack = true;
chai.Assertion.includeStack = true;

const address1 = '0x9ED5724f7dc9eCDd6b48185F875A8779c2059533';
const address2 = '0x61bfCd8d7fcbd61508027Ba5935176A3298E941e';

const ownableError = 'Ownable: caller is not the owner';
const overrides = {
  gasLimit: 9999999,
};

describe('PayoutsController', function () {
  let PayoutsController: PayoutsController;
  let GoldenToken: GoldenToken;
  let owner: SignerWithAddress;

  beforeEach(async function () {
    await deployments.fixture(['GoldenToken']);
    await deployments.fixture(['PayoutsController']);
    PayoutsController = await ethers.getContract('PayoutsController');
    GoldenToken = await ethers.getContract('GoldenToken');
    expect(await PayoutsController.getToken()).to.equal(GoldenToken.address);
    const [deployer] = await ethers.getSigners();
    owner = deployer;
    GoldenToken.connect(owner);
    await GoldenToken.transfer(
      PayoutsController.address,
      '1000000000000000000000'
    );
    expect(await GoldenToken.balanceOf(PayoutsController.address)).to.equal(
      '1000000000000000000000'
    );
  });

  describe('Test functions', function () {
    it('Should test contract functions', async () => {
      expect(await PayoutsController.getLastEpoch()).to.equal(0);
      const randomMerkleTree = getRandomBytesHexString(32);
      await PayoutsController.addMerkleRoot(randomMerkleTree);
      expect(await PayoutsController.getLastEpoch()).to.equal(1);
    });
  });

  describe('Access control', function () {
    it('Should test onlyOwner functions', async () => {
      await PayoutsController.setToken(address1);
      expect(await PayoutsController.getToken()).to.equal(address1);
      const randomMerkleTree = getRandomBytesHexString(32);
      await PayoutsController.addMerkleRoot(randomMerkleTree);
      expect(
        await PayoutsController.getMerkleRoot(
          await PayoutsController.getLastEpoch()
        )
      ).to.equal(randomMerkleTree);
      const randomMerkleTree2 = getRandomBytesHexString(32);
      await PayoutsController.addMerkleRoot(randomMerkleTree2);
      expect(
        await PayoutsController.getMerkleRoot(
          await PayoutsController.getLastEpoch()
        )
      ).to.equal(randomMerkleTree2);
      expect(
        await PayoutsController.getMerkleRoot(
          (await PayoutsController.getLastEpoch()).sub(1)
        )
      ).to.equal(randomMerkleTree);
    });
    it('Should fail calling onlyOwner functions', async () => {
      await PayoutsController.transferOwnership(
        '0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65'
      );
      await expect(PayoutsController.setToken(address1)).to.be.revertedWith(
        ownableError
      );
      const randomMerkleTree = getRandomBytesHexString(32);
      await expect(
        PayoutsController.addMerkleRoot(randomMerkleTree)
      ).to.be.revertedWith(ownableError);
    });
    it('Should test claiming functions', async () => {
      const tree = new BalanceTree([
        { account: address1, amount: BigNumber.from(100) },
        { account: address2, amount: BigNumber.from(101) },
      ]);
      await PayoutsController.addMerkleRoot(tree.getHexRoot());
      const proof1 = tree.getProof(0, address1, BigNumber.from(100));
      expect(await PayoutsController.isClaimed(1, 0)).to.equal(false);
      expect(await PayoutsController.isClaimed(1, 1)).to.equal(false);
      expect(await GoldenToken.balanceOf(address1)).to.equal('0');
      expect(await GoldenToken.balanceOf(address2)).to.equal('0');
      await expect(
        PayoutsController.claim(
          1,
          0,
          address1,
          BigNumber.from(100),
          proof1,
          overrides
        )
      )
        .to.emit(PayoutsController, 'Claimed')
        .withArgs(1, 0, address1, 100);
      expect(await GoldenToken.balanceOf(address1)).to.equal('100');
      expect(await GoldenToken.balanceOf(address2)).to.equal('0');
      expect(await PayoutsController.isClaimed(1, 0)).to.equal(true);
      expect(await PayoutsController.isClaimed(1, 1)).to.equal(false);
      const proof2 = tree.getProof(1, address2, BigNumber.from(101));
      await expect(
        PayoutsController.claim(
          1,
          1,
          address2,
          BigNumber.from(101),
          proof2,
          overrides
        )
      )
        .to.emit(PayoutsController, 'Claimed')
        .withArgs(1, 1, address2, 101);
      expect(await PayoutsController.isClaimed(1, 0)).to.equal(true);
      expect(await PayoutsController.isClaimed(1, 1)).to.equal(true);
      expect(await GoldenToken.balanceOf(address1)).to.equal('100');
      expect(await GoldenToken.balanceOf(address2)).to.equal('101');
    });
  });
});
