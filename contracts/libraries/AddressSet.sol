// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.16;

// Based on: https://github.com/rob-Hitchens/UnorderedKeySet/blob/master/contracts/HitchensUnorderedAddressSet.sol

library AddressSet {
    struct Set {
        mapping(address => uint256) keyPointers;
        address[] keyList;
    }

    function insert(Set storage self, address key) internal {
        require(key != address(0), 'UnorderedKeySet(100) - Key cannot be 0x0');
        require(
            !exists(self, key),
            'UnorderedAddressSet(101) - Address (key) already exists in the set.'
        );
        self.keyList.push(key);
        self.keyPointers[key] = self.keyList.length - 1;
    }

    function upsert(Set storage self, address key) internal {
        if (!exists(self, key)) {
            insert(self, key);
        }
    }

    function remove(Set storage self, address key) internal {
        require(
            exists(self, key),
            'UnorderedKeySet(102) - Address (key) does not exist in the set.'
        );
        address keyToMove = self.keyList[count(self) - 1];
        uint256 rowToReplace = self.keyPointers[key];
        self.keyPointers[keyToMove] = rowToReplace;
        self.keyList[rowToReplace] = keyToMove;
        delete self.keyPointers[key];
        self.keyList.pop();
    }

    function count(Set storage self) internal view returns (uint256) {
        return (self.keyList.length);
    }

    function exists(Set storage self, address key)
        internal
        view
        returns (bool)
    {
        if (self.keyList.length == 0) return false;
        return self.keyList[self.keyPointers[key]] == key;
    }

    function keyAtIndex(Set storage self, uint256 index)
        internal
        view
        returns (address)
    {
        return self.keyList[index];
    }
}
