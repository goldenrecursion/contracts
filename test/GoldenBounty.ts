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
  GoldenBounty as GoldenBountyContract,
  GoldenBountyQuestion as GoldenBountyQuestionContract,
} from '../typechain/contracts/GoldenBounty.sol';
import { QuestionCreatedEvent } from '../typechain/contracts/GoldenBounty.sol/GoldenBounty';
import { AnswerAddedEvent } from '../typechain/contracts/GoldenBounty.sol/GoldenBountyQuestion';
import { GoldenToken as GoldenTokenContract } from '../typechain/';

type Contracts = Pick<
  _Contracts,
  'GoldenBounty' | 'GoldenBountyQuestion' | 'GoldenToken'
>;

describe('GoldenBounty', function () {
  let GoldenBounty: Contracts['GoldenBounty'];
  let GoldenToken: Contracts['GoldenToken'];
  let owner: User<Contracts>;
  let users: User<Contracts>[];
  let asker: User<Contracts>;
  let answerer: User<Contracts>;
  let verifier: User<Contracts>;
  const answer = 'Profound truth';

  beforeEach(async function () {
    await deployments.fixture(['GoldenBounty']);
    GoldenBounty = await ethers.getContract<GoldenBountyContract>(
      'GoldenBounty'
    );
    GoldenToken = await ethers.getContract<GoldenTokenContract>('GoldenToken');
    const contracts = { GoldenBounty, GoldenToken };
    const { deployer } = await getNamedAccounts();
    owner = await setupUser(deployer, contracts);
    users = await setupUsers(await getUnnamedAccounts(), contracts);
    asker = users[0];
    answerer = users[1];
    verifier = users[2];
  });

  describe('Deployment', function () {
    it('Should have correct owner', async function () {
      expect(await GoldenBounty.owner()).to.equal(owner.address);
    });
  });

  describe('Question', function () {
    const subjectUUID = getRandomBytesHexString(16);
    const predicateUUID = getRandomBytesHexString(16);
    const bounty = ethers.utils.parseUnits('10', 18);
    let GoldenBountyQuestion: NonNullable<Contracts['GoldenBountyQuestion']>;

    beforeEach(async function () {
      // Create question
      const anskerBalanceBefore = await GoldenToken.balanceOf(asker.address);
      await asker.GoldenToken.approve(GoldenBounty.address, bounty);
      const transactionQuestion = await asker.GoldenBounty.createQuestion(
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
        await GoldenBounty.queryFilter<QuestionCreatedEvent>(
          GoldenBounty.filters.QuestionCreated()
        )
      )[0];
      GoldenBountyQuestion =
        await ethers.getContractAt<GoldenBountyQuestionContract>(
          'GoldenBountyQuestion',
          createQuestionEvent.args.questionAddress
        );
      expect(
        await GoldenToken.balanceOf(createQuestionEvent.args.questionAddress)
      ).to.equal(bounty);
    });

    it('emits event when question is created', async function () {
      const createQuestionEvent = (
        await GoldenBounty.queryFilter<QuestionCreatedEvent>(
          GoldenBounty.filters.QuestionCreated()
        )
      )[0];
      expect(createQuestionEvent.args.subjectUUID).to.equal(subjectUUID);
      expect(createQuestionEvent.args.predicateUUID).to.equal(predicateUUID);
    });

    it('has correct and accessible state', async function () {
      expect(await GoldenBountyQuestion.owner()).to.equal(GoldenBounty.address);
      expect(await GoldenBountyQuestion.asker()).to.equal(asker.address);
      expect(await GoldenBountyQuestion.subjectUUID()).to.equal(subjectUUID);
      expect(await GoldenBountyQuestion.predicateUUID()).to.equal(
        predicateUUID
      );
      expect(await GoldenBountyQuestion.bounty()).to.equal(bounty);
    });

    describe('Answer', function () {
      async function upvote() {
        const transactionVote = await GoldenBountyQuestion.connect(
          await ethers.getSigner(verifier.address)
        ).vote(0, true);
        const resultVote = await transactionVote.wait();
        expect(resultVote.status).to.equal(1);
      }

      beforeEach(async function () {
        // Create answer
        const transactionAnswer = await GoldenBountyQuestion.connect(
          await ethers.getSigner(answerer.address)
        ).addAnswer(answer);
        const resultAnswer = await transactionAnswer.wait();
        expect(resultAnswer.status).to.equal(1);
      });

      it('emits event when answer is added', async function () {
        expect(await GoldenBountyQuestion['answers()']()).to.deep.equal([
          [answer, answerer.address, [], []],
        ]);
        const addAnswerEvent = (
          await GoldenBountyQuestion.queryFilter<AnswerAddedEvent>(
            GoldenBountyQuestion.filters.AnswerAdded()
          )
        )[0];
        expect(addAnswerEvent.args.subjectUUID).to.equal(subjectUUID);
        expect(addAnswerEvent.args.predicateUUID).to.equal(predicateUUID);
        expect(addAnswerEvent.args.answer).to.equal(answer);
        expect(addAnswerEvent.args.index).to.equal(ethers.BigNumber.from(0));
      });

      it('can be voted on', async function () {
        await upvote();
        const topAnswer = await GoldenBountyQuestion.topAnswer();
        expect(topAnswer.answerer).to.equal(answerer.address);
        expect(topAnswer.answer).to.equal(answer);
        expect(topAnswer.yesVoters).to.deep.equal([verifier.address]);
        expect(topAnswer.noVoters).to.deep.equal([]);
      });

      it('can not be voted on multiple times', async function () {
        await upvote();
        expect(
          GoldenBountyQuestion.connect(
            await ethers.getSigner(verifier.address)
          ).vote(0, true)
        ).to.be.revertedWith('GoldenBountyQuestion: you have already voted');
      });

      it('can not be payed out without enough votes', async function () {
        await upvote();
        expect(
          GoldenBountyQuestion.connect(
            await ethers.getSigner(asker.address)
          ).payout()
        ).to.be.revertedWith(
          'GoldenBountyQuestion: payout: minimumVotes not met'
        );
      });

      it('can be payed out', async function () {
        await upvote();
        expect(asker.GoldenBounty.setMinimumVotes(1)).to.be.revertedWith(
          'Ownable: caller is not the owner'
        );
        await owner.GoldenBounty.setMinimumVotes(1);
        const answererBalanceBefore = await GoldenToken.balanceOf(
          answerer.address
        );
        const verifierBalanceBefore = await GoldenToken.balanceOf(
          verifier.address
        );
        const contractBalanceBefore = await GoldenToken.balanceOf(
          GoldenBounty.address
        );
        const transactionPayout = await GoldenBountyQuestion.connect(
          await ethers.getSigner(asker.address)
        ).payout();
        const resultPayout = await transactionPayout.wait();
        expect(resultPayout.status).to.equal(1);
        expect(
          await GoldenToken.balanceOf(GoldenBountyQuestion.address)
        ).to.equal(0);
        expect(await GoldenToken.balanceOf(answerer.address)).to.equal(
          answererBalanceBefore.add(bounty.div(10).mul(6))
        );
        expect(await GoldenToken.balanceOf(verifier.address)).to.equal(
          verifierBalanceBefore.add(bounty.div(10).mul(3))
        );
        expect(await GoldenToken.balanceOf(GoldenBounty.address)).to.equal(
          contractBalanceBefore.add(bounty.div(10))
        );
      });
    });
  });
});
