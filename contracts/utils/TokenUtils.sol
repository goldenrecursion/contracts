// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

import '../IGoldenToken.sol';

library TokenUtils {
    // @dev Transfer tokens from address to the contract
    function pullTokens(IGoldenToken goldenToken, uint256 amount) internal {
        if (amount > 0) {
            require(
                goldenToken.transferFrom(msg.sender, address(this), amount),
                'transferFrom: failed'
            );
        }
    }

    // @dev Send tokens from contract to a receiving address.
    function pushTokens(IGoldenToken goldenToken, address to, uint256 amount)
        internal
    {
        if (amount > 0) {
            require(goldenToken.transfer(to, amount), 'transfer: failed');
        }
    }

    // @dev Burn held tokens
    function burnTokens(IGoldenToken goldenToken, uint256 amount) internal {
        if (amount > 0) {
            goldenToken.burn(address(this), amount);
        }
    }
}
