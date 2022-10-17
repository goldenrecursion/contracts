// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

import '@openzeppelin/contracts/access/Ownable.sol';

import './libraries/AddressSet.sol';

/// @custom:security-contact security@golden.com
contract GoldenProtocol is Ownable {
    using AddressSet for AddressSet.Set;
    // This is not going to scale well... how to keep track of questions without this?
    AddressSet.Set _questions;
    uint256 public minimumVotes;

    constructor(uint256 _minimumVotes) Ownable() {
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
        // TODO: Creating new contracts is going to be very expensive.
        // Is there a cheaper alternative to encapsulate the question logic?
        GoldenProtocolQuestion newQuestion = new GoldenProtocolQuestion(
            msg.sender,
            subjectUUID,
            predicateUUID,
            bounty
        );
        address newQuestionAddress = address(newQuestion);
        _questions.insert(newQuestionAddress);
        return newQuestionAddress;
    }

    // TODO: This is not going to scale well... how to keep track of questions without this?
    function questions() public view returns (address[] memory) {
        return _questions.keyList;
    }
}

contract GoldenProtocolQuestion is Ownable {
    using AddressSet for AddressSet.Set;

    address public asker;
    uint256 public bounty;
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

    constructor(
        address _asker,
        bytes16 _subjectUUID,
        bytes16 _predicateUUID,
        uint256 _bounty
    ) Ownable() {
        require(
            _asker != address(0),
            'GoldenProtocolQuestion: asker is the zero address'
        );

        asker = _asker;
        subjectUUID = _subjectUUID;
        predicateUUID = _predicateUUID;
        bounty = _bounty;
    }

    modifier onlyAsker() {
        require(msg.sender == asker, 'GoldenProtocolQuestion: onlyAsker');
        _;
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

    // TODO: Pay out the bounty to the best answer, skim a small fee for the voters and protocol
    function payout() public onlyAsker {
        Answer memory _topAnswer = topAnswer();
        require(
            GoldenProtocol(owner()).minimumVotes() <= _topAnswer.voteCount,
            'GoldenProtocolQuestion: payout: minimumVotes not met'
        );
        answer = _topAnswer.answer;
        address payable answerer = payable(_topAnswer.answerer);
        answerer.transfer(bounty);
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
