// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.16;

import '@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import 'hardhat/console.sol';
import './IStakeable.sol';

contract GoldenNFT is OwnableUpgradeable, AccessControlUpgradeable {
    using Counters for Counters.Counter;

    bytes32 public constant MINTER_ROLE = keccak256('MINTER_ROLE');
    bytes32 public constant BURNER_ROLE = keccak256('BURNER_ROLE');

    // ============ Mutable Storage ============
    address public goldenTokenContractAddress;
    string public name;
    string public symbol;
    uint256 public totalSupply;
    // DEPRECATED
    // slither-disable-next-line constable-states
    uint256 public totalDocuments;

    Counters.Counter private _tokenIds;
    // TODO: string means more gas, to be improved
    mapping(uint256 => string) private _tokenToEntity;
    mapping(string => uint256) private _entityToToken;

    /**
     * DEPRECATED: Replaced by docId
     * Store the decentralized state in an IPFS document, update the state periodically
     * and add to _docIds the newly created document.
     */
    // slither-disable-next-line unused-state
    string[] private _docIds;
    string private _docId;

    // ================= Events ==================

    event GoldenTokenContractAddressChanged(
        address indexed goldenTokenContractAddress
    );
    event Minted(uint256 indexed tokenId, string entityId);
    event MintFailed(string indexed entityId, string reason);
    event Burned(uint256 indexed tokenId, string entityId);
    event DocumentSet(string indexed docId);

    // ============ Modifiers ============

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyStaked(uint256 withMinimumOf) {
        require(
            IStakeable(goldenTokenContractAddress).stakeOf(_msgSender()) >=
                withMinimumOf,
            'Not enough staked'
        );
        _;
    }

    /**
     * @dev Upgradeable initializer
     */
    function initialize(
        address _goldenTokenContractAddress,
        address[] calldata minterWallets
    ) public initializer {
        require(
            _goldenTokenContractAddress != address(0),
            'Zero address not allowed'
        );
        // Start at index 1
        _tokenIds.increment();
        __Ownable_init();
        __ERC721_init('Golden Entity', 'GLDE');
        goldenTokenContractAddress = _goldenTokenContractAddress;
        __AccessControl_init();
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
        address[] memory addresses = new address[](minterWallets.length + 1);
        for (uint256 i = 0; i < minterWallets.length; i++) {
            addresses[i] = minterWallets[i];
        }
        addresses[addresses.length - 1] = _msgSender();
        addMinters(addresses);
        addBurners(addresses);
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
        name = name_;
        symbol = symbol_;
    }

    function setDocId(string memory docId) public onlyOwner {
        _docId = docId;
        emit DocumentSet(docId);
    }

    function getDocId() public view returns (string memory) {
        return _docId;
    }

    function getEntityId(uint256 tokenId) public view returns (string memory) {
        return _tokenToEntity[tokenId];
    }

    function getTokenId(string memory entityId) public view returns (uint256) {
        return _entityToToken[entityId];
    }

    function getTokenIds(string[] calldata entityIds)
        public
        view
        returns (uint256[] memory)
    {
        uint256[] memory tokenIds = new uint256[](entityIds.length);
        for (uint256 i = 0; i < entityIds.length; i++) {
            string memory entityId = entityIds[i];
            tokenIds[i] = getTokenId(entityId);
        }
        return tokenIds;
    }

    function addMinters(address[] memory addresses) public onlyOwner {
        for (uint256 i = 0; i < addresses.length; i++) {
            address addr = addresses[i];
            _setupRole(MINTER_ROLE, addr);
        }
    }

    function removeMinters(address[] memory addresses) public onlyOwner {
        for (uint256 i = 0; i < addresses.length; i++) {
            address addr = addresses[i];
            _revokeRole(MINTER_ROLE, addr);
        }
    }

    function addBurners(address[] memory addresses) public onlyOwner {
        for (uint256 i = 0; i < addresses.length; i++) {
            address addr = addresses[i];
            _setupRole(BURNER_ROLE, addr);
        }
    }

    function removeBurners(address[] memory addresses) public onlyOwner {
        for (uint256 i = 0; i < addresses.length; i++) {
            address addr = addresses[i];
            _revokeRole(BURNER_ROLE, addr);
        }
    }

    function mint(string memory entityId) public onlyRole(MINTER_ROLE) {
        require(bytes(entityId).length != 0, 'entityId cannot be empty');
        // Ignore minted entity and return 0
        if (_entityToToken[entityId] != 0) {
            emit MintFailed(entityId, 'Already exists');
        } else {
            uint256 newTokenId = _tokenIds.current();
            _entityToToken[entityId] = newTokenId;
            _tokenToEntity[newTokenId] = entityId;
            _tokenIds.increment();
            // slither-disable-next-line costly-loop
            totalSupply++;
            emit Minted(newTokenId, entityId);
        }
    }

    function burn(uint256 tokenId) public onlyRole(BURNER_ROLE) {
        require(
            bytes(_tokenToEntity[tokenId]).length != 0,
            'burn nonexistent token'
        );
        string memory entityId = _tokenToEntity[tokenId];
        // slither-disable-next-line costly-loop
        delete _entityToToken[entityId];
        // slither-disable-next-line costly-loop
        delete _tokenToEntity[tokenId];
        // slither-disable-next-line costly-loop
        totalSupply = totalSupply - 1;
        emit Burned(tokenId, entityId);
    }

    function setGoldenTokenContractAddress(
        address newGoldenTokenContractAddress
    ) external onlyOwner {
        require(
            newGoldenTokenContractAddress != address(0),
            'Zero address not allowed'
        );
        goldenTokenContractAddress = newGoldenTokenContractAddress;
        emit GoldenTokenContractAddressChanged(newGoldenTokenContractAddress);
    }

    /**
     * @dev Returns whether `tokenId` exists.
     *
     * Tokens can be managed by their owner or approved accounts via {approve} or {setApprovalForAll}.
     *
     * Tokens start existing when they are minted (`_mint`),
     * and stop existing when they are burned (`_burn`).
     */
    function exists(uint256 tokenId) external view returns (bool) {
        return bytes(_tokenToEntity[tokenId]).length > 0;
    }

    /**
     * bulk mint users' NFT.
     * returns the number of NFTs minted, ignores already minted ones.
     */
    function bulkMint(string[] calldata entities)
        external
        onlyRole(MINTER_ROLE)
    {
        require(entities.length > 0, 'bulkMint 0 NFTs');
        for (uint256 i = 0; i < entities.length; i++) {
            string memory entityId = entities[i];
            mint(entityId);
        }
    }

    /**
     * bulk burn users' NFT.
     */
    function bulkBurn(uint256[] calldata tokenIds)
        external
        onlyRole(BURNER_ROLE)
    {
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
