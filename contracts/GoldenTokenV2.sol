// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import '@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20VotesUpgradeable.sol';
import './StakeableUpgradeableV2.sol';

/// @custom:security-contact security@golden.com
contract GoldenTokenV2 is
    ERC20PermitUpgradeable,
    ERC20VotesUpgradeable,
    StakeableUpgradeableV2
{
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override {
        super._beforeTokenTransfer(from, to, amount);

        require(
            (from == address(0) ||
                from == owner() ||
                from == address(this) ||
                to == address(this)),
            'ERC20: Not allowed to transfer'
        );
    }

    // ============ Staking ============

    function stake(uint256 _amount) external {
        _stake(_amount);
        transfer(address(this), _amount);
    }

    function unstake(uint256 amount) external {
        _unstake(amount);
        _transfer(address(this), _msgSender(), amount);
    }

    function slash(address account, uint256 amount) public onlyOwner {
        _slash(account, amount);
        _transfer(address(this), owner(), amount); //finish
    }

    function stakeOf(address account) public view returns (uint256) {
        return _stakeOf(account);
    }

    /**
     * @notice
     * bulk insert user's stake amounts.
     */
    function bulkStake(User[] calldata users, uint256 totalAmount)
        external
        onlyOwner
    {
        _bulkStake(users, totalAmount);
        transfer(address(this), totalAmount);
    }

    /**
     * @notice
     * bulk insert user's stake amounts.
     */
    function bulkSlash(User[] calldata users, uint256 totalAmount)
        external
        onlyOwner
    {
        uint256 totalActuallySlashed = _bulkSlash(users, totalAmount);
        _transfer(address(this), owner(), totalActuallySlashed);
    }

    /**
     * Voting overrides
     */
    function getVotes(address account) public view override returns (uint256) {
        // We don't want users to lose their vote weight when they stake.
        // So we override `getVotes` to return the sum of token balance and
        // stake.
        return super.getVotes(account) + _stakeOf(account);
    }

    /**
     * The functions below are overrides required by Solidity.
     */
    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override(ERC20Upgradeable, ERC20VotesUpgradeable) {
        super._afterTokenTransfer(from, to, amount);
    }

    // ============ Mint/Burn ============

    function _mint(address to, uint256 amount)
        internal
        override(ERC20Upgradeable, ERC20VotesUpgradeable)
    {
        super._mint(to, amount);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function _burn(address account, uint256 amount)
        internal
        override(ERC20Upgradeable, ERC20VotesUpgradeable)
    {
        super._burn(account, amount);
    }

    function burn(address account, uint256 amount) public onlyOwner {
        _burn(account, amount);
    }
}
