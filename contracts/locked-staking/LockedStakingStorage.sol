// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

contract LockedStakingStorage {
    // @dev locked stake that cannot be withdrawn until consensus is reached
    mapping(address => mapping(bytes32 => uint256)) internal lockedStake;

    // @dev stake that can be withdrawn
    mapping(address => uint256) internal stake;

    // @dev contract addr
    address internal gldErc20Address;
}
