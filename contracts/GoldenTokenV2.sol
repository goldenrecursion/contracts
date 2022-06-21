// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "./GoldenToken.sol";

/// @custom:security-contact security@golden.com
contract GoldenTokenV2 is GoldenToken {
    string public newValue;

    function setNewValue(string memory newerValue) external {
        newValue = newerValue;
    }

}
