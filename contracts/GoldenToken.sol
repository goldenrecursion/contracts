// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/security/Pausable.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol';

/// @custom:security-contact security@golden.com
contract GoldenToken is ERC20, Ownable, Pausable, ERC20Permit, ERC20Votes {
    mapping(address => uint256) private _stakes;

    constructor(uint256 initialSupply)
        Ownable()
        ERC20('GoldenToken', 'GLD')
        ERC20Permit('GoldenToken')
    {
        _mint(_msgSender(), initialSupply);
    }

    // Pausable

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override whenNotPaused {
        super._beforeTokenTransfer(from, to, amount);
    }

    // Staking

    function stake(uint256 amount) public payable {
        address account = _msgSender();
        transfer(address(this), amount);
        _stakes[account] += amount;
    }

    function unstake(uint256 amount) public {
        address account = _msgSender();
        require(_stakes[account] >= amount, 'Staking: exceeds balance');
        _stakes[account] -= amount;
        _transfer(address(this), account, amount);
    }

    function stakeOf(address account) public view returns (uint256) {
        return _stakes[account];
    }

    function slash(address account, uint256 amount) public onlyOwner {
        _stakes[account] -= amount;
        transfer(owner(), amount);
    }

    // Voting overrides

    function getStakeVotes(address account) public view returns (uint256) {
        // TODO: Implement "Checkpoint" mechanism for `_stakes` in the
        // same way ERC20Votes does for `_balances`.
        return _stakes[account];
    }

    function getVotes(address account) public view override returns (uint256) {
        // We don't want users to lose their vote weight when they stake.
        // So we override `getVotes` to return the sum of token balance and
        // stake.
        return super.getVotes(account) + getStakeVotes(account);
    }

    // The functions below are overrides required by Solidity.

    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override(ERC20, ERC20Votes) {
        super._afterTokenTransfer(from, to, amount);
    }

    function _mint(address to, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._mint(to, amount);
    }

    function _burn(address account, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._burn(account, amount);
    }
}
