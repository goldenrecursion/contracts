// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

import './OwnerRole.sol';

contract PauserRole is OwnerRole {
    event PauserAdded(address indexed addedPauser, address indexed addedBy);
    event PauserRemoved(
        address indexed removedPauser,
        address indexed removedBy
    );

    Role private _pausers;

    /// @dev Modifier to make a function callable only when the caller is a pauser
    modifier onlyPauser() {
        require(
            isPauser(msg.sender),
            'PauserRole: caller does not have the Pauser role'
        );
        _;
    }

    function isPauser(address account) public view returns (bool) {
        return _has(_pausers, account);
    }

    function _addPauser(address account) internal {
        _add(_pausers, account);
        emit PauserAdded(account, msg.sender);
    }

    function _removePauser(address account) internal {
        _remove(_pausers, account);
        emit PauserRemoved(account, msg.sender);
    }

    function addPauser(address account) external onlyOwner {
        _addPauser(account);
    }

    function removePauser(address account) external onlyOwner {
        _removePauser(account);
    }

    uint256[49] private __gap;
}
