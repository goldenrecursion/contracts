// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "hardhat/console.sol";

contract SharedOwnershipNFTv1 is OwnableUpgradeable {
  address public treasuryAddress;
  // Treasury's ownership share
  uint16 public treasuryShareBasisPoints;
  uint8 constant public MAX_CONTRIBUTION_WEIGHT = 100;
  uint public totalWeight;
  // User contribution weights
  mapping(address => uint16) public userContributionWeights;

  function initialize(address _treasuryAddress, uint16 _treasuryShareBasisPoints) public initializer {
    __Ownable_init();
    console.log("SharedOwnershipNFTv1 initialize");
    treasuryAddress = _treasuryAddress;
    treasuryShareBasisPoints = _treasuryShareBasisPoints;
  }

  function addWeight(address contributor, uint16 weight) public onlyOwner {
    require(weight > 0, "weight cannot be smaller than 1");
    require(contributor != address(0), "Contributor cannot be 0 address");
    require(weight <= MAX_CONTRIBUTION_WEIGHT, "weight cannot be larger than max");
    userContributionWeights[contributor] = userContributionWeights[contributor] + weight;
    totalWeight += weight;
  }

  // function getWeight(address contributor) public view {
  //   userContributionWeights[contributor];
  // }

  // function getTotalWeight

  // function getTreasuryAddress() public view returns(address) {
  //   return treasuryAddress;
  // }
  
  // function getOwnerShareBasisPoints() public view returns(uint16) {
  //   return treasuryShareBasisPoints;
  // }
  
}
