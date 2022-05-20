// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/access/Ownable.sol';

import './libraries/Bytes32Set.sol';

/// @custom:security-contact security@golden.com
contract GoldenSchema is Ownable {
    // More info on storig IPFS hashes as bytes32:
    // https://ethereum.stackexchange.com/a/17112/90609
    using Bytes32Set for Bytes32Set.Set;
    Bytes32Set.Set _predicates;
    Bytes32Set.Set _entityTypes;
    mapping(bytes32 => Bytes32Set.Set) _predicatesByEntityType;

    constructor(
        bytes32[] memory initialPredicates,
        bytes32[] memory initialEntityTypes
    ) Ownable() {
        uint256 predicateCount = initialPredicates.length;
        for (uint256 i = 0; i < predicateCount; i++) {
            addPredicate(initialPredicates[i]);
        }

        uint256 entityTypesCount = initialEntityTypes.length;
        for (uint256 i = 0; i < entityTypesCount; i++) {
            addEntityType(initialEntityTypes[i]);
        }
    }

    function predicates() public view returns (bytes32[] memory) {
        return _predicates.keyList;
    }

    function addPredicate(bytes32 predicateHash) public onlyOwner {
        _predicates.insert(predicateHash);
    }

    function removePredicate(bytes32 predicateHash) public onlyOwner {
        _predicates.remove(predicateHash);
    }

    function entityTypes() public view returns (bytes32[] memory) {
        return _entityTypes.keyList;
    }

    function addEntityType(bytes32 entityTypeHash) public onlyOwner {
        _entityTypes.insert(entityTypeHash);
    }

    function removeEntityType(bytes32 entityTypeHash) public onlyOwner {
        _entityTypes.remove(entityTypeHash);
    }

    function predicatesByEntityType(bytes32 entityTypeHash)
        public
        view
        returns (bytes32[] memory)
    {
        return _predicatesByEntityType[entityTypeHash].keyList;
    }

    function addPredicateToEntityType(
        bytes32 predicateHash,
        bytes32 entityTypeHash
    ) public onlyOwner {
        _predicatesByEntityType[entityTypeHash].insert(predicateHash);
    }

    function removePredicateFromEntityType(
        bytes32 predicateHash,
        bytes32 entityTypeHash
    ) public onlyOwner {
        _predicatesByEntityType[entityTypeHash].remove(predicateHash);
    }
}
