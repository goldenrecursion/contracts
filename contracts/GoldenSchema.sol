// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.11;

import '@openzeppelin/contracts/access/Ownable.sol';

contract GoldenSchema is Ownable {
    // More info on storig IPFS hashes as bytes32:
    // https://ethereum.stackexchange.com/a/17112/90609
    mapping(bytes32 => bool) private _predicates;
    mapping(bytes32 => bool) private _entityTypes;
    mapping(bytes32 => mapping(bytes32 => bool)) private _predicatesByEntityType;

    constructor() Ownable() {}

    function addPredicate(bytes32 ipfsHash) public onlyOwner {
        _predicates[ipfsHash] = true;
    }

    function removePredicate(bytes32 ipfsHash) public onlyOwner {
        delete _predicates[ipfsHash];
    }

    function addEntityType(bytes32 ipfsHash) public onlyOwner {
        _entityTypes[ipfsHash] = true;
    }

    function removeEntityType(bytes32 ipfsHash) public onlyOwner {
        delete _entityTypes[ipfsHash];
    }

    function addPredicateToEntityType(
        bytes32 ipfsHash,
        bytes32 entityType
    ) public onlyOwner {
        _predicatesByEntityType[entityType][ipfsHash] = true;
    }

    function removePredicateFromEntityType(
        bytes32 ipfsHash,
        bytes32 entityType
    ) public onlyOwner {
        delete _predicatesByEntityType[entityType][ipfsHash];
    }
}
