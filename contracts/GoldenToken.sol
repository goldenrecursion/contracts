// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";
import "./StakeableUpgradeable.sol";

/// @custom:security-contact security@golden.com
contract GoldenToken is ERC20Permit, ERC20Votes, StakeableUpgradeable {
    constructor(uint256 initialSupply)
        Ownable()
        ERC20("GoldenToken", "GLD")
        ERC20Permit("GoldenToken")
    {
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

    /**
     * Add functionality like burn to the _stake afunction
     *
     */
    function stake(uint256 _amount) external {
        _stake(_amount);
        transfer(address(this), _amount);
    }

    function unstake(uint256 amount) external {
        _unstake(amount);
        address account = _msgSender();
        transferFrom(address(this), account, amount);
    }

    function slash(address account, uint256 amount) public onlyOwner {
        _slash(account, amount);
        transfer(owner(), amount);
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
    ) internal override(ERC20, ERC20Votes) {
        super._afterTokenTransfer(from, to, amount);
    }

    // ============ Mint/Burn ============

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
