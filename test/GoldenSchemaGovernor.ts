import { expect } from 'chai';
import {
  deployments,
  ethers,
  getNamedAccounts,
  getUnnamedAccounts,
  network,
} from 'hardhat';

import {
  setupUsers,
  setupUser,
  User,
  getRandomBytes32HexString,
  Contracts,
} from './utils';

describe('GoldenSchemaGovernor - ERC20 token', function () {
  let GoldenSchemaGovernor: Contracts['GoldenSchemaGovernor'];
  let GoldenSchema: Contracts['GoldenSchema'];
  let GoldenToken: Contracts['GoldenToken'];
  let owner: User<Contracts>;
  let users: User<Contracts>[];

  beforeEach(async function () {
    await deployments.fixture(['GoldenSchemaGovernor', 'GoldenSchema']);
    GoldenSchemaGovernor = await ethers.getContract('GoldenSchemaGovernor');
    GoldenSchema = await ethers.getContract('GoldenSchema');
    GoldenToken = await ethers.getContract('GoldenToken');
    const contracts: Contracts = {
      GoldenSchemaGovernor,
      GoldenSchema,
      GoldenToken,
    };
    const { deployer } = await getNamedAccounts();
    owner = await setupUser<Contracts>(deployer, contracts);
    users = await setupUsers<Contracts>(await getUnnamedAccounts(), contracts);
  });

  describe('Deployment', function () {
    it('GoldenSchemaGovernor should own the GoldenSchema contract', async function () {
      expect(await GoldenSchema.owner()).to.equal(GoldenSchemaGovernor.address);
    });

    it('GoldenSchema deployer should NOT be able to add predicate type', async function () {
      expect(await GoldenSchema.owner()).to.equal(GoldenSchemaGovernor.address);
      const predicateHash = getRandomBytes32HexString();
      const transaction = owner.GoldenSchema.addPredicate(predicateHash);
      await expect(transaction).to.be.revertedWith(
        'Ownable: caller is not the owner'
      );
    });
  });

  describe('Proposals', function () {
    it('Should allow a proposal to be submitted, voted on and executed', async function () {
      // Delegate owners's vote weight to themselves
      const delegateTransaction = await owner.GoldenToken.delegate(
        owner.address
      );
      const delegateResult = await delegateTransaction.wait();
      expect(delegateResult.status).to.equal(1);

      // Propose a new predicate
      const predicateHash = getRandomBytes32HexString();
      const transactionData = GoldenSchema.interface.encodeFunctionData(
        'addPredicate',
        [predicateHash]
      );
      const descirption = `Proposing to call: GoldenSchema.addPredicate(${predicateHash})`;
      const descriptionHash = ethers.utils.id(descirption);
      const transaction = await users[0].GoldenSchemaGovernor.propose(
        [GoldenSchema.address],
        [0],
        [transactionData],
        descirption
      );
      const result = await transaction.wait();
      expect(result.status).to.equal(1);

      const proposalId = result.events!.find(
        (event) => event.event === 'ProposalCreated'
      )!.args![0];

      expect(await owner.GoldenSchemaGovernor.state(proposalId)).to.equal(0);

      await expect(
        owner.GoldenSchemaGovernor.castVote(proposalId, 1)
      ).to.be.revertedWith('Governor: vote not currently active');

      // Wait for the voting period to start
      await network.provider.send('hardhat_mine', [
        ethers.utils.hexValue(6545),
      ]);

      expect(await owner.GoldenSchemaGovernor.state(proposalId)).to.equal(1);

      const voteTransaction = await owner.GoldenSchemaGovernor.castVote(
        proposalId,
        1
      );
      const voteResult = await voteTransaction.wait();
      expect(voteResult.status).to.equal(1);

      // Wait for the voting period to end
      await network.provider.send('hardhat_mine', [
        ethers.utils.hexValue(45818),
      ]);

      await users[0].GoldenSchemaGovernor.execute(
        [GoldenSchema.address],
        [0],
        [transactionData],
        descriptionHash
      );

      const predicates = await GoldenSchema.predicates();
      expect(predicates[predicates.length - 1]).to.deep.equal(predicateHash);
    });
  });
});
