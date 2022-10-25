// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol';

import './GoldenToken.sol';
import './libraries/AddressSet.sol';

/// @custom:security-contact security@golden.com
contract GoldenBounty is Ownable {
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
            bounty % 10**tokenContract.decimals() == 0,
            'GoldenBounty: Bounty must be a multiple of 1 GoldenToken'
        );
        require(
            tokenContract.allowance(_msgSender(), address(this)) >= bounty,
            'GoldenBounty: insufficient allowance'
        );
        GoldenBountyQuestion newQuestion = new GoldenBountyQuestion(
            address(tokenContract),
            _msgSender(),
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

contract GoldenBountyQuestion is Ownable {
    using SafeERC20Upgradeable for GoldenToken;
    GoldenToken tokenContract;

    using AddressSet for AddressSet.Set;

    address public asker;
    bytes16 public subjectUUID;
    bytes16 public predicateUUID;

    // Helper struct for consensus/payout algorithms
    struct Answer {
        string answer;
        address answerer;
        AddressSet.Set yesVoters;
        AddressSet.Set noVoters;
    }

    struct AnswerPublic {
        string answer;
        address answerer;
        address[] yesVoters;
        address[] noVoters;
    }

    // Mapping of answerer address to their answer
    mapping(address => Answer) answerByAnswerer;
    AddressSet.Set answerers;

    enum AnswerStatus {
        Pending,
        Accepted,
        Rejected
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
            'GoldenBountyQuestion: asker is the zero address'
        );
        tokenContract = GoldenToken(goldenTokenAddress);
        asker = _asker;
        subjectUUID = _subjectUUID;
        predicateUUID = _predicateUUID;
    }

    modifier onlyAsker() {
        require(_msgSender() == asker, 'GoldenBountyQuestion: onlyAsker');
        _;
    }

    function bounty() public view returns (uint256) {
        return tokenContract.balanceOf(address(this));
    }

    function addAnswer(string calldata _answer) public {
        require(
            bytes(_answer).length > 0,
            'GoldenBountyQuestion: answer is empty'
        );
        address answerer = _msgSender();
        Answer storage a = answerByAnswerer[answerer];
        a.answer = _answer;
        a.answerer = answerer;
        answerers.upsert(answerer);

        emit AnswerAdded(
            subjectUUID,
            predicateUUID,
            _answer,
            answerers.indexOfKey(answerer)
        );
    }

    function answers() public view returns (AnswerPublic[] memory) {
        AnswerPublic[] memory _ans = new AnswerPublic[](answerers.count());
        for (uint256 i = 0; i < answerers.count(); i++) {
            address answerer = answerers.keyAtIndex(i);
            Answer storage a = answerByAnswerer[answerer];
            _ans[i] = AnswerPublic(
                a.answer,
                a.answerer,
                a.yesVoters.keyList,
                a.noVoters.keyList
            );
        }
        return _ans;
    }

    function answers(AnswerStatus status)
        public
        view
        returns (AnswerPublic[] memory)
    {
        AnswerPublic[] memory _ans = new AnswerPublic[](answerers.count());
        uint256 acceptedAnswersCount = 0;
        for (uint256 i = 0; i < answerers.count(); i++) {
            address answerer = answerers.keyAtIndex(i);
            Answer storage a = answerByAnswerer[answerer];
            AnswerStatus answerStatus = _answerStatus(a);
            if (answerStatus == status) {
                _ans[acceptedAnswersCount] = AnswerPublic(
                    a.answer,
                    a.answerer,
                    a.yesVoters.keyList,
                    a.noVoters.keyList
                );
                acceptedAnswersCount++;
            }
        }
        return _ans;
    }

    function acceptedAnswers() public view returns (AnswerPublic[] memory) {
        return answers(AnswerStatus.Accepted);
    }

    function rejectedAnswers() public view returns (AnswerPublic[] memory) {
        return answers(AnswerStatus.Rejected);
    }

    function pendingAnswers() public view returns (AnswerPublic[] memory) {
        return answers(AnswerStatus.Pending);
    }

    function vote(uint256 index, bool isCorrect) public {
        require(
            answerers.count() > index,
            'GoldenBountyQuestion: there is no answer at that index'
        );

        Answer storage answer = answerByAnswerer[answerers.keyAtIndex(index)];
        address voter = _msgSender();

        require(
            answer.yesVoters.exists(voter) == false &&
                answer.noVoters.exists(voter) == false,
            'GoldenBountyQuestion: you have already voted'
        );

        if (isCorrect) {
            answer.yesVoters.insert(voter);
        } else {
            answer.noVoters.insert(voter);
        }
    }

    function topAnswer() public view returns (AnswerPublic memory) {
        Answer storage a = _topAnswer();
        return
            AnswerPublic(
                a.answer,
                a.answerer,
                a.yesVoters.keyList,
                a.noVoters.keyList
            );
    }

    function _topAnswer() internal view returns (Answer storage) {
        uint256 maxVotes = 0;
        uint256 maxIndex = 0;
        for (uint256 i = 0; i < answerers.count(); i++) {
            Answer storage answer = answerByAnswerer[answerers.keyAtIndex(i)];
            AnswerStatus answerStatus = _answerStatus(answer);
            if (answerStatus == AnswerStatus.Accepted) {
                uint256 votes = answer.yesVoters.count();
                if (votes > maxVotes) {
                    maxVotes = votes;
                    maxIndex = i;
                }
            }
        }
        return answerByAnswerer[answerers.keyAtIndex(maxIndex)];
    }

    function payout() public onlyAsker {
        AnswerPublic[] memory _acceptedAnswers = acceptedAnswers();
        address[] memory answerersToPay = new address[](
            _acceptedAnswers.length
        );

        uint256 votersLength = 0;
        for (uint256 i = 0; i < _acceptedAnswers.length; i++) {
            answerersToPay[i] = _acceptedAnswers[i].answerer;
            votersLength += _acceptedAnswers[i].yesVoters.length;
        }

        address[] memory votersToPay = new address[](votersLength);
        uint256 voterIndex = 0;
        for (uint256 i = 0; i < _acceptedAnswers.length; i++) {
            for (uint256 j = 0; j < _acceptedAnswers[i].yesVoters.length; j++) {
                votersToPay[voterIndex] = _acceptedAnswers[i].yesVoters[j];
                voterIndex++;
            }
        }

        // `bounty()` value is in the order of `tokenContract.decimals()` (10^18)
        // so should be divisible by 10
        // let's pay:
        // - 6/10 to the answerer
        // - 3/10 to the voters
        // - 1/10 and any rounding remainders to the protocol
        uint256 _bounty = bounty();
        _payoutAmountToAddresses((_bounty / 10) * 6, answerersToPay);
        _payoutAmountToAddresses((_bounty / 10) * 3, votersToPay);
        // Send any left over to the protocol
        tokenContract.safeTransfer(owner(), bounty());
    }

    // Utils
    function _answerStatus(Answer storage answer)
        internal
        view
        returns (AnswerStatus)
    {
        int256 voteDiff = int256(answer.yesVoters.count()) -
            int256(answer.noVoters.count());
        int256 minimumVotes = int256(GoldenBounty(owner()).minimumVotes());

        if (voteDiff >= minimumVotes) {
            return AnswerStatus.Accepted;
        }

        if (voteDiff <= -minimumVotes) {
            return AnswerStatus.Rejected;
        }

        return AnswerStatus.Pending;
    }

    function _payoutAmountToAddresses(
        uint256 amount,
        address[] memory addresses
    ) internal {
        uint256 amountPaid = 0;
        uint256 amountPerAddress = amount / addresses.length;
        for (uint256 i = 0; i < addresses.length; i++) {
            tokenContract.safeTransfer(addresses[i], amountPerAddress);
            amountPaid += amountPerAddress;
        }
        // Send any left over to the protocol
        if (amountPaid < amount) {
            tokenContract.safeTransfer(owner(), amount - amountPaid);
        }
    }
}
