// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

import '@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol';
import './LockedStakingStorage.sol';
import '../utils/TokenUtils.sol';
import '../IGoldenToken.sol';
import './ILockedStaking.sol';
import '../capabilities/Pausable.sol';
import '../roles/ValidatorRole.sol';
import '../roles/BurnerRole.sol';
import 'hardhat/console.sol';

contract LockedStaking is
    ILockedStaking,
    LockedStakingStorage,
    Initializable,
    OwnerRole,
    BurnerRole,
    ValidatorRole,
    Pausable
{
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    // ============ Events ============

    /// @dev Emitted when batch of votes (block) is submitted by actor
    event Lock(address account, bytes32 indexed hash, uint256 amount);

    /// @dev Emitted when protocol calls unlock function which usually means consensus has been reached
    event Unlock(address account, bytes32 indexed hash, uint256 rewardedAmount);

    /// @dev Emitted when verifier votes against the consensus
    event Slashed(address account, bytes32 indexed hash, uint256 amount);

    /// @dev Emitted when user pre-stakes his account, usaully on first enter
    event Staked(address indexed account, uint256 amount);

    /**
     * @dev Emitted when user claims unlocked amount
     */
    event Claimed(address indexed account, uint256 amount);

    function initialize(address goldenTokenContractAddress) public initializer {
        require(
            goldenTokenContractAddress != address(0),
            'initialize: invalid address'
        );
        gldErc20Address = goldenTokenContractAddress;
        OwnerRole._addOwner(msg.sender);
    }

    /// @notice pre-stake minimal amount to be able to join & use the protocol
    /// @dev Initially pre-staked amount is not locked
    function preStake(uint256 amount) public {
        IGoldenToken gldToken = IGoldenToken(gldErc20Address);
        stake[msg.sender] += amount;
        emit Staked(msg.sender, amount);

        TokenUtils.pullTokens(gldToken, amount);
    }

    /// @notice Lock stake until consensus is reached and protocol calls unlock function
    /// @dev Lock stake against block of votes
    function lockStake(bytes32 hash, uint256 amount) public {
        address account = msg.sender;

        require(amount > 0 && amount <= stake[account], 'lock: invalid amount');
        require(lockedStake[account][hash] == 0, 'lock: duplicate entry');

        stake[account] -= amount;
        lockedStake[account][hash] += amount;

        emit Lock(account, hash, amount);
    }

    /// @notice Unlock locked stake making it claimable
    function unlockStake(
        address account,
        bytes32 hash,
        uint256 amount,
        uint256 reward
    ) public onlyValidator {
        uint256 stakeLocked = lockedStake[account][hash];

        require(stakeLocked > 0, 'unlock: cannot unlock non existing stake');
        require(amount <= stakeLocked, 'unlock: exceeds total locked stake');

        // Remove amount from locked stake
        lockedStake[account][hash] -= amount;

        uint256 totalReward = _calculateReward(amount, reward);
        stake[account] += totalReward;
        emit Unlock(account, hash, totalReward);
    }

    /// @notice Slashing and burning locked stake
    /// @dev Only locked stake can be slashed & burned
    function slash(address account, bytes32 hash, uint256 amount)
        public
        onlyValidator
    {
        IGoldenToken gldToken = IGoldenToken(gldErc20Address);
        uint256 stakeLocked = lockedStake[account][hash];
        require(stakeLocked > 0, 'slash: cannot slash 0 locked stake');
        require(amount <= stakeLocked, 'slash: exceeds balance');

        lockedStake[account][hash] -= amount;
        emit Slashed(account, hash, amount);

        TokenUtils.burnTokens(gldToken, amount);
    }

    /// @notice Claim GLD tokens that are unlocked or are pre-staked but hasn't been locked yet
    /// @dev in order to claim with reward, smart-contract needs to have buffer tokens pre-allocated
    function claim(uint256 amount) public whenNotPaused {
        IGoldenToken gldToken = IGoldenToken(gldErc20Address);
        uint256 unlockedAmount = this.getClaimableStake(msg.sender);

        require(unlockedAmount > 0, 'claim: nothing to claim');
        require(amount <= unlockedAmount, 'claim: exceeds balance');

        _afterClaim(msg.sender, amount);
        emit Claimed(msg.sender, amount);

        TokenUtils.pushTokens(gldToken, msg.sender, amount);
    }

    function getLockedStake(address account, bytes32 hash)
        external
        view
        returns (uint256)
    {
        return lockedStake[account][hash];
    }

    function getClaimableStake(address account)
        external
        view
        returns (uint256)
    {
        return stake[account];
    }

    /**
     * @notice Calculate reward based on amount that has been unlocked
     * @param unlockedStakeAmount - Amount of locked-stake that has been unlocked by the protocol
     * @param reward - Percent of reward eg. 2 would equal to 20% of the locked stake
     */
    function _calculateReward(uint256 unlockedStakeAmount, uint256 reward)
        private
        pure
        returns (uint256)
    {
        return unlockedStakeAmount + ((unlockedStakeAmount * reward) / 100);
    }

    /**
     * @dev Change `stake` state after successful claim,
     * if amountToClaim equals to 0, get all claimable amount.
     */
    function _afterClaim(address account, uint256 amount) private {
        uint256 amountToClaim = stake[account] - amount;
        if (amountToClaim <= 0) {
            stake[account] = 0;
        } else {
            stake[account] = amountToClaim;
        }
    }
}
