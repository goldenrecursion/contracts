// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "hardhat/console.sol";

contract SharedOwnershipNFTv1 is Initializable {

  string private some;

  function initialize() public initializer {
    console.log("SharedOwnershipNFTv1 initialize");
    some = "Something";
  }

  function getSome() public view returns(string memory) {
    return some;
  }
  
}