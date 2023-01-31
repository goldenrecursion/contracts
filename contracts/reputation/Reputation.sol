// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.16;

import "../roles/OwnerRole.sol";

contract Reputation is OwnerRole {
    event ReputationChanged(address indexed _address, uint256 _reputationAmount);
    mapping(address => uint256) private reputation;
    uint256 public maxReputation;

    constructor(address _owner, uint256 _maxReputation) {
        _addOwner(_owner);
        maxReputation = _maxReputation;
    }

    function getReputation(address _address) public view returns (uint256) {
        return reputation[_address];
    }

    function getMaxReputation() public view returns (uint256) {
        return maxReputation;
    }

    function setReputation(address _address, uint256 _amount) onlyOwner public {
        reputation[_address] = _amount;
        emit ReputationChanged(_address, _amount);
    }
}
