// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

import './LockedStakingStorage.sol';

contract LockedStaking is LockedStakingStorage {
    // ============ Events ============
    /**
     * @dev Emitted when batch of votes (block) is submitted by actor
     */
    event Lock(address account, bytes32 indexed hash, uint256 amount);

    /**
     * @dev Emitted when protocol calls unlock function which usually means consensus has been reached
     */
    event Unlock(address account, bytes32 indexed hash, uint256 amount);

    /**
     * @dev Emitted when verifier votes against the consensus
     */
    event Slashed(address account, bytes32 indexed hash, uint256 amount);

    // @dev lock stake against block of votes
    // @notice lock stake until consensus is reached and protocol triggers unlock function
    function _lock(
        address account,
        bytes32 hash,
        uint256 amount
    ) internal {
        require(amount > 0, 'lock: amount cannot be less then or equal to 0');
        locked_stake[account][hash] += amount;
        emit Lock(account, hash, amount);
    }

    function _unlock(address account, bytes32 hash) internal {
        require(
            locked_stake[account][hash] > 0,
            'unlock: cannot unlock undefined account or hash'
        );
        uint256 amount_unlocked = locked_stake[account][hash];
        delete locked_stake[account][hash];

        // @TODO: Reward
        unlocked_stake[account] += amount_unlocked;
        emit Unlock(account, hash, amount_unlocked);
    }

    function _slash(
        address account,
        bytes32 hash,
        uint256 amount
    ) internal {
        require(
            locked_stake[account][hash] >= amount,
            'slash: exceeds locked staked'
        );
        locked_stake[account][hash] -= amount;
        emit Slashed(account, hash, amount);
    }

    function _afterClaim(address account) internal {
        require(unlocked_stake[account] > 0, '_afterClaim: undefined account');
        delete unlocked_stake[account];
    }

    function getLockedStake(address account, bytes32 hash)
        public
        view
        returns (uint256)
    {
        return locked_stake[account][hash];
    }

    function getUnlockedStake(address account) public view returns (uint256) {
        return unlocked_stake[account];
    }
}
