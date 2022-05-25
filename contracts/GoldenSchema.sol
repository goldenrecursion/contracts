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

    struct PredicatesByEntityType {
        bytes32 entityType;
        bytes32[] predicates;
    }

    event PredicateAdded(bytes32 indexed predicateHash);
    event PredicateRemoved(bytes32 indexed predicateHash);
    event EntityTypeAdded(bytes32 indexed entityTypeHash);
    event EntityTypeRemoved(bytes32 indexed entityTypeHash);
    event EntityTypePredicateAdded(
        bytes32 indexed entityTypeHash,
        bytes32 indexed predicateHash
    );
    event EntityTypePredicateRemoved(
        bytes32 indexed entityTypeHash,
        bytes32 indexed predicateHash
    );

    constructor(
        bytes32[] memory initialPredicates,
        bytes32[] memory initialEntityTypes,
        PredicatesByEntityType[] memory initialPredicatesByEntityTypes
    ) Ownable() {
        uint256 predicateCount = initialPredicates.length;
        for (uint256 i = 0; i < predicateCount; i++) {
            addPredicate(initialPredicates[i]);
        }

        uint256 entityTypesCount = initialEntityTypes.length;
        for (uint256 i = 0; i < entityTypesCount; i++) {
            addEntityType(initialEntityTypes[i]);
        }

        for (uint256 i = 0; i < initialPredicatesByEntityTypes.length; i++) {
            for (
                uint256 j = 0;
                j < initialPredicatesByEntityTypes[i].predicates.length;
                j++
            ) {
                addPredicateToEntityType(
                    initialPredicatesByEntityTypes[i].predicates[j],
                    initialPredicatesByEntityTypes[i].entityType
                );
            }
        }
    }

    function predicates() public view returns (bytes32[] memory) {
        return _predicates.keyList;
    }

    function addPredicate(bytes32 predicateHash) public onlyOwner {
        _predicates.insert(predicateHash);
        emit PredicateAdded(predicateHash);
    }

    function removePredicate(bytes32 predicateHash) public onlyOwner {
        _predicates.remove(predicateHash);
        emit PredicateRemoved(predicateHash);
    }

    function entityTypes() public view returns (bytes32[] memory) {
        return _entityTypes.keyList;
    }

    function addEntityType(bytes32 entityTypeHash) public onlyOwner {
        _entityTypes.insert(entityTypeHash);
        emit EntityTypeAdded(entityTypeHash);
    }

    function removeEntityType(bytes32 entityTypeHash) public onlyOwner {
        _entityTypes.remove(entityTypeHash);
        emit EntityTypeRemoved(entityTypeHash);
    }

    function predicatesByEntityType(bytes32 entityTypeHash)
        public
        view
        returns (bytes32[] memory)
    {
        return _predicatesByEntityType[entityTypeHash].keyList;
    }

    function predicatesByEntityTypes()
        public
        view
        returns (PredicatesByEntityType[] memory)
    {
        PredicatesByEntityType[]
            memory _predicatesByEntityTypes = new PredicatesByEntityType[](
                _entityTypes.keyList.length
            );

        for (uint256 i = 0; i < _entityTypes.keyList.length; i++) {
            bytes32 entityTypeHash = _entityTypes.keyList[i];
            bytes32[] memory entityTypePredicates = predicatesByEntityType(
                entityTypeHash
            );
            _predicatesByEntityTypes[i] = PredicatesByEntityType(
                entityTypeHash,
                entityTypePredicates
            );
        }

        return _predicatesByEntityTypes;
    }

    function addPredicateToEntityType(
        bytes32 predicateHash,
        bytes32 entityTypeHash
    ) public onlyOwner {
        _predicatesByEntityType[entityTypeHash].insert(predicateHash);
        emit EntityTypePredicateAdded(entityTypeHash, predicateHash);
    }

    function removePredicateFromEntityType(
        bytes32 predicateHash,
        bytes32 entityTypeHash
    ) public onlyOwner {
        _predicatesByEntityType[entityTypeHash].remove(predicateHash);
        emit EntityTypePredicateRemoved(entityTypeHash, predicateHash);
    }
}
