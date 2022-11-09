// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

import './OwnerRole.sol';

contract ValidatorRole is OwnerRole {
    event ValidatorAdded(
        address indexed addedValidator,
        address indexed addedBy
    );
    event ValidatorRemoved(
        address indexed removedValidator,
        address indexed removedBy
    );

    Role private _validator;

    modifier onlyValidator() {
        require(
            isValidator(msg.sender),
            'ValidatorRole: caller does not have the Validator role'
        );
        _;
    }

    function isValidator(address account) public view returns (bool) {
        return _has(_validator, account);
    }

    function _addValidator(address account) internal {
        _add(_validator, account);
        emit ValidatorAdded(account, msg.sender);
    }

    function _removeValidator(address account) internal {
        _remove(_validator, account);
        emit ValidatorRemoved(account, msg.sender);
    }

    function addValidator(address account) external onlyOwner {
        _addValidator(account);
    }

    function removeValidator(address account) external onlyOwner {
        _removeValidator(account);
    }

    uint256[49] private __gap;
}
