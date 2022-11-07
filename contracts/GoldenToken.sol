// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

import '@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20VotesUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import './IGoldenToken.sol';
import './locked-staking/LockedStaking.sol';

/// @custom:security-contact security@golden.com
//slither-disable-next-line unused-state
contract GoldenToken is
    IGoldenToken,
    ERC20PermitUpgradeable,
    ERC20VotesUpgradeable,
    OwnableUpgradeable
{
    // ============ Mutable State ============
    mapping(address => bool) private _minters;

    // ============ Events ============
    event MinterAdded(address indexed account);
    event MinterRemoved(address indexed account);

    modifier onlyMinter() {
        require(isMinter(msg.sender), 'Only minter can call');
        _;
    }

    function initialize(uint256 initialSupply) public initializer {
        __Ownable_init();
        __ERC20_init('GoldenToken', 'GLD');
        __ERC20Permit_init('GoldenToken');
        _mint(_msgSender(), initialSupply);
        _addMinter(_msgSender());
    }

    // ============ Mint/Burn ============
    function mint(address to, uint256 amount) external onlyMinter {
        _mint(to, amount);
    }

    function burn(address to, uint256 amount) external {
        _burn(to, amount);
    }

    // ============ Administration ============

    function addMinter(address account) external onlyOwner {
        _addMinter(account);
    }

    function removeMinter(address account) external onlyOwner {
        _removeMinter(account);
    }

    function isMinter(address account) public view returns (bool) {
        return _minters[account];
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

    //slither-disable-next-line dead-code
    function _burn(address account, uint256 amount)
        internal
        override(ERC20Upgradeable, ERC20VotesUpgradeable)
    {
        super._burn(account, amount);
    }

    function _addMinter(address account) private {
        _minters[account] = true;
        emit MinterAdded(account);
    }

    function _removeMinter(address account) private {
        _minters[account] = false;
        emit MinterRemoved(account);
    }
}
