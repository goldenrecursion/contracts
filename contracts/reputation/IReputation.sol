// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.16;

interface IReputation {
    function getReputation(address _address) external returns (uint256);

    function setReputation(address _address, uint256 _amount) external;

    function getMaxReputation() external returns (uint256);
}
