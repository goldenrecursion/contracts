import chai, { expect } from 'chai';
import { deployments, ethers } from 'hardhat';
import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';

import type { GoldenNFTv1 } from '../../typechain/contracts/nft/GoldenNFTv1';
import { ContractReceipt } from 'ethers';
chai.config.includeStack = true;
chai.Assertion.includeStack = true;

const hash1 =
  '0x4908bea25834c7a03f66276d6172aa6e7e31e24d761ca6412bf7d9f14c593064';
const hash2 =
  '0xb94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9';
const address2 = '0xd8f26E63c9b3a4c8D1CAb70eb252a15c7D180F04';
const entityId = 'a27218b8-6a4d-47bb-95b6-5a55334fac1c';
const entityId2 = '0a9fcc89-e14b-47af-85c3-8465ca607c29';

export const generateBulkMints = (nrOfMints: number) => {
  const mints: { ceramicId: string; entityId: string }[] = [];
  for (let i = 0; i < nrOfMints; i++) {
    const ceramicId = crypto.randomBytes(32).toString('hex');
    const entityId = uuidv4();
    mints[i] = {
      ceramicId,
      entityId,
    };
  }
  return mints;
};

const getEventInfo = async (receipt: ContractReceipt) => {
  const intrfc = new ethers.utils.Interface([
    'event Minted(uint256 indexed tokenId, string ceramicId, string entityId)',
  ]);
  const data = receipt.events?.[0].data;
  const topics = receipt.events?.[0].topics;
  const event = intrfc.decodeEventLog('Minted', data!, topics);
  return {
    tokenId: event.tokenId,
    ceramicId: event.ceramicId,
    entityId: event.entityId,
  };
};

describe('GoldenNft - NFT Component', function () {
  let GoldenNFTv1: GoldenNFTv1;

  beforeEach(async function () {
    await deployments.fixture(['GoldenNFTv1']);
    GoldenNFTv1 = await ethers.getContract('GoldenNFTv1');
  });

  describe('Deployment', function () {
    it('Should have default parameters', async function () {
      expect(await GoldenNFTv1._goldenTokenContractAddress()).to.not.equal(
        '0x0'
      );
      expect(await GoldenNFTv1.name()).to.equal('Golden Entity');
      expect(await GoldenNFTv1.symbol()).to.equal('GLDE');
      expect(await GoldenNFTv1._totalSupply(), 'Wrong totalSupply').to.equal(
        '0'
      );
    });
  });

  describe('NFT', function () {
    it('Should test minting/burning', async function () {
      expect(await GoldenNFTv1._totalSupply()).to.equal('0');
      const tx = await (await GoldenNFTv1.mint(hash1, entityId)).wait(0);
      const tx2 = await (await GoldenNFTv1.mint(hash2, entityId2)).wait(0);
      const eventInfo = await getEventInfo(tx);
      const eventInfo2 = await getEventInfo(tx2);
      expect(await GoldenNFTv1.tokenURI(eventInfo.tokenId)).to.equal(hash1);
      expect(await GoldenNFTv1.tokenURI(eventInfo2.tokenId)).to.equal(hash2);
      expect(eventInfo.ceramicId).to.equal(hash1);
      expect(eventInfo2.ceramicId).to.equal(hash2);
      expect(eventInfo.entityId).to.equal(entityId);
      expect(eventInfo2.entityId).to.equal(entityId2);

      expect(await GoldenNFTv1.ceramicIdByTokenId(eventInfo2.tokenId)).to.equal(
        hash2
      );
      expect(await GoldenNFTv1.tokenIdByCeramicId(hash2)).to.equal(
        eventInfo2.tokenId
      );
      expect(await GoldenNFTv1._totalSupply()).to.equal('2');
      await expect(GoldenNFTv1.burn(12345)).to.be.revertedWith(
        'burn nonexistent token'
      );
      expect(await GoldenNFTv1._totalSupply()).to.equal('2');
      await GoldenNFTv1.burn(1);
      expect(await GoldenNFTv1._totalSupply()).to.equal('1');
      expect(await GoldenNFTv1.tokenURI(0)).to.equal(hash1);
      await expect(GoldenNFTv1.tokenURI(1)).to.be.revertedWith(
        'tokenId does not exist'
      );

      await GoldenNFTv1.burn(0);
      let mints = [
        {
          ceramicId: '',
          entityId: 'some',
        },
      ];

      await expect(GoldenNFTv1.bulkMint(mints)).to.be.revertedWith(
        'ceramicId cannot be empty'
      );

      mints = [
        {
          ceramicId: 'some',
          entityId: '',
        },
      ];

      await expect(GoldenNFTv1.bulkMint(mints)).to.be.revertedWith(
        'entityId cannot be empty'
      );

      const mintsNumber = 100;
      mints = generateBulkMints(mintsNumber);
      await GoldenNFTv1.bulkMint(mints);
      expect(await GoldenNFTv1._totalSupply()).to.equal(mintsNumber);
      const burnIds = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
      await GoldenNFTv1.bulkBurn(burnIds);
      expect(await GoldenNFTv1._totalSupply()).to.equal(mintsNumber - 10);
    });

    it('Should test events', async function () {
      await expect(GoldenNFTv1.mint(hash1, entityId))
        .to.emit(GoldenNFTv1, 'Minted')
        .withArgs(0, hash1, entityId);
      await expect(GoldenNFTv1.mint(hash2, entityId2))
        .to.emit(GoldenNFTv1, 'Minted')
        .withArgs(1, hash2, entityId2);
      await expect(GoldenNFTv1.setGoldenTokenContractAddress(address2))
        .to.emit(GoldenNFTv1, 'GoldenTokenContractAddressChanged')
        .withArgs(address2);
    });
  });
  describe('Ownership', function () {
    it('Should test calling onlyOwner functions', async function () {
      const mintsNumber = 100;
      const mints = generateBulkMints(mintsNumber);
      await GoldenNFTv1.bulkMint(mints);
      const burnIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      await GoldenNFTv1.bulkBurn(burnIds);
      expect(
        await GoldenNFTv1.setGoldenTokenContractAddress(
          '0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65'
        )
      );
      expect(await GoldenNFTv1._goldenTokenContractAddress()).to.equal(
        '0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65'
      );
    });
    it('Should fail calling onlyOwner functions', async function () {
      await GoldenNFTv1.transferOwnership(
        '0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65'
      );
      const mintsNumber = 100;
      const ownableError = 'Ownable: caller is not the owner';
      const mints = generateBulkMints(mintsNumber);
      await expect(GoldenNFTv1.bulkMint(mints)).to.be.revertedWith(
        ownableError
      );
      expect(await GoldenNFTv1._totalSupply()).to.equal(0);
      const burnIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      await expect(GoldenNFTv1.bulkBurn(burnIds)).to.be.revertedWith(
        ownableError
      );
      await expect(
        GoldenNFTv1.setGoldenTokenContractAddress(
          '0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65'
        )
      ).to.be.revertedWith(ownableError);
      expect(await GoldenNFTv1._goldenTokenContractAddress()).to.not.equal(
        '0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65'
      );
    });
  });
});
