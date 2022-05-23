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
} from './utils';

import type { GoldenSchema } from '../typechain/GoldenSchema';

describe('GoldenSchema', function () {
  let contract: GoldenSchema;
  let owner: User<{ GoldenSchema: GoldenSchema }>;
  let users: User<{ GoldenSchema: GoldenSchema }>[];

  beforeEach(async function () {
    await deployments.fixture(['GoldenSchema']);
    contract = await ethers.getContract('GoldenSchema');
    const contracts = { GoldenSchema: contract };
    const { deployer } = await getNamedAccounts();
    owner = await setupUser<typeof contracts>(deployer, contracts);
    users = await setupUsers<typeof contracts>(
      await getUnnamedAccounts(),
      contracts
    );
  });

  describe('Deployment', function () {
    it('Should have correct owner', async function () {
      expect(await contract.owner()).to.equal(owner.address);
    });
  });

  describe('Schema', function () {
    describe('predicates', () => {
      it('owner can add a predicate', async function () {
        const predicateHash = getRandomBytes32HexString();
        await owner.GoldenSchema.addPredicate(predicateHash);
        expect(await contract.predicates()).to.deep.equal([predicateHash]);
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
        const predicateHash = getRandomBytes32HexString();
        await owner.GoldenSchema.addPredicate(predicateHash);
        expect(await users[0].GoldenSchema.predicates()).to.deep.equal([
          predicateHash,
        ]);
      });
    });

    describe('entity types', () => {
      it('owner can add an entity type', async function () {
        const hash = getRandomBytes32HexString();
        await owner.GoldenSchema.addEntityType(hash);
        expect(await contract.entityTypes()).to.deep.equal([hash]);
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
        const predicateHash = getRandomBytes32HexString();
        await owner.GoldenSchema.addEntityType(predicateHash);
        expect(await users[0].GoldenSchema.entityTypes()).to.deep.equal([
          predicateHash,
        ]);
      });
    });
  });
});
