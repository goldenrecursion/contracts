// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.16;

contract OwnerRole {
    event OwnerAdded(address indexed addedOwner, address indexed addedBy);
    event OwnerRemoved(address indexed removedOwner, address indexed removedBy);

    struct Role {
        mapping(address => bool) members;
    }

    Role private _owners;

    modifier onlyOwner() {
        require(
            isOwner(msg.sender),
            'OwnerRole: caller does not have the Owner role'
        );
        _;
    }

    function isOwner(address account) public view returns (bool) {
        return _has(_owners, account);
    }

    function addOwner(address account) external onlyOwner {
        _addOwner(account);
    }

    function removeOwner(address account) external onlyOwner {
        _removeOwner(account);
    }

    /// @notice Only administrators should be allowed to update
    /// @dev Grants address owner role
    /// @param account The address that is guaranteed owner authorization
    function _addOwner(address account) internal {
        _add(_owners, account);
        emit OwnerAdded(account, msg.sender);
    }

    /// @notice Only administrators should be allowed to update
    /// @dev Removes an account from being an owner
    /// @param account The address removed as an owner
    function _removeOwner(address account) internal {
        _remove(_owners, account);
        emit OwnerRemoved(account, msg.sender);
    }

    /// @notice Only administrators should be allowed to update
    /// @dev Give an account access to this role
    /// @param role All authorizations for the contract
    /// @param account The address that is guaranteed owner authorization
    function _add(Role storage role, address account) internal {
        require(account != address(0x0), 'Invalid 0x0 address');
        require(!_has(role, account), 'Roles: account already has role');
        role.members[account] = true;
    }

    /// @notice Only administrators should be allowed to update
    /// @dev Remove an account's access to this role
    /// @param role All authorizations for the contract
    /// @param account The address that is guaranteed owner authorization
    function _remove(Role storage role, address account) internal {
        require(_has(role, account), 'Roles: account does not have role');
        role.members[account] = false;
    }

    /// @dev Check if an account is in the set of roles
    /// @param role All authorizations for the contract
    /// @param account The address that is guaranteed owner authorization
    /// @return boolean
    function _has(
        Role storage role,
        address account
    ) internal view returns (bool) {
        require(account != address(0), 'Roles: account is the zero address');
        return role.members[account];
    }

    uint256[49] private __gap;
}
