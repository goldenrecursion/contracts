// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @notice Stakeable needs to be inherited by other contracts for Staking capabilities
 */
contract StakeableUpgradeable is Ownable {
    // ============ Mutable Storage ============

    /**
     * @notice
     * a mapping(user => index), index being this user's index in stakeholders array.
     */
    mapping(address => uint256) internal stakes;

    // ============ Structs ============

    struct User {
        address addr;
        uint256 amount;
    }

    // ============ Events ============

    /**
     * @notice Staked event is triggered whenever a user stakes tokens, address is indexed to make it filterable
     */
    event Staked(address indexed user, uint256 amount);

    // ============ Constructor ============

    constructor() {}

    // ============ Staking ============

    /**
     * @notice
     *  stake amount for msg.sender
     */
    function _stake(uint256 _amount) internal {
        // Simple check so that user does not stake 0
        require(_amount > 0, "Cannot stake nothing");

        stakes[_msgSender()] += _amount;

        emit Staked(_msgSender(), _amount);
    }

    /**
     * @notice
     * unstake amount from msg.sender
     */
    function _unstake(uint256 amount) public {
        address account = _msgSender();
        require(stakes[account] >= amount, "_unstake: exceeds balance");
        stakes[account] -= amount;
    }

    /**
     * @notice
     * slash amount from msg.sender
     */
    function _slash(address account, uint256 amount) public onlyOwner {
        require(stakes[account] >= amount, "_slash: exceeds balance");
        stakes[account] -= amount;
    }

    /**
     * @notice
     * gets account's staked amount
     */
    function _stakeOf(address account) public view returns (uint256) {
        // TODO: Implement "Checkpoint" mechanism for `stakes` in the
        // same way ERC20Votes does for `_balances`.
        return stakes[account];
    }

    /**
     * @notice
     * bulk insert user's stake amounts.
     */
    function _bulkStake(User[] calldata users) external onlyOwner {
        for (uint256 i = 0; i < users.length; i++) {
            stakes[users[i].addr] += users[i].amount;
        }
    }
}
