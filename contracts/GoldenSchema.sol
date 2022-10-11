// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

import '@openzeppelin/contracts/access/Ownable.sol';

import './libraries/Bytes16Set.sol';

/// @custom:security-contact security@golden.com
contract GoldenSchema is Ownable {
    using Bytes16Set for Bytes16Set.Set;
    Bytes16Set.Set _predicateIDs;
    mapping(bytes16 => bytes32) public predicateIDToLatestCID;

    struct Predicate {
        bytes16 predicateID;
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
}
