import { expect } from 'chai';
import {
  deployments,
  ethers,
  getNamedAccounts,
  getUnnamedAccounts,
} from 'hardhat';

import { setupUsers, setupUser, User, Contracts as _Contracts } from './utils';
import getRandomBytesHexString from './utils/getRandomBytesHexString';
import {
  GoldenProtocol as GoldenProtocolContract,
  GoldenProtocolQuestion as GoldenProtocolQuestionContract,
} from '../typechain/contracts/GoldenProtocol.sol';

type Contracts = Pick<_Contracts, 'GoldenProtocol'>;

describe('GoldenProtocol', function () {
  let GoldenProtocol: Contracts['GoldenProtocol'];
  let owner: User<Contracts>;
  let users: User<Contracts>[];

  beforeEach(async function () {
    await deployments.fixture(['GoldenProtocol']);
    GoldenProtocol = await ethers.getContract<GoldenProtocolContract>(
      'GoldenProtocol'
    );
    const contracts = { GoldenProtocol };
    const { deployer } = await getNamedAccounts();
    owner = await setupUser(deployer, contracts);
    users = await setupUsers(await getUnnamedAccounts(), contracts);
  });

  describe('Deployment', function () {
    it('Should have correct owner', async function () {
      expect(await GoldenProtocol.owner()).to.equal(owner.address);
    });
  });

  describe('Protocol', function () {
    it('asker can ask a question, answerer can answer, verifier can vote', async function () {
      const subjectUUID = getRandomBytesHexString(16);
      const predicateUUID = getRandomBytesHexString(16);
      const bounty = 10;
      const answer = 'Profound truth';

      const asker = users[0];
      const answerer = users[1];
      const verifier = users[2];

      // Ask question
      const transactionQuestion = await asker.GoldenProtocol.createQuestion(
        subjectUUID,
        predicateUUID,
        bounty
      );
      const resultQuestion = await transactionQuestion.wait();
      expect(resultQuestion.status).to.equal(1);

      // Answer it
      const questionAddresses = await answerer.GoldenProtocol.questions();
      console.log({ questionAddresses });
      const GoldenProtocolQuestionAnswerer =
        await ethers.getContractAt<GoldenProtocolQuestionContract>(
          'GoldenProtocolQuestion',
          questionAddresses[0],
          answerer.address
        );
      expect(await GoldenProtocolQuestionAnswerer.owner()).to.equal(
        GoldenProtocol.address
      );
      expect(await GoldenProtocolQuestionAnswerer.asker()).to.equal(
        asker.address
      );
      expect(await GoldenProtocolQuestionAnswerer.subjectUUID()).to.equal(
        subjectUUID
      );
      expect(await GoldenProtocolQuestionAnswerer.predicateUUID()).to.equal(
        predicateUUID
      );
      expect(await GoldenProtocolQuestionAnswerer.bounty()).to.equal(bounty);
      const transactionAnswer = await GoldenProtocolQuestionAnswerer.addAnswer(
        answer
      );
      const resultAnswer = await transactionAnswer.wait();
      expect(resultAnswer.status).to.equal(1);

      // Verify it
      const GoldenProtocolQuestionVerifier =
        await ethers.getContractAt<GoldenProtocolQuestionContract>(
          'GoldenProtocolQuestion',
          questionAddresses[0],
          verifier.address
        );
      expect(await GoldenProtocolQuestionVerifier.answers()).to.deep.equal([
        answer,
      ]);
      const transactionVote = await GoldenProtocolQuestionVerifier.upvote(0);
      const resultVote = await transactionVote.wait();
      expect(resultVote.status).to.equal(1);
    });
  });
});
