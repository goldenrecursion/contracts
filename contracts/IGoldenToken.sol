// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

import '@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol';

interface IGoldenToken is IERC20Upgradeable {
    // ============ Mint and Burn ============
    function mint(address to, uint256 amount) external;

    function burn(address to, uint256 amount) external;
}
