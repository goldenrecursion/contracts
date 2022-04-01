// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GoldenToken is Ownable, ERC777 {
  mapping(address => uint256) private _stakes;

  constructor(uint256 initialSupply, address[] memory defaultOperators)
    Ownable()
    ERC777("GoldenToken", "GLD", defaultOperators)
  {
    // `* 10**decimals()` ensures `initialSupply` is the same number as shown on etherscan.io
    _mint(_msgSender(), initialSupply * 10**decimals(), "", "");
  }

  function stake(uint256 amount) public payable {
    address account = _msgSender();
    burn(amount, "");
    _stakes[account] += amount;
  }

  function unstake(uint256 amount) public {
    address account = _msgSender();
    require(_stakes[account] >= amount, "Staking: exceeds balance");
    _stakes[account] -= amount;
    _mint(account, amount, "", "");
  }

  function stakeOf(address account) public view returns (uint256) {
    return _stakes[account];
  }

  function slash(address account, uint256 amount) public onlyOwner {
    _stakes[account] -= amount;
    // Keep total supply constant by giving the slashed tokens to owner.
    // This could be seen as a false incentive to slash users in owners benefit.
    _mint(owner(), amount, "", "");
  }
}
