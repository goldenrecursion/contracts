// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

// Allows anyone to claim a token if they exist in a merkle root.
interface IEthStaking {
    function setMinimumStaking(uint256 minimumStaking) external;

    function setStakingPeriod(uint256 stakingPeriod) external;

    function withdraw() external;

    function recoverERC20(address tokenAddress) external;

    event MinimumStakingChanged(uint256 minimumStaking);
    event StakingPeriodChanged(uint256 stakingPeriod);
    event TokensRecovered(address tokenAddress, uint256 amount);
    event Withdrawn(address indexed account, uint256 amount);
    event Received(
        address indexed account,
        uint256 amount,
        uint256 lockedUntil
    );
}
