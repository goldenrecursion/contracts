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
  getRandomBytes32HexString,
  Contracts as _Contracts,
  testSchema,
} from './utils';

type Contracts = Pick<_Contracts, 'GoldenSchema'>;

describe('GoldenSchema', function () {
  let GoldenSchema: Contracts['GoldenSchema'];
  let owner: User<Contracts>;
  let users: User<Contracts>[];

  beforeEach(async function () {
    await deployments.fixture(['GoldenSchema']);
    GoldenSchema = await ethers.getContract('GoldenSchema');
    const GoldenSchemas = { GoldenSchema: GoldenSchema };
    const { deployer } = await getNamedAccounts();
    owner = await setupUser<Contracts>(deployer, GoldenSchemas);
    users = await setupUsers<Contracts>(
      await getUnnamedAccounts(),
      GoldenSchemas
    );
  });

  describe('Deployment', function () {
    it('Should have correct owner', async function () {
      expect(await GoldenSchema.owner()).to.equal(owner.address);
    });

    it('Should have correct initial state', async function () {
      const predicates = await GoldenSchema.predicates();
      expect(predicates).to.deep.equal(testSchema.predicates);

      const entityTypes = await GoldenSchema.entityTypes();
      expect(entityTypes).to.deep.equal(testSchema.entityTypes);

      for (const entityType of entityTypes) {
        const predicatesByEntityType = testSchema.predicatesByEntityTypes.find(
          ([_entityType]) => entityType === _entityType
        )!;
        const predicates = predicatesByEntityType[1];
        expect(
          await GoldenSchema.predicatesByEntityType(entityType)
        ).to.deep.equal(predicates);
      }

      const predicatesByEntityTypes =
        await GoldenSchema.predicatesByEntityTypes();
      expect(predicatesByEntityTypes).to.deep.equal(
        testSchema.predicatesByEntityTypes
      );
    });
  });

  describe('Schema', function () {
    describe('predicates', () => {
      it('owner can add a predicate', async function () {
        const predicateHash = getRandomBytes32HexString();
        await owner.GoldenSchema.addPredicate(predicateHash);
        const predicates = await GoldenSchema.predicates();
        expect(predicates[predicates.length - 1]).to.deep.equal(predicateHash);
      });

      it('non-owner can not add a predicate', async function () {
        const predicateHash = getRandomBytes32HexString();
        const transaction = users[0].GoldenSchema.addPredicate(predicateHash);
        await expect(transaction).to.be.revertedWith(
          'Ownable: caller is not the owner'
        );
      });

      it('can not add a duplicate predicate', async function () {
        const predicateHash = getRandomBytes32HexString();
        await owner.GoldenSchema.addPredicate(predicateHash);
        await expect(
          owner.GoldenSchema.addPredicate(predicateHash)
        ).to.be.revertedWith('Bytes32Set: key already exists in the set.');
      });

      it('anyone can read current predicates', async function () {
        const predicates = await GoldenSchema.predicates();
        expect(predicates).to.deep.equal(testSchema.predicates);
      });
    });

    describe('entity types', () => {
      it('owner can add an entity type', async function () {
        const hash = getRandomBytes32HexString();
        await owner.GoldenSchema.addEntityType(hash);
        const entityTypes = await GoldenSchema.entityTypes();
        expect(entityTypes[entityTypes.length - 1]).to.deep.equal(hash);
      });

      it('non-owner can not add an entity type', async function () {
        const hash = getRandomBytes32HexString();
        const transaction = users[0].GoldenSchema.addEntityType(hash);
        await expect(transaction).to.be.revertedWith(
          'Ownable: caller is not the owner'
        );
      });

      it('can not add a duplicate entity type', async function () {
        const predicateHash = getRandomBytes32HexString();
        await owner.GoldenSchema.addEntityType(predicateHash);
        await expect(
          owner.GoldenSchema.addEntityType(predicateHash)
        ).to.be.revertedWith('Bytes32Set: key already exists in the set.');
      });

      it('anyone can read current entity types', async function () {
        const entityTypes = await GoldenSchema.entityTypes();
        expect(entityTypes).to.deep.equal(testSchema.entityTypes);
      });
    });
  });
});
