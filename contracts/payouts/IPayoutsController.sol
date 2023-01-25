// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.16;

// Allows anyone to claim a token if they exist in a merkle root.
interface IPayoutsController {
    // Returns the address of the token distributed by this contract.
    function getToken() external view returns (address);

    // Returns the merkle root of the merkle tree containing account balances available to claim.
    function getMerkleRoot(uint256 epochId) external view returns (bytes32);

    // Returns the last epoch added.
    function getLastEpoch() external view returns (uint256);

    // Returns true if the index has been marked claimed.
    function isClaimed(uint256 epochId, uint256 index)
        external
        view
        returns (bool);

    // Add a new Merkle Root and epoch.
    function addMerkleRoot(bytes32 merkleRoot) external;

    // Claim the given amount of the token to the given address. Reverts if the inputs are invalid.
    function claim(
        uint256 epochId,
        uint256 index,
        address account,
        uint256 amount,
        bytes32[] calldata merkleProof
    ) external;

    event Claimed(
        uint256 epochId,
        uint256 index,
        address account,
        uint256 amount
    );
    event MerkleRootAdded(uint256 newEpochId, bytes32 merkleRoot);
    event RewardPricesChanged(uint256[] rewardPrices);
}
