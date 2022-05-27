import { expect } from 'chai';
import {
  deployments,
  ethers,
  getNamedAccounts,
  getUnnamedAccounts,
} from 'hardhat';

import {
  setupUsers,
  setupUser,
  User,
  testSchema,
  Contracts as _Contracts,
} from './utils';
import getRandomBytes32HexString from './utils/getRandomBytes32HexString';

type Contracts = Pick<_Contracts, 'GoldenSchema'>;

describe('GoldenSchema', function () {
  let GoldenSchema: Contracts['GoldenSchema'];
  let owner: User<Contracts>;
  let users: User<Contracts>[];

  beforeEach(async function () {
    await deployments.fixture(['GoldenSchema']);
    GoldenSchema = await ethers.getContract('GoldenSchema');
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
      expect(predicates).to.deep.equal(testSchema.predicates);
    });
  });

  describe('Schema', function () {
    describe('predicates', () => {
      describe('owner', async () => {
        it('can add a predicate and an event is emitted', async function () {
          const predicateID = getRandomBytes32HexString();
          const predicateCID = getRandomBytes32HexString();
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
          const latestCID = await GoldenSchema.getPredicateLatestCID(
            predicateID
          );
          expect(latestCID).to.equal(predicateCID);
        });

        it('can udpate a predicate and an event is emitted', async function () {
          const predicateID = getRandomBytes32HexString();
          const predicateCID = getRandomBytes32HexString();
          await owner.GoldenSchema.addPredicate(
            predicateID,
            getRandomBytes32HexString()
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
          const latestCID = await GoldenSchema.getPredicateLatestCID(
            predicateID
          );
          expect(latestCID).to.equal(predicateCID);
        });

        it('can remove a predicate and an event is emitted', async function () {
          const predicateID = getRandomBytes32HexString();
          const predicateCID = getRandomBytes32HexString();
          await owner.GoldenSchema.addPredicate(predicateID, predicateCID);
          await expect(owner.GoldenSchema.removePredicate(predicateID))
            .to.emit(owner.GoldenSchema, 'PredicateRemoved')
            .withArgs(predicateID, predicateCID);
          const predicates = await GoldenSchema.predicates();
          expect(predicates.find(([id]) => id === predicateID)).to.be.undefined;
          const latestCID = await GoldenSchema.getPredicateLatestCID(
            predicateID
          );
          expect(latestCID).to.equal(predicateCID);
        });

        it('can not add a duplicate predicate', async function () {
          const predicateID = getRandomBytes32HexString();
          await owner.GoldenSchema.addPredicate(
            predicateID,
            getRandomBytes32HexString()
          );
          await expect(
            owner.GoldenSchema.addPredicate(
              predicateID,
              getRandomBytes32HexString()
            )
          ).to.be.revertedWith('Bytes32Set: key already exists in the set.');
        });
      });

      describe('user', async () => {
        it('can NOT add a predicate', async function () {
          const transaction = users[0].GoldenSchema.addPredicate(
            getRandomBytes32HexString(),
            getRandomBytes32HexString()
          );
          await expect(transaction).to.be.revertedWith(
            'Ownable: caller is not the owner'
          );
        });

        it('can NOT udpate a predicate', async function () {
          const transaction = users[0].GoldenSchema.updatePredicate(
            getRandomBytes32HexString(),
            getRandomBytes32HexString()
          );
          await expect(transaction).to.be.revertedWith(
            'Ownable: caller is not the owner'
          );
        });

        it('can NOT udpate a predicate', async function () {
          const transaction = users[0].GoldenSchema.removePredicate(
            getRandomBytes32HexString()
          );
          await expect(transaction).to.be.revertedWith(
            'Ownable: caller is not the owner'
          );
        });

        it('can read predicates', async function () {
          const predicates = await GoldenSchema.predicates();
          expect(predicates).to.deep.equal(testSchema.predicates);
        });
      });
    });
  });
});
