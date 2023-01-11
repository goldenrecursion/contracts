// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/utils/math/SafeMath.sol';
import './IGoldenStaking.sol';

/// @custom:security-contact security@golden.co
contract GoldenStaking is Initializable, OwnableUpgradeable, IGoldenStaking {
    // calling SafeMath will add extra functions to the uint data type
    using SafeMath for uint256;

    mapping(address => uint256) public balances;
    mapping(address => uint256) public lockedUntilTimes;

    uint256 public minimumStaking;
    // How long should the staking be locked for, in seconds
    uint256 public stakingTime;

    function initialize(uint256 minimumStaking_, uint256 stakingTime_)
        public
        initializer
    {
        __Ownable_init();
        minimumStaking = minimumStaking_;
        stakingTime = stakingTime_;
    }

    function setMinimumStaking(uint256 minimumStaking_) external onlyOwner {
        minimumStaking = minimumStaking_;
        emit MinimumStakingChanged(minimumStaking);
    }

    function setStakingTime(uint256 stakingTime_) external onlyOwner {
        stakingTime = stakingTime_;
        emit StakingTimeChanged(stakingTime);
    }

    receive() external payable {
        address account = msg.sender;
        uint256 amount = msg.value;
        require(balances[account] == 0, 'Already deposited');

        balances[account] += amount;
        // Updates locktime ~ 2 months from now
        uint256 lockedUntil = block.timestamp + stakingTime;
        lockedUntilTimes[account] = lockedUntil;
        emit Received(msg.sender, msg.value, lockedUntil);
    }

    function withdraw() public {
        address account = msg.sender;
        require(balances[account] > 0, 'Insufficient funds');

        require(
            block.timestamp > lockedUntilTimes[account],
            'Lock time has not expired'
        );

        uint256 amount = balances[account];
        balances[account] = 0;

        // send the ether back to the sender
        (bool sent, ) = account.call{value: amount}('');
        require(sent, 'Failed to send ether');
        emit Withdrawn(account, amount);
    }

    // If anyone accidentally sends tokens to this contract, this function can be used
    // to recover the funds and then sent to the claiming user.
    function recoverERC20(address tokenAddress) external onlyOwner {
        IERC20 token = IERC20(tokenAddress);
        uint256 amount = token.balanceOf(address(this));
        token.transfer(owner(), amount);
        emit TokensRecovered(tokenAddress, amount);
    }
}
