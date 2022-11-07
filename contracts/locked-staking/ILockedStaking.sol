// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

interface ILockedStaking {
    function getLockedStake(address account, bytes32 hash)
        external
        view
        returns (uint256);

    function getClaimableStake(address account) external view returns (uint256);
}
