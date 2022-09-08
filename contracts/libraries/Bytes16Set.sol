// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.4;

// Inspired by: https://github.com/rob-Hitchens/SetTypes

library Bytes16Set {
    struct Set {
        mapping(bytes16 => uint256) keyPointers;
        bytes16[] keyList;
    }

    /**
     * @notice insert a key.
     * @dev duplicate keys are not permitted.
     * @param self storage pointer to a Set.
     * @param key value to insert.
     */
    function insert(Set storage self, bytes16 key) internal {
        require(
            !exists(self, key),
            'Bytes16Set: key already exists in the set.'
        );
        self.keyPointers[key] = self.keyList.length;
        self.keyList.push(key);
    }

    /**
     * @notice remove a key.
     * @dev key to remove must exist.
     * @param self storage pointer to a Set.
     * @param key value to remove.
     */
    function remove(Set storage self, bytes16 key) internal {
        require(
            exists(self, key),
            'Bytes16Set: key does not exist in the set.'
        );
        uint256 last = count(self) - 1;
        uint256 rowToReplace = self.keyPointers[key];
        if (rowToReplace != last) {
            bytes16 keyToMove = self.keyList[last];
            self.keyPointers[keyToMove] = rowToReplace;
            self.keyList[rowToReplace] = keyToMove;
        }
        delete self.keyPointers[key];
        self.keyList.pop();
    }

    /**
     * @notice count the keys.
     * @param self storage pointer to a Set.
     */
    function count(Set storage self) internal view returns (uint256) {
        return (self.keyList.length);
    }

    /**
     * @notice check if a key is in the Set.
     * @param self storage pointer to a Set.
     * @param key value to check.
     * @return bool true: Set member, false: not a Set member.
     */
    function exists(Set storage self, bytes16 key)
        internal
        view
        returns (bool)
    {
        if (self.keyList.length == 0) return false;
        return self.keyList[self.keyPointers[key]] == key;
    }

    /**
     * @notice fetch a key by row (enumerate).
     * @param self storage pointer to a Set.
     * @param index row to enumerate. Must be < count() - 1.
     */
    function keyAtIndex(Set storage self, uint256 index)
        internal
        view
        returns (bytes16)
    {
        return self.keyList[index];
    }

    /**
     * @notice fetch a key by row (enumerate).
     * @param self storage pointer to a Set.
     * @param index row to enumerate. Must be < count() - 1.
     */
}
