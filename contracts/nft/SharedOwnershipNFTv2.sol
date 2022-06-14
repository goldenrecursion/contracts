// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "./SharedOwnershipNFTv1.sol";
import "hardhat/console.sol";

contract SharedOwnershipNFTv2 is SharedOwnershipNFTv1 {

  string private somethingElse;

  function getSomethingElse() public view returns(string memory) {
    return somethingElse;
  }
  
}