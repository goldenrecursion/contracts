// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.16;

interface IStakeable {
    function stake(uint256 _amount) external;

    function unstake(uint256 amount) external;

    function slash(address account, uint256 amount) external;

    function stakeOf(address account) external view returns (uint256);
}
