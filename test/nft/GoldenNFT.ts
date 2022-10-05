import chai, { expect } from 'chai';
import { deployments, ethers } from 'hardhat';
import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';

import type { GoldenNFT } from '../../typechain/contracts/nft/GoldenNFT';
import { ContractReceipt } from 'ethers';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
chai.config.includeStack = true;
chai.Assertion.includeStack = true;

const cerId1 =
  'kjzl6cwe1jw149vs6977urcm4mj87gchj3tykglgr6cpmsjdbknpar3duqfdt6e';
const cerId2 =
  'kjzl6cwe1jw145sehdr3zlj9pmdgnlhzphusg34gkcyo839q9hk087t3bx0la28';
const address2 = '0xd8f26E63c9b3a4c8D1CAb70eb252a15c7D180F04';
const entityId = 'a27218b8-6a4d-47bb-95b6-5a55334fac1c';
const entityId2 = '0a9fcc89-e14b-47af-85c3-8465ca607c29';
const entityId3 = '39eafb86-6304-4d99-a07b-00e93e96b52c';
const entityId4 = '6b35df72-43e7-457e-908b-d76790c0657f';

const ownableError = 'Ownable: caller is not the owner';
type RoleType = 'burn' | 'mint';
const roleHash: { [key in RoleType]: string } = {
  mint: '0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6',
  burn: '0x3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a848',
};
const roleError = (addr: string, role: 'burn' | 'mint') =>
  `AccessControl: account ${addr.toLowerCase()} is missing role ${
    roleHash[role]
  }`;

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

const getEventInfo = async (receipt: ContractReceipt, limit?: number) => {
  const intrfc = new ethers.utils.Interface([
    'event Minted(uint256 indexed tokenId, string ceramicId, string entityId)',
  ]);
  const result = [];
  if (receipt.events) {
    for (let i = 0; i < receipt.events?.length; i++) {
      const data = receipt.events?.[i].data;
      const topics = receipt.events?.[i].topics;
      const event = intrfc.decodeEventLog('Minted', data!, topics);
      result.push({
        tokenId: event.tokenId.toString(),
        ceramicId: event.ceramicId,
        entityId: event.entityId,
      });
      if (limit && i === limit - 1) break;
    }
  } else {
    console.log('getEventInfo no events to decode');
  }
  return result;
};

