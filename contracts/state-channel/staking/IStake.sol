// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.16;

interface IStake {
    function getClaims(address _voter) external view returns (uint256);
}
