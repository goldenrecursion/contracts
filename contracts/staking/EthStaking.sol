// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.16;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/utils/math/SafeMath.sol';
import './IEthStaking.sol';

contract EthStaking is Initializable, OwnableUpgradeable, IEthStaking {
    mapping(address => uint256) public balances;
    mapping(address => uint256) public lockedUntilBlock;

    uint256 public minimumStaking;
    // How long should the staking be locked for, in blocks
    uint256 public stakingPeriod;

    function initialize(uint256 minimumStaking_, uint256 stakingPeriod_)
        public
        initializer
    {
        __Ownable_init();
        minimumStaking = minimumStaking_;
        stakingPeriod = stakingPeriod_;
    }

    function setMinimumStaking(uint256 minimumStaking_) external onlyOwner {
        minimumStaking = minimumStaking_;
        emit MinimumStakingChanged(minimumStaking);
    }

    function setStakingPeriod(uint256 stakingPeriod_) external onlyOwner {
        stakingPeriod = stakingPeriod_;
        emit StakingPeriodChanged(stakingPeriod);
    }

    receive() external payable {
        address account = msg.sender;
        uint256 amount = msg.value;
        require(amount >= minimumStaking, 'Min Staking violation');
        balances[account] += amount;
        uint256 lockedUntil = block.number + stakingPeriod;
        lockedUntilBlock[account] = lockedUntil;
        emit Received(account, amount, lockedUntil);
    }

    function withdraw() external {
        address account = msg.sender;
        uint256 amount = balances[account];
        require(amount > 0, 'Not Staked');

        require(
            block.number > lockedUntilBlock[account],
            'Lock time has not expired'
        );
        balances[account] = 0;
        // send the ether back to the sender
        emit Withdrawn(account, amount);
        // (bool sent, ) = account.call{value: amount}(''); // this goes from account
        bool sent = payable(account).send(amount);
        require(sent, 'Failed to send ether');
    }

    /**
      If anyone accidentally sends tokens to this contract, this function can be used
      to recover the funds and then send them to the claiming user.
     */
    function recoverERC20(address tokenAddress) external onlyOwner {
        IERC20 token = IERC20(tokenAddress);
        uint256 amount = token.balanceOf(address(this));
        // Only owner can call this and we recover all the balance to the owner anyway
        // slither-disable-next-line reentrancy-events
        require(token.transfer(owner(), amount), 'Failed to recover');
        emit TokensRecovered(tokenAddress, amount);
    }
}
