// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

import '../roles/PauserRole.sol';

contract Pausable is PauserRole {
    event Paused(address account);
    event Unpaused(address account);

    bool private _paused;

    /// @dev Returns true if the contract is paused, and false otherwise.
    /// @return A boolean flag for if the contract is paused
    function paused() public view returns (bool) {
        return _paused;
    }

    /// @dev Modifier to make a function callable only when the contract is not paused
    modifier whenNotPaused() {
        require(!_paused, 'Pausable: paused');
        _;
    }

    /// @dev Modifier to make a function callable only when the contract is paused
    modifier whenPaused() {
        require(_paused, 'Pausable: not paused');
        _;
    }

    /// @notice Only administrators should be allowed to update this
    /// @dev Triggers stopped state
    function _pause() internal {
        _paused = true;
        emit Paused(msg.sender);
    }

    /// @notice Only administrators should be allowed to update this
    /// @dev Resets to normal state
    function _unpause() internal {
        _paused = false;
        emit Unpaused(msg.sender);
    }

    /// @dev Public function triggers stopped state
    function pause() external onlyPauser whenNotPaused {
        Pausable._pause();
    }

    /// @dev Public function resets to normal state.
    function unpause() external onlyPauser whenPaused {
        Pausable._unpause();
    }

    uint256[49] private __gap;
}
