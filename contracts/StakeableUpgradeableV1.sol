// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

/**
 * @notice Stakeable needs to be inherited by other contracts for Staking capabilities
 */
contract StakeableUpgradeableV1 is OwnableUpgradeable {
    // ============ Mutable Storage ============

    /**
     * @notice
     * a mapping(user => amount)
     */
    mapping(address => uint256) internal stakes;

    // ============ Structs ============

    struct User {
        address addr;
        uint256 amount;
    }

    // ============ Events ============

    /**
     * @notice address is indexed to make it filterable
     */
    event Staked(address indexed user, uint256 amount);
    event UnStaked(address indexed user, uint256 amount);
    event Slashed(address indexed user, uint256 amount);

    // ============ Staking ============

    /**
     * @notice
     *  stake amount for msg.sender
     */
    function _stake(uint256 amount) internal {
        require(amount > 0, "Cannot stake nothing");
        stakes[_msgSender()] += amount;
        emit Staked(_msgSender(), amount);
    }

    /**
     * @notice
     * unstake amount from msg.sender
     */
    function _unstake(uint256 amount) public {
        require(stakes[_msgSender()] >= amount, "_unstake: exceeds balance");
        stakes[_msgSender()] -= amount;
        emit UnStaked(_msgSender(), amount);
    }

    /**
     * @notice
     * slash amount from msg.sender
     */
    function _slash(address account, uint256 amount) public onlyOwner {
        require(stakes[account] >= amount, "_slash: exceeds balance");
        stakes[account] -= amount;
        emit Slashed(account, amount);
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
     * totalAmount - By providing the totalAmount beforehand we can avoid crucial mistakes.
     */
    function _bulkStake(User[] calldata users, uint256 totalAmount) internal onlyOwner {
        require(users.length > 0, "bulkStake 0 users");
        require(totalAmount > 0, "bulkStake 0 totalAmount");
        uint calculatedAmount = 0;
        for (uint256 i = 0; i < users.length; i++) {
            uint amount = users[i].amount;
            stakes[users[i].addr] += amount;
            calculatedAmount += amount;
            emit Staked(users[i].addr, amount);
        }
        require(calculatedAmount == totalAmount, "incorrect totalAmount");
    }
}
