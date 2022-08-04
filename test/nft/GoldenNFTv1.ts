import chai, { expect } from 'chai';
chai.config.includeStack = true;
chai.Assertion.includeStack = true
import {
  deployments,
  ethers,
  getNamedAccounts
} from 'hardhat';
import { Wallet } from 'ethers';
import crypto from 'crypto';

import { Contracts as _Contracts } from '../utils';
import type { GoldenNFTv1 } from '../../typechain/GoldenNFTv1';
import { GoldenToken } from '../../typechain';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { ContractReceipt } from 'ethers';

const hash1 = '0x4908bea25834c7a03f66276d6172aa6e7e31e24d761ca6412bf7d9f14c593064'
const hash2 = '0xb94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9'
const address = '0x4e2548274014F034Ffc71947bb7bA584C64E2315'
const address2 = '0xd8f26E63c9b3a4c8D1CAb70eb252a15c7D180F04'
const zeroAddress = '0x0000000000000000000000000000000000000000'

export const generateBulkMints = (nrOfMints: number) => {
  const mints = [];
  for (let i = 0; i < nrOfMints; i++) {
    const id = crypto.randomBytes(32).toString('hex');
    const ceramicId = crypto.randomBytes(32).toString('hex');
    const privateKey = '0x' + id;

    var wallet = new Wallet(privateKey);
    mints[i] = {
      to: wallet.address,
      ceramicId: ceramicId,
    };
  }
  return mints
}

const getTokenIdFromEvent = async (receipt: ContractReceipt) => {
  const intrfc = new ethers.utils.Interface(["event Minted(address indexed to, uint256 indexed tokenId, string ceramicId)"]);
  const data = receipt.events?.[1].data;
  const topics = receipt.events?.[1].topics;
  const event = intrfc.decodeEventLog("Minted", data!, topics);
  return event['tokenId']
}

