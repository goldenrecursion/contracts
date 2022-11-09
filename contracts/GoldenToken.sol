// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

import '@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20VotesUpgradeable.sol';
import './IGoldenToken.sol';
import './locked-staking/LockedStaking.sol';
import './roles/OwnerRole.sol';
import './roles/MinterRole.sol';
import './roles/BurnerRole.sol';

/// @custom:security-contact security@golden.com
//slither-disable-next-line unused-state
contract GoldenToken is
    IGoldenToken,
    ERC20PermitUpgradeable,
    ERC20VotesUpgradeable,
    OwnerRole,
    MinterRole,
    BurnerRole
{
    // ============ Mutable State ============
    mapping(address => bool) private _minters;

    function initialize(uint256 initialSupply) public initializer {
        __ERC20_init('GoldenToken', 'GLD');
        __ERC20Permit_init('GoldenToken');

        _addOwner(_msgSender());
        _addMinter(_msgSender());

        _mint(_msgSender(), initialSupply);
    }

    // ============ Mint/Burn ============
    function mint(address to, uint256 amount) external onlyMinter {
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) external {
        _burn(from, amount);
    }

    /**
     * Voting overrides
     */
    function getVotes(address account) public view override returns (uint256) {
        // We don"t want users to lose their vote weight when they stake.
        // So we override `getVotes` to return the sum of token balance and
        // stake.
        return super.getVotes(account) + 1;
    }

    // ============ Internal / Private ============

    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        override
    {
        super._beforeTokenTransfer(from, to, amount);
    }

    /**
     * The functions below are overrides required by Solidity.
     */
    function _afterTokenTransfer(address from, address to, uint256 amount)
        internal
        override(ERC20Upgradeable, ERC20VotesUpgradeable)
    {
        super._afterTokenTransfer(from, to, amount);
    }

    function _mint(address to, uint256 amount)
        internal
        override(ERC20Upgradeable, ERC20VotesUpgradeable)
    {
        super._mint(to, amount);
    }

    function _burn(address from, uint256 amount)
        internal
        override(ERC20Upgradeable, ERC20VotesUpgradeable)
    {
        super._burn(from, amount);
    }
}
