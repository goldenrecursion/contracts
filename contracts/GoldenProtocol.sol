// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol';

import './GoldenToken.sol';
import './libraries/AddressSet.sol';

/// @custom:security-contact security@golden.com
contract GoldenProtocol is Ownable {
    using SafeERC20Upgradeable for GoldenToken;
    GoldenToken tokenContract;
    uint256 public minimumVotes;

    event QuestionCreated(
        address indexed questionAddress,
        bytes16 subjectUUID,
        bytes16 predicateUUID
    );

    constructor(address goldenTokenAddress, uint256 _minimumVotes) Ownable() {
        tokenContract = GoldenToken(goldenTokenAddress);
        minimumVotes = _minimumVotes;
    }

    function setMinimumVotes(uint256 _minimumVotes) public onlyOwner {
        minimumVotes = _minimumVotes;
    }

    function createQuestion(
        bytes16 subjectUUID,
        bytes16 predicateUUID,
        uint256 bounty
    ) public returns (address) {
        require(
            tokenContract.allowance(_msgSender(), address(this)) >= bounty,
            'GoldenProtocol: insufficient allowance'
        );

        // TODO: Creating new contracts is going to be very expensive.
        // Is there a cheaper alternative to encapsulate the question logic?
        GoldenProtocolQuestion newQuestion = new GoldenProtocolQuestion(
            address(tokenContract),
            msg.sender,
            subjectUUID,
            predicateUUID
        );
        address newQuestionAddress = address(newQuestion);
        tokenContract.safeTransferFrom(
            _msgSender(),
            newQuestionAddress,
            bounty
        );
        emit QuestionCreated(newQuestionAddress, subjectUUID, predicateUUID);
        return newQuestionAddress;
    }
}

contract GoldenProtocolQuestion is Ownable {
    using SafeERC20Upgradeable for GoldenToken;
    GoldenToken tokenContract;

    using AddressSet for AddressSet.Set;

    address public asker;
    bytes16 public subjectUUID;
    bytes16 public predicateUUID;
    string public answer;

    AddressSet.Set answerers;
    AddressSet.Set verifiers;

    // Mapping of answerer address to their answer
    mapping(address => string) answerByAnswerer;

    // Mapping of voter address to the index of an answer
    mapping(address => uint256) answerIndexByVerifier;

    // Mapping of answerer address to their vote count (score)
    mapping(address => uint256) voteCountByAnswerer;

    // Helper struct for consensus/payout algorithms
    struct Answer {
        address answerer;
        string answer;
        uint256 voteCount;
    }

    event AnswerAdded(
        bytes16 subjectUUID,
        bytes16 predicateUUID,
        string answer,
        uint256 index
    );

    constructor(
        address goldenTokenAddress,
        address _asker,
        bytes16 _subjectUUID,
        bytes16 _predicateUUID
    ) Ownable() {
        require(
            _asker != address(0),
            'GoldenProtocolQuestion: asker is the zero address'
        );
        tokenContract = GoldenToken(goldenTokenAddress);
        asker = _asker;
        subjectUUID = _subjectUUID;
        predicateUUID = _predicateUUID;
    }

    modifier onlyAsker() {
        require(msg.sender == asker, 'GoldenProtocolQuestion: onlyAsker');
        _;
    }

    function bounty() public view returns (uint256) {
        return tokenContract.balanceOf(address(this));
    }

    function addAnswer(string calldata _answer) public {
        require(
            bytes(_answer).length > 0,
            'GoldenProtocolQuestion: answer is empty'
        );

        address answerer = msg.sender;
        answerByAnswerer[answerer] = _answer;
        answerers.upsert(answerer);
        voteCountByAnswerer[answerer] = 0;
        emit AnswerAdded(
            subjectUUID,
            predicateUUID,
            _answer,
            answerers.indexOfKey(answerer)
        );
    }

    function answers() public view returns (Answer[] memory) {
        Answer[] memory _answers = new Answer[](answerers.count());
        for (uint256 i = 0; i < answerers.count(); i++) {
            address answerer = answerers.keyAtIndex(i);
            _answers[i] = Answer(
                answerer,
                answerByAnswerer[answerer],
                voteCountByAnswerer[answerer]
            );
        }
        return _answers;
    }

    function upvote(uint256 index) public {
        require(
            answerers.count() > index,
            'GoldenProtocolQuestion: there is no answer at that index'
        );
        require(
            answerIndexByVerifier[msg.sender] == 0,
            'GoldenProtocolQuestion: you have already voted'
        );

        address answerer = answerers.keyAtIndex(index);
        address verifier = msg.sender;
        voteCountByAnswerer[answerer] += 1;
        answerIndexByVerifier[verifier] = index;
        verifiers.upsert(verifier);
    }

    function topAnswer() public view returns (Answer memory) {
        uint256 maxVotes = 0;
        uint256 maxVotesIndex = 0;
        for (uint256 i = 0; i < answerers.count(); i++) {
            uint256 voteCount = voteCountByAnswerer[answerers.keyAtIndex(i)];
            if (voteCount >= maxVotes) {
                maxVotes = voteCount;
                maxVotesIndex = i;
            }
        }
        address answerer = answerers.keyAtIndex(maxVotesIndex);
        return (Answer(answerer, answerByAnswerer[answerer], maxVotes));
    }

    function payout() public onlyAsker {
        Answer memory _topAnswer = topAnswer();
        require(
            GoldenProtocol(owner()).minimumVotes() <= _topAnswer.voteCount,
            'GoldenProtocolQuestion: payout: minimumVotes not met'
        );
        answer = _topAnswer.answer;
        address payable answerer = payable(_topAnswer.answerer);
        tokenContract.safeTransfer(
            answerer,
            // TODO: Skim a small fee for the voters and protocol
            tokenContract.balanceOf(address(this))
        );
    }

    // Utils
    function hashAnswer(address answerer, string memory value)
        public
        pure
        returns (uint256)
    {
        return uint256(keccak256(abi.encode(answerer, value)));
    }
}
