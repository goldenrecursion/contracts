// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/access/Ownable.sol';

import './libraries/Bytes32Set.sol';

/// @custom:security-contact security@golden.com
contract GoldenSchema is Ownable {
    using Bytes32Set for Bytes32Set.Set;
    Bytes32Set.Set _predicateIDs;
    mapping(bytes32 => bytes32) public predicateIDToLatestCID;

    struct Predicate {
        bytes32 predicateID;
        bytes32 latestCID;
    }

    event PredicateAdded(
        bytes32 indexed predicateID,
        bytes32 indexed latestCID
    );
    event PredicateUpdated(
        bytes32 indexed predicateID,
        bytes32 indexed latestCID
    );
    event PredicateRemoved(
        bytes32 indexed predicateID,
        bytes32 indexed latestCID
    );

    constructor(Predicate[] memory initialPredicates) Ownable() {
        uint256 predicateCount = initialPredicates.length;
        for (uint256 i = 0; i < predicateCount; i++) {
            addPredicate(
                initialPredicates[i].predicateID,
                initialPredicates[i].latestCID
            );
        }
    }

    function predicates() public view returns (Predicate[] memory) {
        Predicate[] memory _predicates = new Predicate[](
            _predicateIDs.keyList.length
        );
        for (uint256 i = 0; i < _predicates.length; i++) {
            _predicates[i].predicateID = _predicateIDs.keyList[i];
            _predicates[i].latestCID = predicateIDToLatestCID[
                _predicateIDs.keyList[i]
            ];
        }
        return _predicates;
    }

    function addPredicate(bytes32 predicateID, bytes32 predicateCID)
        public
        onlyOwner
    {
        _predicateIDs.insert(predicateID);
        predicateIDToLatestCID[predicateID] = predicateCID;
        emit PredicateAdded(predicateID, predicateCID);
    }

    function updatePredicate(bytes32 predicateID, bytes32 predicateCID)
        public
        onlyOwner
    {
        predicateIDToLatestCID[predicateID] = predicateCID;
        emit PredicateUpdated(predicateID, predicateCID);
    }

    function removePredicate(bytes32 predicateID) public onlyOwner {
        _predicateIDs.remove(predicateID);
        emit PredicateRemoved(predicateID, predicateIDToLatestCID[predicateID]);
    }

    function getPredicateLatestCID(bytes32 predicateID)
        public
        view
        returns (bytes32)
    {
        return predicateIDToLatestCID[predicateID];
    }
}
