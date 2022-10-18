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
import { QuestionCreatedEvent } from '../typechain/contracts/GoldenProtocol.sol/GoldenProtocol';
import { AnswerAddedEvent } from '../typechain/contracts/GoldenProtocol.sol/GoldenProtocolQuestion';
import { GoldenToken as GoldenTokenContract } from '../typechain/';

type Contracts = Pick<
  _Contracts,
  'GoldenProtocol' | 'GoldenProtocolQuestion' | 'GoldenToken'
>;

describe('GoldenProtocol', function () {
  let GoldenProtocol: Contracts['GoldenProtocol'];
  let GoldenToken: Contracts['GoldenToken'];
  let owner: User<Contracts>;
  let users: User<Contracts>[];
  let asker: User<Contracts>;
  let answerer: User<Contracts>;
  let verifier: User<Contracts>;
  const answer = 'Profound truth';

  beforeEach(async function () {
    await deployments.fixture(['GoldenProtocol']);
    GoldenProtocol = await ethers.getContract<GoldenProtocolContract>(
      'GoldenProtocol'
    );
    GoldenToken = await ethers.getContract<GoldenTokenContract>('GoldenToken');
    const contracts = { GoldenProtocol, GoldenToken };
    const { deployer } = await getNamedAccounts();
    owner = await setupUser(deployer, contracts);
    users = await setupUsers(await getUnnamedAccounts(), contracts);
    asker = users[0];
    answerer = users[1];
    verifier = users[2];
  });

  describe('Deployment', function () {
    it('Should have correct owner', async function () {
      expect(await GoldenProtocol.owner()).to.equal(owner.address);
    });
  });

  describe('Question', function () {
    const subjectUUID = getRandomBytesHexString(16);
    const predicateUUID = getRandomBytesHexString(16);
    const bounty = ethers.BigNumber.from(10);
    let GoldenProtocolQuestion: NonNullable<
      Contracts['GoldenProtocolQuestion']
    >;

    beforeEach(async function () {
      // Create question
      const anskerBalanceBefore = await GoldenToken.balanceOf(asker.address);
      await asker.GoldenToken.approve(GoldenProtocol.address, bounty);
      const transactionQuestion = await asker.GoldenProtocol.createQuestion(
        subjectUUID,
        predicateUUID,
        bounty
      );
      const result = await transactionQuestion.wait();
      expect(result.status).to.equal(1);
      expect(await GoldenToken.balanceOf(asker.address)).to.equal(
        anskerBalanceBefore.sub(bounty)
      );
      const createQuestionEvent = (
        await GoldenProtocol.queryFilter<QuestionCreatedEvent>(
          GoldenProtocol.filters.QuestionCreated()
        )
      )[0];
      GoldenProtocolQuestion =
        await ethers.getContractAt<GoldenProtocolQuestionContract>(
          'GoldenProtocolQuestion',
          createQuestionEvent.args.questionAddress
        );
      expect(
        await GoldenToken.balanceOf(createQuestionEvent.args.questionAddress)
      ).to.equal(bounty);
    });

    it('emits event when question is created', async function () {
      const createQuestionEvent = (
        await GoldenProtocol.queryFilter<QuestionCreatedEvent>(
          GoldenProtocol.filters.QuestionCreated()
        )
      )[0];
      expect(createQuestionEvent.args.subjectUUID).to.equal(subjectUUID);
      expect(createQuestionEvent.args.predicateUUID).to.equal(predicateUUID);
    });

    it('has correct and accessible state', async function () {
      expect(await GoldenProtocolQuestion.owner()).to.equal(
        GoldenProtocol.address
      );
      expect(await GoldenProtocolQuestion.asker()).to.equal(asker.address);
      expect(await GoldenProtocolQuestion.subjectUUID()).to.equal(subjectUUID);
      expect(await GoldenProtocolQuestion.predicateUUID()).to.equal(
        predicateUUID
      );
      expect(await GoldenProtocolQuestion.bounty()).to.equal(bounty);
    });

    describe('Answer', function () {
      async function upvote() {
        const transactionVote = await GoldenProtocolQuestion.connect(
          await ethers.getSigner(verifier.address)
        ).upvote(0);
        const resultVote = await transactionVote.wait();
        expect(resultVote.status).to.equal(1);
      }

      beforeEach(async function () {
        // Create answer
        const transactionAnswer = await GoldenProtocolQuestion.connect(
          await ethers.getSigner(answerer.address)
        ).addAnswer(answer);
        const resultAnswer = await transactionAnswer.wait();
        expect(resultAnswer.status).to.equal(1);
      });

      it('emits event when answer is added', async function () {
        expect(await GoldenProtocolQuestion.answers()).to.deep.equal([
          [answerer.address, answer, ethers.BigNumber.from(0)],
        ]);
        const addAnswerEvent = (
          await GoldenProtocolQuestion.queryFilter<AnswerAddedEvent>(
            GoldenProtocolQuestion.filters.AnswerAdded()
          )
        )[0];
        expect(addAnswerEvent.args.subjectUUID).to.equal(subjectUUID);
        expect(addAnswerEvent.args.predicateUUID).to.equal(predicateUUID);
        expect(addAnswerEvent.args.answer).to.equal(answer);
        expect(addAnswerEvent.args.index).to.equal(ethers.BigNumber.from(0));
      });

      it('can be voted on', async function () {
        await upvote();
        const topAnswer = await GoldenProtocolQuestion.topAnswer();
        expect(topAnswer.answerer).to.equal(answerer.address);
        expect(topAnswer.answer).to.equal(answer);
        expect(topAnswer.voteCount).to.equal(ethers.BigNumber.from(1));
      });

      it('can not be voted on multiple times', async function () {
        await upvote();
        expect(
          GoldenProtocolQuestion.connect(
            await ethers.getSigner(verifier.address)
          ).upvote(0)
        ).to.be.revertedWith('GoldenProtocolQuestion: you have already voted');
      });

      it('can not be payed out without enough votes', async function () {
        await upvote();
        expect(
          GoldenProtocolQuestion.connect(
            await ethers.getSigner(asker.address)
          ).payout()
        ).to.be.revertedWith(
          'GoldenProtocolQuestion: payout: minimumVotes not met'
        );
      });

      it('can be payed out', async function () {
        await upvote();
        expect(asker.GoldenProtocol.setMinimumVotes(1)).to.be.revertedWith(
          'Ownable: caller is not the owner'
        );
        await owner.GoldenProtocol.setMinimumVotes(1);
        const answererBalanceBefore = await GoldenToken.balanceOf(
          answerer.address
        );
        const transactionPayout = await GoldenProtocolQuestion.connect(
          await ethers.getSigner(asker.address)
        ).payout();
        const resultPayout = await transactionPayout.wait();
        expect(resultPayout.status).to.equal(1);
        expect(
          await GoldenToken.balanceOf(GoldenProtocolQuestion.address)
        ).to.equal(0);
        expect(await GoldenToken.balanceOf(answerer.address)).to.equal(
          answererBalanceBefore.add(bounty)
        );
      });
    });
  });
});
