// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.16;

contract StakingV1Storage {
    // ===== STRUCTS =====
    struct Agreement {
        address voter;
        uint256 commitAmount;
        // uint256 expires_at;
        uint256 pricePerVoteMultiplier;
        bool isClosed;
        // bool signedByOwner;
        // bool signedByVoter;
        // uint256 totalStakeConsumed;
    }

    struct Stake {
        uint256 lockedAmount;
        bool isUnlocked;
    }

    // ===== STATE =====
    uint256 public maxPricePerVote;
    uint256 public minimumPricePerVote;

    mapping(bytes32 => Agreement) public agreements;

    mapping(address => uint256) public deposits;
    mapping(address => mapping(bytes32 => Stake)) public lockedStake;
    mapping(address => uint256) public claimable;
}
