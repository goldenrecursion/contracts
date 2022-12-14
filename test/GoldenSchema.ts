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
import initialEntityTypes from '../contracts/GoldenSchemaEntityTypes.json';
import { GoldenSchema as GoldenSchemaContract } from '../typechain/contracts';

const ownableError = 'Ownable: caller is not the owner';

type Contracts = Pick<_Contracts, 'GoldenSchema'>;

describe('GoldenSchema', function () {
  let GoldenSchema: Contracts['GoldenSchema'];
  let owner: User<Contracts>;
  let users: User<Contracts>[];

  beforeEach(async function () {
    await deployments.fixture(['GoldenSchema']);
    GoldenSchema = await ethers.getContract<GoldenSchemaContract>(
      'GoldenSchema'
    );
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

        it('can add bulk predicate', async function () {
          const newPredicates: GoldenSchemaContract.PredicateStruct[] = [
            {
              predicateID: getRandomBytesHexString(16),
              latestCID: getRandomBytesHexString(),
            },
            {
              predicateID: getRandomBytesHexString(16),
              latestCID: getRandomBytesHexString(),
            },
          ];
          await owner.GoldenSchema.bulkAddPredicates(newPredicates);
          const predicates = await GoldenSchema.predicates();
          expect(predicates[predicates.length - 2]).to.deep.equal([
            newPredicates[0].predicateID,
            newPredicates[0].latestCID,
          ]);
          const latestCID = await GoldenSchema.predicateIDToLatestCID(
            newPredicates[0].predicateID
          );
          expect(latestCID).to.equal(newPredicates[0].latestCID);
          expect(predicates[predicates.length - 1]).to.deep.equal([
            newPredicates[1].predicateID,
            newPredicates[1].latestCID,
          ]);

          const latestCID1 = await GoldenSchema.predicateIDToLatestCID(
            newPredicates[1].predicateID
          );
          expect(latestCID1).to.equal(newPredicates[1].latestCID);
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

        it('can remove predicates in bulk', async function () {
          const predixates = await GoldenSchema.predicates();
          const toRemove = [
            predixates[0][0],
            predixates[3][0],
            predixates[predixates.length - 1][0],
          ];
          await owner.GoldenSchema.bulkRemovePredicates(toRemove);
          const newPredicates = await GoldenSchema.predicates();
          // eslint-disable-next-line no-unused-expressions
          expect(newPredicates.find(([id]) => id === toRemove[0])).to.be
            .undefined;
          // eslint-disable-next-line no-unused-expressions
          expect(newPredicates.find(([id]) => id === toRemove[1])).to.be
            .undefined;
          // eslint-disable-next-line no-unused-expressions
          expect(newPredicates.find(([id]) => id === toRemove[2])).to.be
            .undefined;
          expect(newPredicates.length).to.equal(predixates.length - 3);
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
          await expect(transaction).to.be.revertedWith(ownableError);
        });

        it('can NOT udpate a predicate', async function () {
          const transaction = users[0].GoldenSchema.updatePredicate(
            getRandomBytesHexString(16),
            getRandomBytesHexString()
          );
          await expect(transaction).to.be.revertedWith(ownableError);
        });

        it('can NOT udpate a predicate', async function () {
          const transaction = users[0].GoldenSchema.removePredicate(
            getRandomBytesHexString(16)
          );
          await expect(transaction).to.be.revertedWith(ownableError);
        });
        it('can NOT bulk add predicates', async function () {
          const predicates: GoldenSchemaContract.PredicateStruct[] = [
            {
              predicateID: getRandomBytesHexString(16),
              latestCID: getRandomBytesHexString(),
            },
          ];
          const transaction =
            users[0].GoldenSchema.bulkAddPredicates(predicates);
          await expect(transaction).to.be.revertedWith(ownableError);
        });
        it('can NOT bulk remove predicates', async function () {
          const predicates: string[] = [getRandomBytesHexString(16)];
          const transaction =
            users[0].GoldenSchema.bulkRemovePredicates(predicates);
          await expect(transaction).to.be.revertedWith(ownableError);
        });
        it('can NOT bulk add entity types', async function () {
          const entityTypes: GoldenSchemaContract.EntityTypeStruct[] = [
            {
              entityTypeID: getRandomBytesHexString(16),
              latestCID: getRandomBytesHexString(),
            },
          ];
          const transaction =
            users[0].GoldenSchema.bulkAddEntityTypes(entityTypes);
          await expect(transaction).to.be.revertedWith(ownableError);
        });
        it('can NOT bulk remove entity types', async function () {
          const entityTypes: string[] = [getRandomBytesHexString(16)];
          const transaction =
            users[0].GoldenSchema.bulkRemoveEntityTypes(entityTypes);
          await expect(transaction).to.be.revertedWith(ownableError);
        });

        it('can read predicates', async function () {
          const predicates = await GoldenSchema.predicates();
          expect(predicates).to.deep.equal(initialPredicates);
        });

        it('can not add 0 predicates in bulk', async function () {
          await expect(
            owner.GoldenSchema.bulkAddPredicates([])
          ).to.be.revertedWith('bulk add 0 predicates');
        });
        it('can not remove 0 predicates in bulk', async function () {
          await expect(
            owner.GoldenSchema.bulkRemovePredicates([])
          ).to.be.revertedWith('bulk remove 0 predicates');
        });
      });
    });

    describe('entity types', () => {
      describe('owner', async () => {
        it('can add a entity type and an event is emitted', async function () {
          const entityTypeID = getRandomBytesHexString(16);
          const entityTypeCID = getRandomBytesHexString();
          await expect(
            owner.GoldenSchema.addEntityType(entityTypeID, entityTypeCID)
          )
            .to.emit(owner.GoldenSchema, 'EntityTypeAdded')
            .withArgs(entityTypeID, entityTypeCID);
          const entityTypes = await GoldenSchema.entityTypes();
          expect(entityTypes[entityTypes.length - 1]).to.deep.equal([
            entityTypeID,
            entityTypeCID,
          ]);
          const latestCID = await GoldenSchema.entityTypeIDToLatestCID(
            entityTypeID
          );
          expect(latestCID).to.equal(entityTypeCID);
        });
        it('can add entity types in bulk', async function () {
          const types: GoldenSchemaContract.EntityTypeStruct[] = [
            {
              entityTypeID: getRandomBytesHexString(16),
              latestCID: getRandomBytesHexString(),
            },
            {
              entityTypeID: getRandomBytesHexString(16),
              latestCID: getRandomBytesHexString(),
            },
          ];
          await owner.GoldenSchema.bulkAddEntityTypes(types);
          const entityTypes = await GoldenSchema.entityTypes();
          expect(entityTypes[entityTypes.length - 2]).to.deep.equal([
            types[0].entityTypeID,
            types[0].latestCID,
          ]);
          const latestCID = await GoldenSchema.entityTypeIDToLatestCID(
            types[0].entityTypeID
          );
          expect(latestCID).to.equal(types[0].latestCID);
          expect(entityTypes[entityTypes.length - 1]).to.deep.equal([
            types[1].entityTypeID,
            types[1].latestCID,
          ]);

          const latestCID1 = await GoldenSchema.entityTypeIDToLatestCID(
            types[1].entityTypeID
          );
          expect(latestCID1).to.equal(types[1].latestCID);
        });

        it('can update a entity type and an event is emitted', async function () {
          const entityTypeID = getRandomBytesHexString(16);
          const entityTypeCID = getRandomBytesHexString();
          await owner.GoldenSchema.addEntityType(
            entityTypeID,
            getRandomBytesHexString()
          );
          await expect(
            owner.GoldenSchema.updateEntityType(entityTypeID, entityTypeCID)
          )
            .to.emit(owner.GoldenSchema, 'EntityTypeUpdated')
            .withArgs(entityTypeID, entityTypeCID);
          const entityTypes = await GoldenSchema.entityTypes();
          expect(entityTypes.find(([id]) => id === entityTypeID)).to.deep.equal(
            [entityTypeID, entityTypeCID]
          );
          const latestCID = await GoldenSchema.entityTypeIDToLatestCID(
            entityTypeID
          );
          expect(latestCID).to.equal(entityTypeCID);
        });

        it('can remove a entity type and an event is emitted', async function () {
          const entityTypeID = getRandomBytesHexString(16);
          const entityTypeCID = getRandomBytesHexString();
          await owner.GoldenSchema.addEntityType(entityTypeID, entityTypeCID);
          await expect(owner.GoldenSchema.removeEntityType(entityTypeID))
            .to.emit(owner.GoldenSchema, 'EntityTypeRemoved')
            .withArgs(entityTypeID, entityTypeCID);
          const entityTypes = await GoldenSchema.entityTypes();
          // eslint-disable-next-line no-unused-expressions
          expect(entityTypes.find(([id]) => id === entityTypeID)).to.be
            .undefined;
          const latestCID = await GoldenSchema.entityTypeIDToLatestCID(
            entityTypeID
          );
          expect(latestCID).to.equal(entityTypeCID);
        });

        it('can remove entity types in bulk', async function () {
          const entityTypes = await GoldenSchema.entityTypes();
          const toRemove = [
            entityTypes[0][0],
            entityTypes[3][0],
            entityTypes[entityTypes.length - 1][0],
          ];
          await owner.GoldenSchema.bulkRemoveEntityTypes(toRemove);
          const newEntityTypes = await GoldenSchema.entityTypes();
          // eslint-disable-next-line no-unused-expressions
          expect(newEntityTypes.find(([id]) => id === toRemove[0])).to.be
            .undefined;
          // eslint-disable-next-line no-unused-expressions
          expect(newEntityTypes.find(([id]) => id === toRemove[1])).to.be
            .undefined;
          // eslint-disable-next-line no-unused-expressions
          expect(newEntityTypes.find(([id]) => id === toRemove[2])).to.be
            .undefined;
          expect(newEntityTypes.length).to.equal(entityTypes.length - 3);
        });

        it('can not add a duplicate entity type', async function () {
          const entityTypeID = getRandomBytesHexString(16);
          await owner.GoldenSchema.addEntityType(
            entityTypeID,
            getRandomBytesHexString()
          );
          await expect(
            owner.GoldenSchema.addEntityType(
              entityTypeID,
              getRandomBytesHexString()
            )
          ).to.be.revertedWith('Bytes16Set: key already exists in the set.');
        });
        it('can not add 0 entity types in bulk', async function () {
          await expect(
            owner.GoldenSchema.bulkAddEntityTypes([])
          ).to.be.revertedWith('bulk add 0 entity Types');
        });
        it('can not remove 0 entity types in bulk', async function () {
          await expect(
            owner.GoldenSchema.bulkRemoveEntityTypes([])
          ).to.be.revertedWith('bulk remove 0 entity Types');
        });
      });

      describe('user', async () => {
        it('can NOT add a entity type', async function () {
          const transaction = users[0].GoldenSchema.addEntityType(
            getRandomBytesHexString(16),
            getRandomBytesHexString()
          );
          await expect(transaction).to.be.revertedWith(
            'Ownable: caller is not the owner'
          );
        });

        it('can NOT update a entity type', async function () {
          const transaction = users[0].GoldenSchema.updateEntityType(
            getRandomBytesHexString(16),
            getRandomBytesHexString()
          );
          await expect(transaction).to.be.revertedWith(
            'Ownable: caller is not the owner'
          );
        });

        it('can NOT update a entity type', async function () {
          const transaction = users[0].GoldenSchema.removeEntityType(
            getRandomBytesHexString(16)
          );
          await expect(transaction).to.be.revertedWith(
            'Ownable: caller is not the owner'
          );
        });

        it('can read entity types', async function () {
          const entityTypes = await GoldenSchema.entityTypes();
          expect(entityTypes).to.deep.equal(initialEntityTypes);
        });
      });
    });
  });
});
