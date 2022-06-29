import { expect } from 'chai';
import {
  deployments,
  ethers,
  getNamedAccounts
} from 'hardhat';

import { Contracts as _Contracts } from '../utils';
import type { SharedOwnershipNFTv1 } from '../../typechain/SharedOwnershipNFTv1';
import { GoldenToken } from '../../typechain';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';

const hash1 = '0x4908bea25834c7a03f66276d6172aa6e7e31e24d761ca6412bf7d9f14c593064'
const hash2 = '0xb94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9'

describe('SharedOwnershipNFT - NFT Component', function () {
  let SharedOwnershipNFTv1: SharedOwnershipNFTv1
  let GoldenToken: GoldenToken
  let account2: SignerWithAddress

  beforeEach(async function () {
    await deployments.fixture(['SharedOwnershipNFTv1']);
    SharedOwnershipNFTv1 = await ethers.getContract('SharedOwnershipNFTv1');
    [, account2] = await ethers.getSigners();

    GoldenToken = await ethers.getContract('GoldenToken');
    const { deployer } = await getNamedAccounts();

    console.log('deployer staked', (await GoldenToken.stakeOf(deployer)).toString())
  });

  describe('Deployment', function () {
    it('Should have default parameters', async function () {
      expect(SharedOwnershipNFTv1.address).to.not.equal(null);
      expect(await SharedOwnershipNFTv1.treasuryAddress()).to.equal('0x1291Be112d480055DaFd8a610b7d1e203891C274');
      expect(await SharedOwnershipNFTv1.goldenTokenContractAddress()).to.not.equal('0x0');
      expect(await SharedOwnershipNFTv1.name()).to.equal('Golden Entity');
      expect(await SharedOwnershipNFTv1.symbol()).to.equal('GLDE');
      expect(await SharedOwnershipNFTv1.minStakeToMint()).to.equal('10000000000000000000');
      expect(await SharedOwnershipNFTv1.minterReward(), 'Wrong minterReward').to.equal('10');
      expect(await SharedOwnershipNFTv1.totalSupply(), 'Wrong totalSupply').to.equal('0');
      expect(await SharedOwnershipNFTv1.TREASURY_SHARE(), 'Wrong totalSupply').to.equal(30000);
      expect(await SharedOwnershipNFTv1.MAX_CONTRIBUTION_WEIGHT(), 'Wrong totalSupply').to.equal(1000);
      expect(await SharedOwnershipNFTv1.CALC_PRECISION(), 'Wrong totalSupply').to.equal(3);
    });
  });

  describe('Minting', function () {
    it('Should test minting', async function () {
      expect(await SharedOwnershipNFTv1.totalSupply()).to.equal('0');
      expect(await SharedOwnershipNFTv1.exists(hash1)).to.equal(false)
      await SharedOwnershipNFTv1.mint(hash1)
      expect(await SharedOwnershipNFTv1.exists(hash1)).to.equal(true)
      expect(await SharedOwnershipNFTv1.getTokenWeight(hash1)).to.equal('10')
      expect(await SharedOwnershipNFTv1.getContributorShare('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
        hash1
      )).to.equal('100000')
      expect(await SharedOwnershipNFTv1.totalSupply()).to.equal('1')
    });
    it('Should fail minting', async function () {
      expect(await SharedOwnershipNFTv1.totalSupply()).to.equal('0');
      expect(await SharedOwnershipNFTv1.exists(hash1)).to.equal(false)
      await SharedOwnershipNFTv1.mint(hash1)
      await expect(SharedOwnershipNFTv1.mint(hash1)).to.be.revertedWith('tokenId already exists');
      expect(await SharedOwnershipNFTv1.exists(hash1)).to.equal(true)
      expect(await SharedOwnershipNFTv1.getTokenWeight(hash1)).to.equal('10')
      expect(await SharedOwnershipNFTv1.getContributorShare('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
        hash1
      )).to.equal('100000')
      expect(await SharedOwnershipNFTv1.totalSupply()).to.equal('1')
    });
    it('Should fail minting, not staked', async function () {
      await GoldenToken.slash(await account2.getAddress(), '10000000000000000000')
      expect(await GoldenToken.stakeOf(await account2.getAddress())).to.equal('0')
      let SharedOwnershipNFTv1Reasigned = SharedOwnershipNFTv1.connect(account2)
      await expect(SharedOwnershipNFTv1Reasigned.mint(hash1)).to.be.revertedWith('Not enough staked')
    });
  });
  describe('Weights', function () {
    it('Should test addWeight', async function () {
      await SharedOwnershipNFTv1.mint(hash1) // + 10 for minting
      await SharedOwnershipNFTv1.mint(hash2) // + 10 for minting
      await SharedOwnershipNFTv1.addWeight(hash1, '20')
      await SharedOwnershipNFTv1.addWeight(hash2, '10')
      let SharedOwnershipNFTv1Reasigned = SharedOwnershipNFTv1.connect(account2)
      await SharedOwnershipNFTv1Reasigned.addWeight(hash2, '30')
      expect(await SharedOwnershipNFTv1.getWeight(hash1, await SharedOwnershipNFTv1.signer.getAddress())).to.equal('30')
      expect(await SharedOwnershipNFTv1.getWeight(hash2, await SharedOwnershipNFTv1.signer.getAddress())).to.equal('20')
      expect(await SharedOwnershipNFTv1.getWeight(hash2, await SharedOwnershipNFTv1Reasigned.signer.getAddress())).to.equal('30')
      expect(await SharedOwnershipNFTv1.getTokenWeight(hash1)).to.equal('30')
      expect(await SharedOwnershipNFTv1.getTokenWeight(hash2)).to.equal('50')
    });
    it('Should fail addWeight, not staked', async function () {
      let SharedOwnershipNFTv1Reasigned = SharedOwnershipNFTv1.connect(account2)
      await SharedOwnershipNFTv1Reasigned.mint(hash1)
      await GoldenToken.slash(await account2.getAddress(), '10000000000000000000')
      expect(await GoldenToken.stakeOf(await account2.getAddress())).to.equal('0')
      await expect(SharedOwnershipNFTv1Reasigned.addWeight(hash1, '20')).to.be.revertedWith('Not enough staked')
    });
    it('Should fail addWeight/getWeight', async function () {
      await expect(SharedOwnershipNFTv1.getWeight(hash1, '0x0000000000000000000000000000000000000000')).to.be.revertedWith('Contributor cannot be 0 address')
    });
  });
  describe('Ownership', function () {
    it('Should test calling onlyOwner functions', async function () {
      expect(await SharedOwnershipNFTv1.setMinStakeToMint(10000))
      expect(await SharedOwnershipNFTv1.minStakeToMint()).to.equal('10000');
      expect(await SharedOwnershipNFTv1.setMinterReward(31234))
      expect(await SharedOwnershipNFTv1.minterReward()).to.equal('31234');
      expect(await SharedOwnershipNFTv1.setTreasuryAddress('0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65'))
      expect(await SharedOwnershipNFTv1.treasuryAddress()).to.equal('0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65');
      expect(await SharedOwnershipNFTv1.setGoldenTokenContractAddress('0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65'))
      expect(await SharedOwnershipNFTv1.goldenTokenContractAddress()).to.equal('0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65');
    });
    it('Should fail calling onlyOwner functions', async function () {
      expect(await SharedOwnershipNFTv1.transferOwnership('0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65'))
      await expect(SharedOwnershipNFTv1.setMinStakeToMint(10000)).to.be.revertedWith('Ownable: caller is not the owner')
      expect(await SharedOwnershipNFTv1.minStakeToMint()).to.equal('10000000000000000000');
      await expect(SharedOwnershipNFTv1.setMinterReward(31234)).to.be.revertedWith('Ownable: caller is not the owner')
      expect(await SharedOwnershipNFTv1.minterReward()).to.equal('10');
      const oldTreasuryAddress = await SharedOwnershipNFTv1.treasuryAddress()
      const oldGoldenTokenContractAddress = await SharedOwnershipNFTv1.goldenTokenContractAddress()
      await expect(SharedOwnershipNFTv1.setTreasuryAddress('0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65'))
        .to.be.revertedWith('Ownable: caller is not the owner')
      expect(await SharedOwnershipNFTv1.treasuryAddress()).to.equal(oldTreasuryAddress);
      await expect(SharedOwnershipNFTv1.setGoldenTokenContractAddress('0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65'))
        .to.be.revertedWith('Ownable: caller is not the owner')
      expect(await SharedOwnershipNFTv1.goldenTokenContractAddress()).to.equal(oldGoldenTokenContractAddress);
    });
  });
  describe('General Testing', function () {
    it('Should test exists', async function () {
      expect(await SharedOwnershipNFTv1.exists(hash1)).to.equal(false)
      expect(await SharedOwnershipNFTv1.exists(hash2)).to.equal(false)
      expect(await SharedOwnershipNFTv1.mint(hash1))
      expect(await SharedOwnershipNFTv1.mint(hash2))
      expect(await SharedOwnershipNFTv1.exists(hash1)).to.equal(true)
      expect(await SharedOwnershipNFTv1.exists(hash2)).to.equal(true)
    });
  });
});
