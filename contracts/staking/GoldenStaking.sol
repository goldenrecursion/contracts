// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/utils/math/SafeMath.sol';
import './IGoldenStaking.sol';

contract GoldenStaking is Initializable, OwnableUpgradeable, IGoldenStaking {
    using SafeMath for uint256;

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
        require(balances[account] == 0, 'Already deposited');
        balances[account] += amount;
        uint256 lockedUntil = block.number + stakingPeriod;
        lockedUntilBlock[account] = lockedUntil;
        emit Received(account, amount, lockedUntil);
    }

    function withdraw() public {
        address account = msg.sender;
        require(balances[account] > 0, 'Insufficient funds');

        require(
            block.number > lockedUntilBlock[account],
            'Lock time has not expired'
        );

        uint256 amount = balances[account];
        balances[account] = 0;

        // send the ether back to the sender
        // slither-disable-next-line reentrancy-events
        bool sent = payable(account).send(amount);
        require(sent, 'Failed to send ether');
        emit Withdrawn(account, amount);
    }

    /**
      If anyone accidentally sends tokens to this contract, this function can be used
      to recover the funds and then send them to the claiming user.
     */
    function recoverERC20(address tokenAddress) external onlyOwner {
        IERC20 token = IERC20(tokenAddress);
        uint256 amount = token.balanceOf(address(this));
        // slither-disable-next-line reentrancy-events
        bool sent = token.transfer(owner(), amount);
        require(sent, 'Failed to recover');
        emit TokensRecovered(tokenAddress, amount);
    }
}
