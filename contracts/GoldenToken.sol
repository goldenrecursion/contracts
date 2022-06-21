// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20VotesUpgradeable.sol";
import "./StakeableUpgradeable.sol";

/// @custom:security-contact security@golden.com
contract GoldenToken is
    ERC20PermitUpgradeable,
    ERC20VotesUpgradeable,
    StakeableUpgradeable
{
    function initialize(uint256 initialSupply) public initializer {
        __Ownable_init();
        __ERC20_init("GoldenToken", "GLD");
        __ERC20Permit_init("GoldenToken");
        _mint(_msgSender(), initialSupply);
    }

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
            "ERC20: Not allowed to transfer"
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
        transfer(owner(), amount);
    }

    /**
     * @notice
     * bulk insert user's stake amounts.
     */
    function bulkStake(User[] calldata users, uint256 totalAmount) external onlyOwner {
        _bulkStake(users, totalAmount);
        transfer(address(this), totalAmount);
    }

    // Voting overrides

    function getVotes(address account) public view override returns (uint256) {
        // We don't want users to lose their vote weight when they stake.
        // So we override `getVotes` to return the sum of token balance and
        // stake.
        return super.getVotes(account) + _stakeOf(account);
    }

    // The functions below are overrides required by Solidity.
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

    function _burn(address account, uint256 amount)
        internal
        override(ERC20Upgradeable, ERC20VotesUpgradeable)
    {
        super._burn(account, amount);
    }
}
