import { expect } from 'chai';
import {
  deployments,
  ethers,
  getNamedAccounts,
  getUnnamedAccounts,
} from 'hardhat';

import { setupUsers, setupUser, User, Contracts as _Contracts } from './utils';
import getRandomBytesHexString from './utils/getRandomBytesHexString';
import initialPredicates from '../contracts/GoldenSchemaPredicates.json';
import { GoldenSchema as GoldenSchemaContract } from '../typechain/contracts';

type Contracts = Pick<_Contracts, 'GoldenSchema'>;

describe('GoldenSchema', function () {
  let GoldenSchema: Contracts['GoldenSchema'];
  let owner: User<Contracts>;
  let users: User<Contracts>[];

  beforeEach(async function () {
    await deployments.fixture(['GoldenSchema']);
    GoldenSchema = await ethers.getContract<GoldenSchemaContract>('GoldenSchema');
    const contracts = { GoldenSchema };
    const { deployer } = await getNamedAccounts();
    owner = await setupUser(deployer, contracts);
    users = await setupUsers(await getUnnamedAccounts(), contracts);
  });

  describe('Deployment', function () {
    it('Should have correct owner', async function () {
      expect(await GoldenSchema.owner()).to.equal(owner.address);
    });

    it('Should have correct initial state', async function () {
      const predicates = await GoldenSchema.predicates();
      expect(predicates).to.deep.equal(initialPredicates);
    });
  });

  describe('Schema', function () {
    describe('predicates', () => {
      describe('owner', async () => {
        it('can add a predicate and an event is emitted', async function () {
          const predicateID = getRandomBytesHexString(16);
          const predicateCID = getRandomBytesHexString();
          await expect(
            owner.GoldenSchema.addPredicate(predicateID, predicateCID)
          )
            .to.emit(owner.GoldenSchema, 'PredicateAdded')
            .withArgs(predicateID, predicateCID);
          const predicates = await GoldenSchema.predicates();
          expect(predicates[predicates.length - 1]).to.deep.equal([
            predicateID,
            predicateCID,
          ]);
          const latestCID = await GoldenSchema.predicateIDToLatestCID(
            predicateID
          );
          expect(latestCID).to.equal(predicateCID);
        });

        it('can udpate a predicate and an event is emitted', async function () {
          const predicateID = getRandomBytesHexString(16);
          const predicateCID = getRandomBytesHexString();
          await owner.GoldenSchema.addPredicate(
            predicateID,
            getRandomBytesHexString()
          );
          await expect(
            owner.GoldenSchema.updatePredicate(predicateID, predicateCID)
          )
            .to.emit(owner.GoldenSchema, 'PredicateUpdated')
            .withArgs(predicateID, predicateCID);
          const predicates = await GoldenSchema.predicates();
          expect(predicates.find(([id]) => id === predicateID)).to.deep.equal([
            predicateID,
            predicateCID,
          ]);
          const latestCID = await GoldenSchema.predicateIDToLatestCID(
            predicateID
          );
          expect(latestCID).to.equal(predicateCID);
        });

        it('can remove a predicate and an event is emitted', async function () {
          const predicateID = getRandomBytesHexString(16);
          const predicateCID = getRandomBytesHexString();
          await owner.GoldenSchema.addPredicate(predicateID, predicateCID);
          await expect(owner.GoldenSchema.removePredicate(predicateID))
            .to.emit(owner.GoldenSchema, 'PredicateRemoved')
            .withArgs(predicateID, predicateCID);
          const predicates = await GoldenSchema.predicates();
          // eslint-disable-next-line no-unused-expressions
          expect(predicates.find(([id]) => id === predicateID)).to.be.undefined;
          const latestCID = await GoldenSchema.predicateIDToLatestCID(
            predicateID
          );
          expect(latestCID).to.equal(predicateCID);
        });

        it('can not add a duplicate predicate', async function () {
          const predicateID = getRandomBytesHexString(16);
          await owner.GoldenSchema.addPredicate(
            predicateID,
            getRandomBytesHexString()
          );
          await expect(
            owner.GoldenSchema.addPredicate(
              predicateID,
              getRandomBytesHexString()
            )
          ).to.be.revertedWith('Bytes16Set: key already exists in the set.');
        });
      });

      describe('user', async () => {
        it('can NOT add a predicate', async function () {
          const transaction = users[0].GoldenSchema.addPredicate(
            getRandomBytesHexString(16),
            getRandomBytesHexString()
          );
          await expect(transaction).to.be.revertedWith(
            'Ownable: caller is not the owner'
          );
        });

        it('can NOT udpate a predicate', async function () {
          const transaction = users[0].GoldenSchema.updatePredicate(
            getRandomBytesHexString(16),
            getRandomBytesHexString()
          );
          await expect(transaction).to.be.revertedWith(
            'Ownable: caller is not the owner'
          );
        });

        it('can NOT udpate a predicate', async function () {
          const transaction = users[0].GoldenSchema.removePredicate(
            getRandomBytesHexString(16)
          );
          await expect(transaction).to.be.revertedWith(
            'Ownable: caller is not the owner'
          );
        });

        it('can read predicates', async function () {
          const predicates = await GoldenSchema.predicates();
          expect(predicates).to.deep.equal(initialPredicates);
        });
      });
    });
  });
});
