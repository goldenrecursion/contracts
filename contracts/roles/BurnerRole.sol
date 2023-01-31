// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.16;

import './OwnerRole.sol';

/// @title BurnerRole Contract
/// @notice Only Owner can update the burner roles
/// @dev Keeps track of burners and can check if an account is authorized
contract BurnerRole is OwnerRole {
    event BurnerAdded(address indexed addedBurner, address indexed addedBy);
    event BurnerRemoved(
        address indexed removedBurner,
        address indexed removedBy
    );

    Role private _burners;

    modifier onlyBurner() {
        require(
            isBurner(msg.sender),
            'BurnerRole: caller does not have the Burner role'
        );
        _;
    }

    function isBurner(address account) public view returns (bool) {
        return _has(_burners, account);
    }

    function _addBurner(address account) internal {
        _add(_burners, account);
        emit BurnerAdded(account, msg.sender);
    }

    function _removeBurner(address account) internal {
        _remove(_burners, account);
        emit BurnerRemoved(account, msg.sender);
    }

    function addBurner(address account) external onlyOwner {
        _addBurner(account);
    }

    function removeBurner(address account) external onlyOwner {
        _removeBurner(account);
    }

    uint256[49] private __gap;
}
