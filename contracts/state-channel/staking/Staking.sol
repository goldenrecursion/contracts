// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.16;

import './StakingStorage.sol';
import './IStake.sol';
import '../../reputation/IReputation.sol';
import '../../roles/OwnerRole.sol';

contract Staking is IStake, StakingV1Storage, OwnerRole {
    // ===== EVENTS =====
    event Deposit(address indexed voter, uint256 amount);
    event AgreementCreated(
        address indexed voter,
        bytes32 id,
        uint256 amount,
        uint256 costPerVoteMultiplier
    );

    uint256 public constant PRECISION = 18;
    address public immutable reputationContractAddress;

    constructor(address _owner, address _reputationContractAddress) {
        _addOwner(_owner);
        reputationContractAddress = _reputationContractAddress;
        maxPricePerVote = 10;
        minimumPricePerVote = 1;
    }

    receive() external payable {
        deposits[msg.sender] += msg.value;
        emit Deposit(msg.sender, msg.value);
    }

    // @notice Voter locks _commitAmount, less then or equal to previously deposited amount to start voting session
    function openChannel(uint256 _commitAmount) public returns (bytes32) {
        bytes32 id = getId(msg.sender, _commitAmount);
        Stake storage lockedStake = lockedStake[msg.sender][id];
        require(
            _commitAmount <= deposits[msg.sender],
            'openChannel: invalid amount'
        );

        uint256 currentReputation = _getReputation(msg.sender);
        uint256 maxReputation = _getMaxReputation();

        uint256 pricePerVoteMultiplier = getVotePriceMultiplier(
            currentReputation,
            maxReputation
        );

        deposits[msg.sender] -= _commitAmount;
        lockedStake.lockedAmount = _commitAmount;
        agreements[id] = Agreement(
            msg.sender,
            _commitAmount,
            pricePerVoteMultiplier,
            false
        );
        emit AgreementCreated(
            msg.sender,
            id,
            _commitAmount,
            pricePerVoteMultiplier
        );
        return id;
    }

    function closeChannel(bytes32 _id) public onlyOwner {
        Agreement storage agreement = agreements[_id];
        Stake storage lockedStake = lockedStake[agreement.voter][_id];
        require(
            lockedStake.isUnlocked == false && lockedStake.lockedAmount > 0,
            'closeChannel: invalid id'
        );

        // Unlocking locked stake, claims should be referenced in GIP-4

        lockedStake.isUnlocked = true;
        claimable[agreement.voter] = lockedStake.lockedAmount;

        if (!agreement.isClosed) {
            agreement.isClosed = true;
        }
    }

    // @notice Product of tripleCost * getVotePriceMultiplier is the price voter is going to pay for the session
    // @dev Relates reputation to price multiplier in a linear relationship
    function getVotePriceMultiplier(uint256 _reputation, uint256 _maxReputation)
        public
        view
        returns (uint256)
    {
        uint256 _maxPricePerVote = toPrecision(maxPricePerVote, PRECISION);
        uint256 _minimumPricePerVote = toPrecision(
            minimumPricePerVote,
            PRECISION
        );

        uint256 quotient = _divide(_reputation, _maxReputation, PRECISION);

        return
            _maxPricePerVote *
            (toPrecision(1, PRECISION) - quotient) +
            _minimumPricePerVote;
    }

    function getClaims(address _voter) external view returns (uint256) {
        return claimable[_voter];
    }

    function getId(address _address, uint256 _amount)
        public
        view
        returns (bytes32)
    {
        return keccak256(abi.encodePacked(_address, _amount, block.timestamp));
    }

    function toPrecision(uint256 _input, uint256 _precision)
        public
        pure
        returns (uint256)
    {
        return _input * 10**_precision;
    }

    function _divide(uint256 _inputA, uint256 _inputB, uint256 _precision)
        private
        pure
        returns (uint256)
    {
        return toPrecision(_inputA, _precision) / _inputB;
    }

    function _getReputation(address _address) private returns (uint256) {
        return IReputation(reputationContractAddress).getReputation(_address);
    }

    function _setReputation(address _address, uint256 _amount) private {
        uint256 current = _getReputation(_address);
        if (current < 10) {
            IReputation(reputationContractAddress).setReputation(
                _address,
                _amount
            );
        } else {
            revert('Max reputation');
        }
    }

    function _getMaxReputation() private returns (uint256) {
        return IReputation(reputationContractAddress).getMaxReputation();
    }
}
