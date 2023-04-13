// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.16;

import './OwnerRole.sol';

contract TransferRole is OwnerRole {
    event TransferGranted(
        address indexed grantedAddress,
        address indexed addedBy
    );
    event TransferRevoked(
        address indexed revokedAddress,
        address indexed revokedBy
    );

    Role private _transfer;

    modifier onlyTransferRole() {
        require(
            hasGrantsToTransfer(msg.sender),
            'Transfer: caller does not have the grants to transfer'
        );
        _;
    }

    function hasGrantsToTransfer(address account) public view returns (bool) {
        return _has(_transfer, account);
    }

    function _addGrantsToTransfer(address account) internal {
        _add(_transfer, account);
        emit TransferGranted(account, msg.sender);
    }

    function _revokeTransfer(address account) internal {
        _remove(_transfer, account);
        emit TransferRevoked(account, msg.sender);
    }

    function grantTransfer(address account) external onlyOwner {
        _addGrantsToTransfer(account);
    }

    function revokeTransfer(address account) external onlyOwner {
        _revokeTransfer(account);
    }

    uint256[49] private __gap;
}
