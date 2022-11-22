import { expect } from 'chai';
import {
  deployments,
  ethers,
  getNamedAccounts,
  getUnnamedAccounts,
  network,
} from 'hardhat';

import { setupUsers, setupUser, User, Contracts as _Contracts } from './utils';
import getRandomBytesHexString from './utils/getRandomBytesHexString';
import { QUORUM_NUMERATOR_VALUE } from '../deploy/2_GoldenSchemaGovernor';
import { INITIAL_SUPPLY } from '../deploy/3_GoldenToken';

type Contracts = Omit<_Contracts, 'LockedStaking'>;

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
    const contracts: Omit<Contracts, 'LockedStaking'> = {
      GoldenSchemaGovernor,
      GoldenSchema,
      GoldenToken,
    };
    const { deployer } = await getNamedAccounts();
    owner = await setupUser(deployer, contracts);
    users = await setupUsers(await getUnnamedAccounts(), contracts);
  });

  describe('Deployment', function () {
    it('GoldenSchemaGovernor should own the GoldenSchema contract', async function () {
      expect(await GoldenSchema.owner()).to.equal(GoldenSchemaGovernor.address);
    });

    it('GoldenSchema deployer should NOT be able to add predicate type', async function () {
      expect(await GoldenSchema.owner()).to.equal(GoldenSchemaGovernor.address);
      await expect(
        owner.GoldenSchema.addPredicate(
          getRandomBytesHexString(16),
          getRandomBytesHexString()
        )
      ).to.be.revertedWith('Ownable: caller is not the owner');
    });
  });

  describe('Proposals', function () {
    it('Should allow a proposal to be submitted, voted on and executed with quorum', async function () {
      const [proposalUser, votingUser] = users;

      const delegateTransaction = await votingUser.GoldenToken.delegate(
        votingUser.address
      );
      const delegateResult = await delegateTransaction.wait();
      expect(delegateResult.status).to.equal(1);

      const votingUserBalance = await owner.GoldenToken.balanceOf(
        votingUser.address
      );
      await owner.GoldenToken.transfer(
        votingUser.address,
        INITIAL_SUPPLY.mul(QUORUM_NUMERATOR_VALUE)
          .div(100)
          .sub(votingUserBalance)
      );

      // Propose a new predicate
      const predicateID = getRandomBytesHexString(16);
      const predicateCID = getRandomBytesHexString();
      const transactionData = GoldenSchema.interface.encodeFunctionData(
        'addPredicate',
        [predicateID, predicateCID]
      );
      const description = `Proposing to call: GoldenSchema.addPredicate(${predicateID}, ${predicateCID})`;
      const descriptionHash = ethers.utils.id(description);
      const transaction = await proposalUser.GoldenSchemaGovernor.propose(
        [GoldenSchema.address],
        [0],
        [transactionData],
        description
      );
      const result = await transaction.wait();
      expect(result.status).to.equal(1);

      const proposalId = result.events!.find(
        (event) => event.event === 'ProposalCreated'
      )!.args![0];

      // We need to wait at least one block for the voting to start
      await network.provider.send('hardhat_mine', [ethers.utils.hexValue(1)]);
      expect(await owner.GoldenSchemaGovernor.state(proposalId)).to.equal(1);

      const voteTransaction = await votingUser.GoldenSchemaGovernor.castVote(
        proposalId,
        1
      );
      const voteResult = await voteTransaction.wait();
      expect(voteResult.status).to.equal(1);

      // Wait for the voting period to end
      await network.provider.send('hardhat_mine', [ethers.utils.hexValue(10)]);

      await users[0].GoldenSchemaGovernor.execute(
        [GoldenSchema.address],
        [0],
        [transactionData],
        descriptionHash
      );

      const predicates = await GoldenSchema.predicates();
      expect(predicates[predicates.length - 1]).to.deep.equal([
        predicateID,
        predicateCID,
      ]);
    });
  });

  it('should not allow a proposal to be executed if no quorum', async function () {
    const [proposalUser, votingUser] = users;

    const delegateTransaction = await votingUser.GoldenToken.delegate(
      votingUser.address
    );
    const delegateResult = await delegateTransaction.wait();
    expect(delegateResult.status).to.equal(1);

    const votingUserBalance = await owner.GoldenToken.balanceOf(
      votingUser.address
    );
    await owner.GoldenToken.transfer(
      votingUser.address,
      INITIAL_SUPPLY.mul(QUORUM_NUMERATOR_VALUE - 1)
        .div(100)
        .sub(votingUserBalance)
    );

    // Propose a new predicate
    const predicateID = getRandomBytesHexString(16);
    const predicateCID = getRandomBytesHexString();
    const transactionData = GoldenSchema.interface.encodeFunctionData(
      'addPredicate',
      [predicateID, predicateCID]
    );
    const description = `Proposing to call: GoldenSchema.addPredicate(${predicateID}, ${predicateCID})`;
    const descriptionHash = ethers.utils.id(description);
    const transaction = await proposalUser.GoldenSchemaGovernor.propose(
      [GoldenSchema.address],
      [0],
      [transactionData],
      description
    );
    const result = await transaction.wait();
    expect(result.status).to.equal(1);

    const proposalId = result.events!.find(
      (event) => event.event === 'ProposalCreated'
    )!.args![0];

    // We need to wait at least one block for the voting to start
    await network.provider.send('hardhat_mine', [ethers.utils.hexValue(1)]);
    expect(await owner.GoldenSchemaGovernor.state(proposalId)).to.equal(1);
    const voteTransaction = await votingUser.GoldenSchemaGovernor.castVote(
      proposalId,
      1
    );
    const voteResult = await voteTransaction.wait();
    expect(voteResult.status).to.equal(1);

    // Wait for the voting period to end
    await network.provider.send('hardhat_mine', [ethers.utils.hexValue(10)]);

    await expect(
      proposalUser.GoldenSchemaGovernor.execute(
        [GoldenSchema.address],
        [0],
        [transactionData],
        descriptionHash
      )
    ).to.be.revertedWith('Governor: proposal not successful');
  });
});
