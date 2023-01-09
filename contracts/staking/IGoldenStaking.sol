// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

// Allows anyone to claim a token if they exist in a merkle root.
interface IGoldenStaking {
    function getMinimumStaking() external view returns (uint256);

    function setMinimumStaking(uint256 minimumStaking) external;

    function getStakingTime() external view returns (uint256);

    function setStakingTime(uint256 stakingTime) external;

    function deposit() external payable;

    function withdraw() external;

    event MinimumStakingChanged(uint256 minimumStaking);
    event StakingTimeChanged(uint256 stakingTime);
    event Deposited(
        address indexed account,
        uint256 amount,
        uint256 lockedUntil
    );
    event Withdrawn(address indexed account, uint256 amount);
}
