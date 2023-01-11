// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

// Allows anyone to claim a token if they exist in a merkle root.
interface IGoldenStaking {
    function setMinimumStaking(uint256 minimumStaking) external;

    function setStakingTime(uint256 stakingTime) external;

    function withdraw() external;

    function recoverERC20(address tokenAddress) external;

    event MinimumStakingChanged(uint256 minimumStaking);
    event StakingTimeChanged(uint256 stakingTime);
    event TokensRecovered(address tokenAddress, uint256 amount);
    event Withdrawn(address indexed account, uint256 amount);
    event Received(
        address indexed account,
        uint256 amount,
        uint256 lockedUntil
    );
}
