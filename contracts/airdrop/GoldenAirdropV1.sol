// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.16;

import '../libraries/merkleDistributor/MerkleDistributor.sol';
import {IERC20, SafeERC20} from '@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol';

contract GoldenAirdropV1 is MerkleDistributor {
    using SafeERC20 for IERC20;

    // ===== Events =====
    event Withdrawn(address indexed withdrawnBy, uint256 amount);

    constructor(address token_, bytes32 merkleRoot_)
        MerkleDistributor(token_, merkleRoot_)
    {}

    // @notice Update MerkleRoot for newcomers
    // @dev Only owner can execute this function
    function updateMerkleRoot(bytes32 merkleRoot_) public {
        super._updateMerkleRoot(merkleRoot_);
    }

    function withdraw() public onlyOwner {
        uint256 amount = IERC20(token).balanceOf(address(this));
        IERC20(token).safeTransfer(owner(), amount);
        emit Withdrawn(msg.sender, amount);
    }
}
