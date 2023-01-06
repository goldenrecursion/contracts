// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import {MerkleProof} from '@openzeppelin/contracts/utils/cryptography/MerkleProof.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import './IVotingController.sol';
import {IERC20, SafeERC20} from '@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol';

error AlreadyClaimed();
error InvalidProof();

/// @custom:security-contact security@golden.co
contract VotingController is
    Initializable,
    OwnableUpgradeable,
    IVotingController
{
    using SafeERC20 for IERC20;
    using Counters for Counters.Counter;

    // ============ Private Storage ============

    address private _token;
    mapping(uint256 => bytes32) private _merkleRoots;
    Counters.Counter private _epochIds;

    // This is a mapping from epochIds to a packed array of booleans.
    mapping(uint256 => mapping(uint256 => uint256))
        private claimedBitMapByEpoch;

    function getToken() external view returns (address) {
        return _token;
    }

    function setToken(address token) external onlyOwner {
        _token = token;
    }

    function getLastEpoch() external view returns (uint256) {
        return _epochIds.current();
    }

    function getMerkleRoot(uint256 epochId) external view returns (bytes32) {
        return _merkleRoots[epochId];
    }

    function initialize(address token) public initializer {
        _token = token;
        __Ownable_init();
    }

    function addMerkleRoot(bytes32 merkleRoot) external onlyOwner {
        require(merkleRoot.length > 0, 'Empty merkleRoot');
        // Start at index 1
        _epochIds.increment();
        uint256 newEpochId = _epochIds.current();
        _merkleRoots[newEpochId] = merkleRoot;
        emit MerkleRootAdded(newEpochId, merkleRoot);
    }

    function isClaimed(uint256 epochId, uint256 index)
        public
        view
        returns (bool)
    {
        uint256 claimedWordIndex = index / 256;
        uint256 claimedBitIndex = index % 256;
        uint256 claimedWord = claimedBitMapByEpoch[epochId][claimedWordIndex];
        uint256 mask = (1 << claimedBitIndex);
        return claimedWord & mask == mask;
    }

    function _setClaimed(uint256 epochId, uint256 index) private {
        uint256 claimedWordIndex = index / 256;
        uint256 claimedBitIndex = index % 256;
        claimedBitMapByEpoch[epochId][claimedWordIndex] =
            claimedBitMapByEpoch[epochId][claimedWordIndex] |
            (1 << claimedBitIndex);
    }

    function claim(
        uint256 epochId,
        uint256 index,
        address account,
        uint256 amount,
        bytes32[] calldata merkleProof
    ) public {
        if (isClaimed(index, epochId)) revert AlreadyClaimed();
        bytes32 merkleRoot = _merkleRoots[epochId];
        require(merkleRoot.length > 0, 'Empty merkleRoot');

        // Verify the merkle proof.
        bytes32 node = keccak256(abi.encodePacked(index, account, amount));
        require(node.length > 0, 'Empty node');
        if (!MerkleProof.verify(merkleProof, merkleRoot, node))
            revert InvalidProof();

        // Mark it claimed and send the token.
        _setClaimed(epochId, index);
        IERC20(_token).safeTransfer(account, amount);

        emit Claimed(epochId, index, account, amount);
    }
}
