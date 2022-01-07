// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

contract GoldenToken is ERC777 {
    constructor(uint256 initialSupply, address[] memory defaultOperators)
    ERC777("GoldenToken", "GLD", defaultOperators)
    {
        _mint(msg.sender, initialSupply * 10 ** decimals(), "", "");
    }
}