describe('SharedOwnershipNFT - NFT Component', function () {
  let GoldenNFTv1: GoldenNFTv1
  let GoldenToken: GoldenToken
  let account2: SignerWithAddress
  let deployer: string

  beforeEach(async function () {
    await deployments.fixture(['GoldenNFTv1']);
    GoldenNFTv1 = await ethers.getContract('GoldenNFTv1');
    [, account2] = await ethers.getSigners();
    account2.address
    GoldenToken = await ethers.getContract('GoldenToken');
    deployer = (await getNamedAccounts()).deployer;

    console.log('deployer staked', (await GoldenToken.stakeOf(deployer)).toString())

  });

  describe('Deployment', function () {
    it('Should have default parameters', async function () {
      expect(GoldenNFTv1.address).to.not.equal(null);
      expect(await GoldenNFTv1._goldenTokenContractAddress()).to.not.equal('0x0');
      expect(await GoldenNFTv1.name()).to.equal('Golden Entity');
      expect(await GoldenNFTv1.symbol()).to.equal('GLDE');
      expect(await GoldenNFTv1._totalSupply(), 'Wrong totalSupply').to.equal('0');
    });
  });

  describe('NFT', function () {
    it('Should test minting/burning', async function () {
      expect(await GoldenNFTv1._totalSupply()).to.equal('0');
      const tx = await (await GoldenNFTv1.mint(address, hash1)).wait(0)
      const tx2 = await (await GoldenNFTv1.mint(address2, hash2)).wait(0)
      const tokenId = await getTokenIdFromEvent(tx)
      const tokenId2 = await getTokenIdFromEvent(tx2)
      expect(await GoldenNFTv1.tokenURI(tokenId)).to.equal(hash1)
      expect(await GoldenNFTv1.tokenURI(tokenId2)).to.equal(hash2)
      expect(await GoldenNFTv1._totalSupply()).to.equal('2')
      await expect(GoldenNFTv1.burn(12345)).to.be.revertedWith('ERC721: owner query for nonexistent token')
      expect(await GoldenNFTv1._totalSupply()).to.equal('2')
      await GoldenNFTv1.burn(1)
      expect(await GoldenNFTv1._totalSupply()).to.equal('1')
      expect(await GoldenNFTv1.tokenURI(0)).to.equal(hash1)
      await expect(GoldenNFTv1.tokenURI(1)).to.be.revertedWith('tokenId does not exist')

      await GoldenNFTv1.burn(0) // clear
      // console.log('>>>> ', await GoldenNFTv1.ownerOf(0), await GoldenNFTv1.ownerOf(1))
      let mints = []
      mints[0] = {
        to: zeroAddress,
        ceramicId: 'watever'
      }
      await expect(GoldenNFTv1.bulkMint(mints)).to.be.revertedWith("invalid to")
      mints[0] = {
        to: address,
        ceramicId: ''
      }
      await expect(GoldenNFTv1.bulkMint(mints)).to.be.revertedWith("empty ceramicId")

      const mintsNumber = 100
      mints = generateBulkMints(mintsNumber)
      await GoldenNFTv1.bulkMint(mints)
      expect(await GoldenNFTv1._totalSupply()).to.equal(mintsNumber);
      const burnIds = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      await GoldenNFTv1.bulkBurn(burnIds)
      expect(await GoldenNFTv1._totalSupply()).to.equal(mintsNumber - 10);

      await expect(GoldenNFTv1.mint(address, '')).to.be.revertedWith('ceramicId cannot be empty')
      await expect(GoldenNFTv1.mint(zeroAddress, 'some')).to.be.revertedWith('to cannot be 0 or this')
      await expect(GoldenNFTv1.mint(GoldenNFTv1.address, 'some')).to.be.revertedWith('to cannot be 0 or this')
      expect(await GoldenNFTv1._totalSupply()).to.equal(mintsNumber - 10);
    });
    it('Should test events', async function () {
      await expect(
        GoldenNFTv1.mint(address, hash1)
      ).to.emit(GoldenNFTv1, 'Minted')
        .withArgs(address, 0, hash1);
      await expect(
        GoldenNFTv1.mint(address2, hash2)
      ).to.emit(GoldenNFTv1, 'Minted')
        .withArgs(address2, 1, hash2);
      await expect(
        GoldenNFTv1.mint(address2, hash2)
      ).to.emit(GoldenNFTv1, 'Transfer')
        .withArgs(zeroAddress, address2, 2);
      await expect(
        GoldenNFTv1.setGoldenTokenContractAddress(address2)
      ).to.emit(GoldenNFTv1, 'GoldenTokenContractAddressChanged')
        .withArgs(address2);
    });
  });
  describe('Ownership', function () {
    it('Should test calling onlyOwner functions', async function () {
      const mintsNumber = 100
      const mints = generateBulkMints(mintsNumber)
      await GoldenNFTv1.bulkMint(mints)
      const burnIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      await GoldenNFTv1.bulkBurn(burnIds)
      expect(await GoldenNFTv1.setGoldenTokenContractAddress('0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65'))
      expect(await GoldenNFTv1._goldenTokenContractAddress()).to.equal('0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65');

    });
    it('Should fail calling onlyOwner functions', async function () {
      await GoldenNFTv1.transferOwnership('0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65')
      const mintsNumber = 100
      const ownableError = 'Ownable: caller is not the owner'
      const mints = generateBulkMints(mintsNumber)
      await expect(GoldenNFTv1.bulkMint(mints)).to.be.revertedWith(ownableError);
      expect(await GoldenNFTv1._totalSupply()).to.equal(0);
      const burnIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      await expect(GoldenNFTv1.bulkBurn(burnIds)).to.be.revertedWith(ownableError);
      await expect(GoldenNFTv1.setGoldenTokenContractAddress('0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65')).to.be.revertedWith(ownableError);
      expect(await GoldenNFTv1._goldenTokenContractAddress()).to.not.equal('0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65');
    });
  });
});