// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

import '@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20VotesUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import './locked-staking/LockedStaking.sol';

/// @custom:security-contact security@golden.com
//slither-disable-next-line unused-state
contract GoldenToken is
    ERC20PermitUpgradeable,
    ERC20VotesUpgradeable,
    OwnableUpgradeable,
LockedStaking
{
    // ============ EVENTS ============
    event Claimed(address account, uint256 amount);

    function initialize(uint256 initialSupply) public initializer {
        __Ownable_init();
        __ERC20_init('GoldenToken', 'GLD');
        __ERC20Permit_init('GoldenToken');
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
            'ERC20: Not allowed to transfer'
        );
    }

    // ============ Locked Staking & Slashing logic ============

    function lock(bytes32 hash, uint256 amount) public {
        require(
            amount <= balanceOf(msg.sender),
            'lock: not enough GLD token in your wallet'
        );
        _lock(msg.sender, hash, amount);
        transferFrom(msg.sender, address(this), amount);
    }

    function unlock(address account, bytes32 hash) public onlyOwner {
        _unlock(account, hash);
    }

    function slash(
        address account,
        bytes32 hash,
        uint256 amount
    ) external onlyOwner {
        _slash(account, hash, amount);
        _transfer(address(this), owner(), amount); //finish
    }

    function claim() public {
        uint256 unlockedAmount = getUnlockedStake(msg.sender);
        require(unlockedAmount > 0, 'claim: Nothing to claim');
        _afterClaim(msg.sender);
        _transfer(address(this), msg.sender, unlockedAmount);
        emit Claimed(msg.sender, unlockedAmount);
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

    //slither-disable-next-line dead-code
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
}
