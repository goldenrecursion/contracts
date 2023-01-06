import chai, { expect } from 'chai';
import { deployments, ethers } from 'hardhat';
import { v4 as uuidv4 } from 'uuid';
import type { VotingController } from '../../typechain/contracts/voting/VotingController';
import { BigNumber, ContractReceipt } from 'ethers';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import getRandomBytesHexString from '../utils/getRandomBytesHexString';
import BalanceTree from '../../trees/balance-tree';
chai.config.includeStack = true;
chai.Assertion.includeStack = true;

const privKey1 = 'bb0ca772b322902b2c1118d52d90b63f5abb6f9184aabe8db38577010557dc70'
const address1 = '0x9ED5724f7dc9eCDd6b48185F875A8779c2059533';
const privKey2 = '7c5874e9769221a2481bf8b28b5690740dd5e0a6115e4df1cb6f657dcb58d096'
const address2 = '0x61bfCd8d7fcbd61508027Ba5935176A3298E941e';
// const entityId = 'a27218b8-6a4d-47bb-95b6-5a55334fac1c';
// const entityId2 = '0a9fcc89-e14b-47af-85c3-8465ca607c29';
// const entityId3 = '39eafb86-6304-4d99-a07b-00e93e96b52c';
// const entityId4 = '6b35df72-43e7-457e-908b-d76790c0657f';

// const docId = 'QmZJWm5Tx1G13Do1RbQqYRzZRy4MZ7mgj4rg3MX5bwwHmH';
// const docId2 = 'QmSioQ78VA8hS6DZnrWWReX8MLWvSzcZobtjK322yWottz';

const ownableError = 'Ownable: caller is not the owner';
const overrides = {
  gasLimit: 9999999,
}

// const getEventInfo = async (receipt: ContractReceipt, limit?: number) => {
//   const intrfc = new ethers.utils.Interface([
//     'event Minted(uint256 indexed tokenId, string entityId)',
//   ]);
//   const result = [];
//   if (receipt.events) {
//     for (let i = 0; i < receipt.events?.length; i++) {
//       const data = receipt.events?.[i].data;
//       const topics = receipt.events?.[i].topics;
//       const event = intrfc.decodeEventLog('Minted', data!, topics);
//       result.push({
//         tokenId: event.tokenId.toString(),
//         entityId: event.entityId,
//       });
//       if (limit && i === limit - 1) break;
//     }
//   } else {
//     console.log('getEventInfo no events to decode');
//   }
//   return result;
// };

