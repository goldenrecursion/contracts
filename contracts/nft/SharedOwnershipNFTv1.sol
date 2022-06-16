// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "hardhat/console.sol";

contract SharedOwnershipNFTv1 is OwnableUpgradeable {
  string private _name;
  string private _symbol;

  struct Contribution {
    uint256 contributorNumber;
    mapping(address => uint256) contributions;
  }

  address private _treasuryAddress;
  // Treasury's ownership share
  uint16 private _treasuryShareBasisPoints;
  uint8 private constant MAX_CONTRIBUTION_WEIGHT = 100;

  uint256 private _totalWeight;

  // Mapping from token ID to owners address
  mapping(uint256 => Contribution) private contributionWeights;

  function initialize(address treasuryAddress, uint16 treasuryShareBasisPoints)
    public
    initializer
  {
    __Ownable_init();
    console.log("SharedOwnershipNFTv1 initialize");
    _treasuryAddress = treasuryAddress;
    _treasuryShareBasisPoints = treasuryShareBasisPoints;
    _name = "Golden Entity";
    _symbol = "GLDE";
  }

  /**
   * @dev See {IERC721Metadata-name}.
   */
  function name() public view returns (string memory) {
    return _name;
  }

  /**
   * @dev See {IERC721Metadata-symbol}.
   */
  function symbol() public view returns (string memory) {
    return _symbol;
  }

  function addWeight(
    uint256 tokenId,
    address contributor,
    uint256 weight
  ) public onlyOwner {
    require(weight > 0, "weight cannot be smaller than 1");
    require(contributor != address(0), "Contributor cannot be 0 address");
    require(
      weight <= MAX_CONTRIBUTION_WEIGHT,
      "weight cannot be larger than max"
    );
    uint256 userShare = contributionWeights[tokenId].contributions[contributor];
    if (userShare == 0) {
      // New contributor
      contributionWeights[tokenId].contributorNumber += 1;
    }
    contributionWeights[tokenId].contributions[contributor] = userShare + weight;
    _totalWeight += weight;
  }

  function getWeight(uint256 tokenId, address contributor)
    public
    view
    returns (uint256)
  {
    require(tokenId > 0, "tokenId cannot be 0");
    require(contributor != address(0), "Contributor cannot be 0 address");
    return contributionWeights[tokenId].contributions[contributor];
  }

  /**
   * @dev Returns whether `tokenId` exists.
   */
  function _exists(uint256 tokenId) internal view virtual returns (bool) {
    return contributionWeights[tokenId].contributorNumber > 0;
  }

  /**
   * @dev Safely mints `tokenId` and transfers it to `to`.
   *
   * Requirements:
   *
   * - `tokenId` must not exist.
   * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.
   *
   * Emits a {Transfer} event.
   */
  function _mint(address minter, uint256 tokenId) internal virtual {
    require(minter != address(0), "ERC721: mint to the zero address");
    require(!_exists(tokenId), "ERC721: token already minted");

    uint8 minterReward = 10;
    _totalWeight += minterReward;
    contributionWeights[tokenId].contributions[minter] = minterReward;
    contributionWeights[tokenId].contributorNumber += 1;
    // add event
  }
}