describe('GoldenNft - NFT Component', function () {
  let GoldenNFT: GoldenNFT;
  let owner: SignerWithAddress;
  let user1: SignerWithAddress;
  let user2: SignerWithAddress;

  beforeEach(async function () {
    await deployments.fixture(['GoldenNFT']);
    GoldenNFT = await ethers.getContract('GoldenNFT');
    const [deployer, addr1, addr2] = await ethers.getSigners();
    owner = deployer;
    user1 = addr1;
    user2 = addr2;
    await GoldenNFT.addMinters([owner.address]);
  });

  describe('Deployment', function () {
    it('Should have default parameters', async function () {
      expect(await GoldenNFT._goldenTokenContractAddress()).to.not.equal('0x0');
      expect(await GoldenNFT.name()).to.equal('Golden Entity');
      expect(await GoldenNFT.symbol()).to.equal('GLDE');
      expect(await GoldenNFT._totalSupply(), 'Wrong totalSupply').to.equal('0');
    });
  });

  describe('NFT', function () {
    it('Should test minting/burning', async function () {
      expect(await GoldenNFT._totalSupply()).to.equal('0');
      const tx = await (await GoldenNFT.mint(cerId1, entityId)).wait(0);
      const tx2 = await (await GoldenNFT.mint(cerId2, entityId2)).wait(0);
      const eventInfo = await getEventInfo(tx, 1);
      const eventInfo2 = await getEventInfo(tx2, 1);
      expect(await GoldenNFT.tokenURI(eventInfo[0].tokenId)).to.equal(cerId1);
      expect(await GoldenNFT.tokenURI(eventInfo2[0].tokenId)).to.equal(cerId2);
      expect(eventInfo[0].ceramicId).to.equal(cerId1);
      expect(eventInfo2[0].ceramicId).to.equal(cerId2);
      expect(eventInfo[0].entityId).to.equal(entityId);
      expect(eventInfo2[0].entityId).to.equal(entityId2);

      expect(await GoldenNFT._totalSupply()).to.equal('2');
      await expect(GoldenNFT.burn(12345)).to.be.revertedWith(
        'burn nonexistent token'
      );
      expect(await GoldenNFT._totalSupply()).to.equal('2');
      await GoldenNFT.burn(1);
      expect(await GoldenNFT._totalSupply()).to.equal('1');
      expect(await GoldenNFT.tokenURI(2)).to.equal(cerId2);
      await expect(GoldenNFT.tokenURI(3)).to.be.revertedWith(
        'tokenId does not exist'
      );

      await GoldenNFT.burn(2);
      let mints = [
        {
          ceramicId: '',
          entityId: 'some',
        },
      ];

      await expect(GoldenNFT.bulkMint(mints)).to.be.revertedWith(
        'ceramicId cannot be empty'
      );

      mints = [
        {
          ceramicId: 'some',
          entityId: '',
        },
      ];

      await expect(GoldenNFT.bulkMint(mints)).to.be.revertedWith(
        'entityId cannot be empty'
      );

      const mintsNumber = 100;
      mints = generateBulkMints(mintsNumber);
      await GoldenNFT.bulkMint(mints);

      // const receipt = await (await GoldenNFT.bulkMint(mints)).wait(0);
      // const events = await getEventInfo(receipt, 5)
      // console.log('>>> events', JSON.stringify(events, null, 2))
      expect(await GoldenNFT._totalSupply()).to.equal(mintsNumber);
      const burnIds = [3, 4, 5, 6, 7, 8, 9, 10, 11];
      await GoldenNFT.bulkBurn(burnIds);
      expect(await GoldenNFT._totalSupply()).to.equal(
        mintsNumber - burnIds.length
      );
    });

    it('Should test ceramic info', async function () {
      expect(await GoldenNFT._totalSupply()).to.equal('0');
      await (await GoldenNFT.mint(cerId1, entityId)).wait(0);
      await (await GoldenNFT.mint(cerId1, entityId2)).wait(0);
      await (await GoldenNFT.mint(cerId2, entityId3)).wait(0);
      await (await GoldenNFT.mint(cerId2, entityId4)).wait(0);
      expect(await GoldenNFT.getCeramicId(1)).to.equal(cerId1);
      expect(await GoldenNFT.getCeramicId(2)).to.equal(cerId1);
      expect(await GoldenNFT.getCeramicId(3)).to.equal(cerId2);
      expect(await GoldenNFT.getCeramicId(4)).to.equal(cerId2);
      expect(await GoldenNFT.getEntityId(1)).to.equal(entityId);
      expect(await GoldenNFT.getEntityId(2)).to.equal(entityId2);
      expect(await GoldenNFT.getEntityId(3)).to.equal(entityId3);
      expect(await GoldenNFT.getEntityId(4)).to.equal(entityId4);
      expect(await GoldenNFT.getTokenId(entityId)).to.equal(1);
      expect(await GoldenNFT.getTokenId(entityId2)).to.equal(2);
      expect(await GoldenNFT.getTokenId(entityId3)).to.equal(3);
      expect(await GoldenNFT.getTokenId(entityId4)).to.equal(4);
      expect(await GoldenNFT._ceramicIds(0)).to.equal(cerId1);
      expect(await GoldenNFT._ceramicIds(1)).to.equal(cerId2);
      expect(await GoldenNFT.getCeramicIdsLength()).to.equal(2);
      expect(await GoldenNFT.doesCeramicIdExist(cerId1)).to.equal(true);
      expect(await GoldenNFT.doesCeramicIdExist(cerId2)).to.equal(true);
      expect(await GoldenNFT.doesCeramicIdExist('something')).to.equal(false);
    });
    it('Should test events', async function () {
      await expect(GoldenNFT.mint(cerId1, entityId))
        .to.emit(GoldenNFT, 'Minted')
        .withArgs(1, cerId1, entityId);
      await expect(GoldenNFT.mint(cerId2, entityId2))
        .to.emit(GoldenNFT, 'Minted')
        .withArgs(2, cerId2, entityId2);
      await expect(GoldenNFT.setGoldenTokenContractAddress(address2))
        .to.emit(GoldenNFT, 'GoldenTokenContractAddressChanged')
        .withArgs(address2);
    });
  });
  describe('Access control', function () {
    it('Should test calling onlyOwner functions', async function () {
      const mintsNumber = 100;
      const mints = generateBulkMints(mintsNumber);
      await GoldenNFT.bulkMint(mints);
      const burnIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      await GoldenNFT.bulkBurn(burnIds);
      expect(
        await GoldenNFT.setGoldenTokenContractAddress(
          '0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65'
        )
      );
      expect(await GoldenNFT._goldenTokenContractAddress()).to.equal(
        '0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65'
      );
      await GoldenNFT.addMinters([address2]);
      await GoldenNFT.addBurners([address2]);
      await GoldenNFT.removeMinters([address2]);
      await GoldenNFT.removeBurners([address2]);
    });
    it('Should fail calling onlyOwner functions', async function () {
      await GoldenNFT.transferOwnership(
        '0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65'
      );
      await expect(GoldenNFT.addMinters([address2])).to.be.revertedWith(
        ownableError
      );
      await expect(GoldenNFT.addBurners([address2])).to.be.revertedWith(
        ownableError
      );
    });
    it('Should test minter/burner access control', async function () {
      const mintsNumber = 100;
      await GoldenNFT.removeMinters([owner.address]);
      const mints = generateBulkMints(mintsNumber);
      await expect(GoldenNFT.bulkMint(mints)).to.be.revertedWith(
        roleError(owner.address, 'mint')
      );
      await expect(GoldenNFT.mint(address2, entityId2)).to.be.revertedWith(
        roleError(owner.address, 'mint')
      );
      const burnIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      await expect(GoldenNFT.bulkBurn(burnIds)).to.be.revertedWith(
        'burn nonexistent token'
      );
      await expect(GoldenNFT.burn(2)).to.be.revertedWith(
        'burn nonexistent token'
      );

      await GoldenNFT.addMinters([owner.address]);
      await GoldenNFT.removeBurners([owner.address]);

      await GoldenNFT.mint(cerId1, entityId4);
      expect(await GoldenNFT.getCeramicId(1)).to.equal(cerId1);
      await GoldenNFT.bulkMint(mints);

      await expect(GoldenNFT.bulkBurn(burnIds)).to.be.revertedWith(
        roleError(owner.address, 'burn')
      );
      await expect(GoldenNFT.burn(2)).to.be.revertedWith(
        roleError(owner.address, 'burn')
      );
      await GoldenNFT.removeMinters([owner.address]);

      GoldenNFT = GoldenNFT.connect(user1);
      // expect(await GoldenNFT.owner()).to.equal(user2.address)
      await expect(GoldenNFT.addMinters([user2.address])).to.be.revertedWith(
        ownableError
      );
      await expect(GoldenNFT.addBurners([owner.address])).to.be.revertedWith(
        ownableError
      );
      GoldenNFT = GoldenNFT.connect(owner);
      await GoldenNFT.transferOwnership(user2.address);

      // Make sure you can add roles with new owner
      GoldenNFT = GoldenNFT.connect(user2);
      await GoldenNFT.addMinters([owner.address, user1.address]);
      await GoldenNFT.addBurners([owner.address, user2.address]);

      await expect(GoldenNFT.mint(cerId1, entityId4)).to.be.revertedWith(
        roleError(user2.address, 'mint')
      );
      await GoldenNFT.burn(3);
      GoldenNFT = GoldenNFT.connect(owner);
      await GoldenNFT.mint(cerId1, entityId4);
      await GoldenNFT.burn(1);
      GoldenNFT = GoldenNFT.connect(user1);
      await GoldenNFT.mint(cerId1, entityId4);
      await expect(GoldenNFT.burn(1)).to.be.revertedWith(
        roleError(user1.address, 'burn')
      );
    });
  });
});