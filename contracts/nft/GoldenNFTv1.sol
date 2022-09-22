// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import '@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import 'hardhat/console.sol';
import './IStakeable.sol';

contract GoldenNFTv1 is OwnableUpgradeable {
    using Counters for Counters.Counter;

    // ============ Mutable Storage ============
    Counters.Counter private _tokenIds;
    address public _goldenTokenContractAddress;
    uint256 public _totalSupply;
    string private _name;
    string private _symbol;

    struct CeramicInfo {
        string ceramicId;
        string entityId;
    }

    // TODO: string means more gas, to be improved
    mapping(uint256 => CeramicInfo) private _tokenToCeramic;
    mapping(string => uint256) private _entityToToken;
    mapping(string => bool) private _ceramicIdsThatExist;

    string[] public _ceramicIds;

    // ================= Events ==================

    event GoldenTokenContractAddressChanged(
        address indexed goldenTokenContractAddress
    );
    event Minted(uint256 indexed tokenId, string ceramicId, string entityId);
    event Burned(uint256 indexed tokenId, string ceramicId, string entityId);

    // ============ Modifiers ============

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyStaked(uint256 withMinimumOf) {
        require(
            IStakeable(_goldenTokenContractAddress).stakeOf(msg.sender) >=
                withMinimumOf,
            'Not enough staked'
        );
        console.log(
            'Stake of me',
            IStakeable(_goldenTokenContractAddress).stakeOf(msg.sender)
        );
        _;
    }

    /**
     * @dev Upgradeable initializer
     */
    function initialize(address goldenTokenContractAddress) public initializer {
        require(
            goldenTokenContractAddress != address(0),
            'Zero address not allowed'
        );
        // Start at 1
        _tokenIds.increment();
        __Ownable_init();
        __ERC721_init('Golden Entity', 'GLDE');
        _goldenTokenContractAddress = goldenTokenContractAddress;
    }

    /**
     * @dev Initializes the contract by setting a `name` and a `symbol` to the token collection.
     */
    function __ERC721_init(string memory name_, string memory symbol_)
        internal
        onlyInitializing
    {
        __ERC721_init_unchained(name_, symbol_);
    }

    function __ERC721_init_unchained(string memory name_, string memory symbol_)
        internal
        onlyInitializing
    {
        _name = name_;
        _symbol = symbol_;
    }

    function name() public view virtual returns (string memory) {
        return _name;
    }

    function symbol() public view virtual returns (string memory) {
        return _symbol;
    }

    function getCeramicIdsLength() public view virtual returns (uint256) {
        return _ceramicIds.length;
    }

    function doesCeramicIdExist(string calldata ceramicId)
        public
        view
        virtual
        returns (bool)
    {
        return _ceramicIdsThatExist[ceramicId];
    }

    function getCeramicId(uint256 tokenId)
        public
        view
        virtual
        returns (string memory)
    {
        return _tokenToCeramic[tokenId].ceramicId;
    }

    function getEntityId(uint256 tokenId)
        public
        view
        virtual
        returns (string memory)
    {
        return _tokenToCeramic[tokenId].entityId;
    }

    function getTokenId(string calldata entityId)
        public
        view
        virtual
        returns (uint256)
    {
        return _entityToToken[entityId];
    }

    function mint(string memory ceramicId, string memory entityId)
        public
        onlyOwner
        returns (uint256)
    {
        require(bytes(ceramicId).length != 0, 'ceramicId cannot be empty');
        require(bytes(entityId).length != 0, 'entityId cannot be empty');
        uint256 newTokenId = _tokenIds.current();
        _entityToToken[entityId] = newTokenId;
        _tokenToCeramic[newTokenId] = CeramicInfo(ceramicId, entityId);
        _tokenIds.increment();
        if (!_ceramicIdsThatExist[ceramicId]) {
            _ceramicIdsThatExist[ceramicId] = true;
            _ceramicIds.push(ceramicId);
        }
        // slither-disable-next-line costly-loop
        _totalSupply = _totalSupply + 1;
        emit Minted(newTokenId, ceramicId, entityId);
        return newTokenId;
    }

    function burn(uint256 tokenId) public onlyOwner {
        require(
            bytes(_tokenToCeramic[tokenId].ceramicId).length != 0,
            'burn nonexistent token'
        );
        CeramicInfo memory info = _tokenToCeramic[tokenId];
        string memory ceramicId = info.ceramicId;
        string memory entityId = info.entityId;
        // slither-disable-next-line costly-loop
        delete _entityToToken[ceramicId];
        // slither-disable-next-line costly-loop
        delete _tokenToCeramic[tokenId];
        // slither-disable-next-line costly-loop
        _totalSupply = _totalSupply - 1;
        emit Burned(tokenId, ceramicId, entityId);
    }

    /**
     * @dev See {IERC721Metadata-tokenURI}.
     */
    function tokenURI(uint256 tokenId) public view returns (string memory) {
        require(_exists(tokenId), 'tokenId does not exist');
        return _tokenToCeramic[tokenId].ceramicId;
    }

    function setGoldenTokenContractAddress(
        address newGoldenTokenContractAddress
    ) external onlyOwner {
        require(
            newGoldenTokenContractAddress != address(0),
            'Zero address not allowed'
        );
        _goldenTokenContractAddress = newGoldenTokenContractAddress;
        emit GoldenTokenContractAddressChanged(_goldenTokenContractAddress);
    }

    function getGoldenTokenContractAddress() external view returns (address) {
        return _goldenTokenContractAddress;
    }

    /**
     * @dev Returns whether `tokenId` exists.
     *
     * Tokens can be managed by their owner or approved accounts via {approve} or {setApprovalForAll}.
     *
     * Tokens start existing when they are minted (`_mint`),
     * and stop existing when they are burned (`_burn`).
     */
    function _exists(uint256 tokenId) internal view virtual returns (bool) {
        return bytes(_tokenToCeramic[tokenId].ceramicId).length > 0;
    }

    /**
     * bulk mint users' NFT.
     */
    function bulkMint(CeramicInfo[] calldata infos) external onlyOwner {
        require(infos.length > 0, 'bulkMint 0 NFTs');
        for (uint256 i = 0; i < infos.length; i++) {
            CeramicInfo memory info = infos[i];
            string memory ceramicId = info.ceramicId;
            string memory entityId = info.entityId;
            mint(ceramicId, entityId);
        }
    }

    /**
     * bulk burn users' NFT.
     */
    function bulkBurn(uint256[] calldata tokenIds) external onlyOwner {
        require(tokenIds.length > 0, 'bulkBurn 0 NFTs');
        for (uint256 i = 0; i < tokenIds.length; i++) {
            uint256 tokenId = tokenIds[i];
            burn(tokenId);
        }
    }

    /**
     * @dev This empty reserved space is put in place to allow future versions to add new
     * variables without shifting down storage in the inheritance chain.
     * See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps
     */
    //slither-disable-next-line unused-state
    uint256[44] private __gap;
}
