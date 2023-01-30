// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.16;

import '../roles/OwnerRole.sol';
import '../roles/MinterRole.sol';
import '../roles/BurnerRole.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20BurnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/extensions/draft-ERC20PermitUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20VotesUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol';

/// @custom:security-contact security@golden.co
contract GoldenToken is
    Initializable,
    ERC20Upgradeable,
    ERC20BurnableUpgradeable,
    ERC20PermitUpgradeable,
    ERC20VotesUpgradeable,
    OwnerRole,
    MinterRole,
    BurnerRole
{
    function initialize(uint256 initialSupply) public initializer {
        __ERC20_init('GoldenToken', 'GLD');
        __ERC20Burnable_init();
        __ERC20Permit_init('GoldenToken');
        __ERC20Votes_init();
        _addOwner(msg.sender);
        _mint(msg.sender, initialSupply);
    }

    function mint(address to, uint256 amount) public onlyMinter {
        _mint(to, amount);
    }

    function burn(uint256 amount) public override onlyBurner {
        _burn(msg.sender, amount);
    }

    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override(ERC20Upgradeable, ERC20VotesUpgradeable) {
        super._afterTokenTransfer(from, to, amount);
    }

    function _mint(
        address to,
        uint256 amount
    ) internal override(ERC20Upgradeable, ERC20VotesUpgradeable) {
        super._mint(to, amount);
    }

    function _burn(
        address account,
        uint256 amount
    ) internal override(ERC20Upgradeable, ERC20VotesUpgradeable) {
        super._burn(account, amount);
    }
}
