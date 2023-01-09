// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts/utils/math/SafeMath.sol';
import './IGoldenStaking.sol';

/// @custom:security-contact security@golden.co
contract GoldenStaking is Initializable, OwnableUpgradeable, IGoldenStaking {
    // calling SafeMath will add extra functions to the uint data type
    using SafeMath for uint256;

    mapping(address => uint256) public balances;

    mapping(address => uint256) public lockedUntilTimes;

    uint256 private _minimumStaking;
    uint256 private _stakingTime;

    function initialize(uint256 minimumStaking) public initializer {
        __Ownable_init();
        _minimumStaking = minimumStaking;
    }

    function getMinimumStaking() external view returns (uint256) {
        return _minimumStaking;
    }

    function setMinimumStaking(uint256 minimumStaking) external onlyOwner {
        _minimumStaking = minimumStaking;
        emit MinimumStakingChanged(minimumStaking);
    }

    function getStakingTime() external view returns (uint256) {
        return _stakingTime;
    }

    function setStakingTime(uint256 stakingTime) external onlyOwner {
        _stakingTime = stakingTime;
        emit StakingTimeChanged(stakingTime);
    }

    function deposit() external payable {
        address account = msg.sender;
        uint256 amount = msg.value;
        balances[account] += amount;
        // Updates locktime ~ 2 months from now
        uint256 lockedUntil = block.timestamp + _stakingTime;
        lockedUntilTimes[account] = lockedUntil;
        emit Deposited(account, amount, lockedUntil);
    }

    function withdraw() public {
        address account = msg.sender;
        require(balances[account] > 0, 'insufficient funds');

        require(
            block.timestamp > lockedUntilTimes[account],
            'lock time has not expired'
        );

        uint256 amount = balances[account];
        balances[account] = 0;

        // send the ether back to the sender
        (bool sent, ) = account.call{value: amount}('');
        require(sent, 'Failed to send ether');
        emit Withdrawn(account, amount);
    }
}