describe('VotingController', function () {
  let VotingController: VotingController;
  let owner: SignerWithAddress;
  let user1: SignerWithAddress;
  let user2: SignerWithAddress;

  beforeEach(async function () {
    await deployments.fixture(['GoldenToken']);
    await deployments.fixture(['VotingController']);
    VotingController = await ethers.getContract('VotingController');
    const GoldenToken = await ethers.getContract('GoldenToken');
    expect(await VotingController.getToken()).to.equal(GoldenToken.address);
    const [deployer, addr1, addr2] = await ethers.getSigners();
    owner = deployer;
    user1 = addr1;
    user2 = addr2;
    GoldenToken.connect(owner)
    await GoldenToken.transfer(VotingController.address, '1000000000000000000000');
    expect(await GoldenToken.balanceOf(VotingController.address)).to.equal('1000000000000000000000');
  });

  describe('Test functions', function () {
    it('Should test contract functions', async () => {
      expect(await VotingController.getLastEpoch()).to.equal(0);
      const randomMerkleTree = getRandomBytesHexString(32);
      await VotingController.addMerkleRoot(randomMerkleTree);
      expect(await VotingController.getLastEpoch()).to.equal(1);
    });
  });


  // describe('VotingController', function () {
  //   it('Should test minter burner wallets balances', async function () {
  //     const mintersAndBurners = JSON.parse(MINTERS_AND_BURNERS ?? '[]');
  //     if (mintersAndBurners.length > 0) {
  //       for (const mb of mintersAndBurners) {
  //         const wallet = new ethers.Wallet(mb);
  //         expect(await ethers.provider.getBalance(wallet.address)).to.equal(
  //           '1000000000000000000'
  //         );
  //       }
  //     }
  //   });
  //   it('Should test minting/burning', async function () {
  //     expect(await GoldenNFT.totalSupply()).to.equal('0');
  //     expect(await GoldenNFT.getTokenIds([entityId])).to.eql([
  //       BigNumber.from('0'),
  //     ]);
  //     await (await GoldenNFT.mint(entityId)).wait(0);
  //     await (await GoldenNFT.mint(entityId2)).wait(0);
  //     await (await GoldenNFT.mint(entityId3)).wait(0);
  //     await (await GoldenNFT.mint(entityId4)).wait(0);
  //     expect(await GoldenNFT.getEntityId(1)).to.equal(entityId);
  //     expect(await GoldenNFT.getEntityId(2)).to.equal(entityId2);
  //     expect(await GoldenNFT.getEntityId(3)).to.equal(entityId3);
  //     expect(await GoldenNFT.getEntityId(4)).to.equal(entityId4);
  //     expect(await GoldenNFT.getTokenId(entityId)).to.equal(1);
  //     expect(await GoldenNFT.getTokenId(entityId2)).to.equal(2);
  //     expect(await GoldenNFT.getTokenId(entityId3)).to.equal(3);
  //     expect(await GoldenNFT.getTokenId(entityId4)).to.equal(4);
  //     expect(await GoldenNFT.getTokenIds([])).to.eql([]);
  //     expect(
  //       await GoldenNFT.getTokenIds([entityId, entityId2, entityId3, entityId4])
  //     ).to.eql([
  //       BigNumber.from('1'),
  //       BigNumber.from('2'),
  //       BigNumber.from('3'),
  //       BigNumber.from('4'),
  //     ]);
  //     await (await GoldenNFT.bulkBurn([1, 2, 3, 4])).wait(0);

  //     const tx = await (await GoldenNFT.mint(entityId)).wait(0);
  //     const tx2 = await (await GoldenNFT.mint(entityId2)).wait(0);
  //     const eventInfo = await getEventInfo(tx, 1);
  //     const eventInfo2 = await getEventInfo(tx2, 1);
  //     expect(eventInfo[0].entityId).to.equal(entityId);
  //     expect(eventInfo2[0].entityId).to.equal(entityId2);

  //     expect(await GoldenNFT.totalSupply()).to.equal('2');
  //     await expect(GoldenNFT.burn(12345)).to.be.revertedWith(
  //       'burn nonexistent token'
  //     );
  //     expect(await GoldenNFT.totalSupply()).to.equal('2');
  //     await GoldenNFT.burn(5);
  //     expect(await GoldenNFT.totalSupply()).to.equal('1');

  //     await GoldenNFT.burn(6);

  //     let mints = [''];

  //     await expect(GoldenNFT.bulkMint(mints)).to.be.revertedWith(
  //       'entityId cannot be empty'
  //     );

  //     const mintsNumber = 100;
  //     mints = generateBulkMints(mintsNumber);
  //     await GoldenNFT.bulkMint(mints);

  //     expect(await GoldenNFT.totalSupply()).to.equal(mintsNumber);
  //     const burnIds = [7, 8, 9, 10, 11];
  //     await GoldenNFT.bulkBurn(burnIds);
  //     expect(await GoldenNFT.totalSupply()).to.equal(
  //       mintsNumber - burnIds.length
  //     );
  // });

  //   it('Should test events', async function () {
  //     await expect(GoldenNFT.mint(entityId))
  //       .to.emit(GoldenNFT, 'Minted')
  //       .withArgs(1, entityId);
  //     await expect(GoldenNFT.mint(entityId))
  //       .to.emit(GoldenNFT, 'MintFailed')
  //       .withArgs(entityId, mintFailAlreadyExists);
  //     await expect(GoldenNFT.mint(entityId2))
  //       .to.emit(GoldenNFT, 'Minted')
  //       .withArgs(2, entityId2);
  //     await expect(GoldenNFT.burn(1))
  //       .to.emit(GoldenNFT, 'Burned')
  //       .withArgs(1, entityId);
  //     await expect(GoldenNFT.setDocId(docId))
  //       .to.emit(GoldenNFT, 'DocumentSet')
  //       .withArgs(docId);
  //     await expect(GoldenNFT.setDocId(docId2))
  //       .to.emit(GoldenNFT, 'DocumentSet')
  //       .withArgs(docId2);
  //     await expect(GoldenNFT.setGoldenTokenContractAddress(address2))
  //       .to.emit(GoldenNFT, 'GoldenTokenContractAddressChanged')
  //       .withArgs(address2);
  //   });
  // });
  describe('Access control', function () {
    it('Should test onlyOwner functions', async () => {
      await VotingController.setToken(address1)
      expect(await VotingController.getToken()).to.equal(address1);
      const randomMerkleTree = getRandomBytesHexString(32);
      await VotingController.addMerkleRoot(randomMerkleTree);
      expect(await VotingController.getMerkleRoot(await VotingController.getLastEpoch())).to.equal(randomMerkleTree);
    });
    it('Should fail calling onlyOwner functions', async () => {
      await VotingController.transferOwnership(
        '0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65'
      );
      await expect(VotingController.setToken(address1)).to.be.revertedWith(
        ownableError
      );
      const randomMerkleTree = getRandomBytesHexString(32);
      await expect(VotingController.addMerkleRoot(randomMerkleTree)).to.be.revertedWith(
        ownableError
      );
    });
    it('Should test claiming functions', async () => {
      const tree = new BalanceTree([
        { account: address1, amount: BigNumber.from(100) },
        { account: address2, amount: BigNumber.from(101) },
      ])
      await VotingController.addMerkleRoot(tree.getHexRoot());
      const proof1 = tree.getProof(0, address1, BigNumber.from(100))
      expect(await VotingController.isClaimed(1, 0)).to.equal(false);
      expect(await VotingController.isClaimed(1, 1)).to.equal(false);
      await expect(VotingController.claim(1, 0, address1, BigNumber.from(100), proof1, overrides))
        .to.emit(VotingController, 'Claimed')
        .withArgs(1, 0, address1, 100)
      expect(await VotingController.isClaimed(1, 0)).to.equal(true);
      expect(await VotingController.isClaimed(1, 1)).to.equal(false);
      const proof2 = tree.getProof(1, address2, BigNumber.from(101))
      await expect(VotingController.claim(1, 1, address2, BigNumber.from(101), proof2, overrides))
        .to.emit(VotingController, 'Claimed')
        .withArgs(1, 1, address2, 101)
      expect(await VotingController.isClaimed(1, 0)).to.equal(true);
      expect(await VotingController.isClaimed(1, 1)).to.equal(true);
    });
    //   it('Should test calling onlyOwner functions', async function () {
    //     const mintsNumber = 100;
    //     const mints = generateBulkMints(mintsNumber);
    //     await GoldenNFT.bulkMint(mints);
    //     const burnIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //     await GoldenNFT.bulkBurn(burnIds);
    //     expect(
    //       await GoldenNFT.setGoldenTokenContractAddress(
    //         '0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65'
    //       )
    //     );
    //     expect(await GoldenNFT.goldenTokenContractAddress()).to.equal(
    //       '0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65'
    //     );
    //     await GoldenNFT.addMinters([address2]);
    //     await GoldenNFT.addBurners([address2]);
    //     await GoldenNFT.removeMinters([address2]);
    //     await GoldenNFT.removeBurners([address2]);
    //     expect(await GoldenNFT.getDocId()).to.equal('');
    //     await GoldenNFT.setDocId(docId);
    //     expect(await GoldenNFT.getDocId()).to.equal(docId);
    //     await GoldenNFT.setDocId(docId2);
    //     expect(await GoldenNFT.getDocId()).to.equal(docId2);
    //   });
    //   it('Should fail calling onlyOwner functions', async function () {
    //     await GoldenNFT.transferOwnership(
    //       '0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65'
    //     );
    //     await expect(GoldenNFT.addMinters([address2])).to.be.revertedWith(
    //       ownableError
    //     );
    //     await expect(GoldenNFT.addBurners([address2])).to.be.revertedWith(
    //       ownableError
    //     );
    //     await expect(GoldenNFT.removeMinters([address2])).to.be.revertedWith(
    //       ownableError
    //     );
    //     await expect(GoldenNFT.removeBurners([address2])).to.be.revertedWith(
    //       ownableError
    //     );
    //     await expect(GoldenNFT.setDocId(docId2)).to.be.revertedWith(ownableError);
    //     await expect(
    //       GoldenNFT.setGoldenTokenContractAddress(address2)
    //     ).to.be.revertedWith(ownableError);
    //   });
    //   it('Should test minter/burner access control', async function () {
    //     const mintsNumber = 100;
    //     await GoldenNFT.removeMinters([owner.address]);
    //     let mints = generateBulkMints(mintsNumber);
    //     await expect(GoldenNFT.bulkMint(mints)).to.be.revertedWith(
    //       roleError(owner.address, 'mint')
    //     );
    //     await expect(GoldenNFT.mint(entityId2)).to.be.revertedWith(
    //       roleError(owner.address, 'mint')
    //     );
    //     const burnIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //     await expect(GoldenNFT.bulkBurn(burnIds)).to.be.revertedWith(
    //       'burn nonexistent token'
    //     );
    //     await expect(GoldenNFT.burn(2)).to.be.revertedWith(
    //       'burn nonexistent token'
    //     );

    //     await GoldenNFT.addMinters([owner.address]);
    //     await GoldenNFT.removeBurners([owner.address]);

    //     await GoldenNFT.mint(entityId4);

    //     mints = generateBulkMints(mintsNumber);
    //     expect(await GoldenNFT.getEntityId(1)).to.equal(entityId4);
    //     await GoldenNFT.bulkMint(mints);

    //     await expect(GoldenNFT.bulkBurn(burnIds)).to.be.revertedWith(
    //       roleError(owner.address, 'burn')
    //     );
    //     await expect(GoldenNFT.burn(2)).to.be.revertedWith(
    //       roleError(owner.address, 'burn')
    //     );
    //     await GoldenNFT.removeMinters([owner.address]);

    //     GoldenNFT = GoldenNFT.connect(user1);
    //     // expect(await GoldenNFT.owner()).to.equal(user2.address)
    //     await expect(GoldenNFT.addMinters([user2.address])).to.be.revertedWith(
    //       ownableError
    //     );
    //     await expect(GoldenNFT.addBurners([owner.address])).to.be.revertedWith(
    //       ownableError
    //     );
    //     GoldenNFT = GoldenNFT.connect(owner);
    //     await GoldenNFT.transferOwnership(user2.address);

    //     // Make sure you can add roles with new owner
    //     GoldenNFT = GoldenNFT.connect(user2);
    //     await GoldenNFT.addMinters([owner.address, user1.address]);
    //     await GoldenNFT.addBurners([owner.address, user2.address]);

    //     await expect(GoldenNFT.mint(uuidv4())).to.be.revertedWith(
    //       roleError(user2.address, 'mint')
    //     );
    //     await GoldenNFT.burn(3);
    //     GoldenNFT = GoldenNFT.connect(owner);
    //     await GoldenNFT.mint(uuidv4());
    //     await GoldenNFT.burn(1);
    //     GoldenNFT = GoldenNFT.connect(user1);
    //     await GoldenNFT.mint(uuidv4());
    //     await expect(GoldenNFT.burn(1)).to.be.revertedWith(
    //       roleError(user1.address, 'burn')
    //     );
  });
  // });
});
