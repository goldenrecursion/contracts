// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

import './OwnerRole.sol';

contract MinterRole is OwnerRole {
    event MinterAdded(address indexed addedMinter, address indexed addedBy);
    event MinterRemoved(
        address indexed removedMinter,
        address indexed removedBy
    );

    Role private _minters;

    modifier onlyMinter() {
        require(
            isMinter(msg.sender),
            'MinterRole: caller does not have the Minter role'
        );
        _;
    }

    function isMinter(address account) public view returns (bool) {
        return _has(_minters, account);
    }

    function _addMinter(address account) internal {
        _add(_minters, account);
        emit MinterAdded(account, msg.sender);
    }

    function _removeMinter(address account) internal {
        _remove(_minters, account);
        emit MinterRemoved(account, msg.sender);
    }

    function addMinter(address account) external onlyOwner {
        _addMinter(account);
    }

    function removeMinter(address account) external onlyOwner {
        _removeMinter(account);
    }

    uint256[49] private __gap;
}
