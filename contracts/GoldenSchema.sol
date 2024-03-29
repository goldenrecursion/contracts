// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.16;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';

import './libraries/Bytes16Set.sol';

/// @custom:security-contact security@golden.com
//slither-disable-next-line unused-state
contract GoldenSchema is OwnableUpgradeable {
    using Bytes16Set for Bytes16Set.Set;
    Bytes16Set.Set _predicateIDs;
    mapping(bytes16 => bytes32) public predicateIDToLatestCID;

    Bytes16Set.Set _entityTypeIDs;
    mapping(bytes16 => bytes32) public entityTypeIDToLatestCID;

    struct Predicate {
        bytes16 predicateID;
        bytes32 latestCID;
    }

    struct EntityType {
        bytes16 entityTypeID;
        bytes32 latestCID;
    }

    event PredicateAdded(
        bytes16 indexed predicateID,
        bytes32 indexed latestCID
    );
    event PredicateUpdated(
        bytes16 indexed predicateID,
        bytes32 indexed latestCID
    );
    event PredicateRemoved(
        bytes16 indexed predicateID,
        bytes32 indexed latestCID
    );

    event EntityTypeAdded(
        bytes16 indexed entityTypeID,
        bytes32 indexed latestCID
    );
    event EntityTypeUpdated(
        bytes16 indexed entityTypeID,
        bytes32 indexed latestCID
    );
    event EntityTypeRemoved(
        bytes16 indexed entityTypeID,
        bytes32 indexed latestCID
    );

    /**
     * @dev Upgradeable initializer
     */
    function initialize(
        Predicate[] memory initialPredicates,
        EntityType[] memory initialEntityTypes
    ) public initializer {
        __Ownable_init();

        uint256 predicateCount = initialPredicates.length;
        for (uint256 i = 0; i < predicateCount; i++) {
            addPredicate(
                initialPredicates[i].predicateID,
                initialPredicates[i].latestCID
            );
        }

        uint256 entityTypeCount = initialEntityTypes.length;
        for (uint256 i = 0; i < entityTypeCount; i++) {
            addEntityType(
                initialEntityTypes[i].entityTypeID,
                initialEntityTypes[i].latestCID
            );
        }
    }

    function predicates() public view returns (Predicate[] memory) {
        Predicate[] memory _predicates = new Predicate[](
            _predicateIDs.keyList.length
        );
        for (uint256 i = 0; i < _predicates.length; i++) {
            _predicates[i].predicateID = _predicateIDs.keyAtIndex(i);
            _predicates[i].latestCID = predicateIDToLatestCID[
                _predicateIDs.keyAtIndex(i)
            ];
        }
        return _predicates;
    }

    function addPredicate(bytes16 predicateID, bytes32 predicateCID)
        public
        onlyOwner
    {
        _predicateIDs.insert(predicateID);
        predicateIDToLatestCID[predicateID] = predicateCID;
        emit PredicateAdded(predicateID, predicateCID);
    }

    function updatePredicate(bytes16 predicateID, bytes32 predicateCID)
        public
        onlyOwner
    {
        predicateIDToLatestCID[predicateID] = predicateCID;
        emit PredicateUpdated(predicateID, predicateCID);
    }

    function removePredicate(bytes16 predicateID) public onlyOwner {
        _predicateIDs.remove(predicateID);
        emit PredicateRemoved(predicateID, predicateIDToLatestCID[predicateID]);
    }

    function entityTypes() public view returns (EntityType[] memory) {
        EntityType[] memory _entityTypes = new EntityType[](
            _entityTypeIDs.keyList.length
        );
        for (uint256 i = 0; i < _entityTypes.length; i++) {
            _entityTypes[i].entityTypeID = _entityTypeIDs.keyAtIndex(i);
            _entityTypes[i].latestCID = entityTypeIDToLatestCID[
                _entityTypeIDs.keyAtIndex(i)
            ];
        }
        return _entityTypes;
    }

    function addEntityType(bytes16 entityTypeID, bytes32 entityTypeCID)
        public
        onlyOwner
    {
        _entityTypeIDs.insert(entityTypeID);
        entityTypeIDToLatestCID[entityTypeID] = entityTypeCID;
        emit EntityTypeAdded(entityTypeID, entityTypeCID);
    }

    function updateEntityType(bytes16 entityTypeID, bytes32 entityTypeCID)
        public
        onlyOwner
    {
        entityTypeIDToLatestCID[entityTypeID] = entityTypeCID;
        emit EntityTypeUpdated(entityTypeID, entityTypeCID);
    }

    function removeEntityType(bytes16 entityTypeID) public onlyOwner {
        _entityTypeIDs.remove(entityTypeID);
        emit EntityTypeRemoved(
            entityTypeID,
            entityTypeIDToLatestCID[entityTypeID]
        );
    }

    function bulkAddEntityTypes(EntityType[] calldata types)
        external
        onlyOwner
    {
        require(types.length > 0, 'bulk add 0 entity Types');
        for (uint256 i = 0; i < types.length; i++) {
            EntityType memory entityType = types[i];
            addEntityType(entityType.entityTypeID, entityType.latestCID);
        }
    }

    function bulkAddPredicates(Predicate[] calldata predcts)
        external
        onlyOwner
    {
        require(predcts.length > 0, 'bulk add 0 predicates');
        for (uint256 i = 0; i < predcts.length; i++) {
            Predicate memory predicate = predcts[i];
            addPredicate(predicate.predicateID, predicate.latestCID);
        }
    }

    function bulkRemoveEntityTypes(bytes16[] calldata ids) external onlyOwner {
        require(ids.length > 0, 'bulk remove 0 entity Types');
        for (uint256 i = 0; i < ids.length; i++) {
            removeEntityType(ids[i]);
        }
    }

    function bulkRemovePredicates(bytes16[] calldata ids) external onlyOwner {
        require(ids.length > 0, 'bulk remove 0 predicates');
        for (uint256 i = 0; i < ids.length; i++) {
            removePredicate(ids[i]);
        }
    }
}
