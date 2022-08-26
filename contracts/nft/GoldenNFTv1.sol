// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

interface IStakeable {
    function stake(uint256 _amount) external;

    function unstake(uint256 amount) external;

    function slash(address account, uint256 amount) external;

    function stakeOf(address account) external view returns (uint256);

    function decimals() external returns (uint8);
}

/**
    DEPRECATED, too expensive to have contributions on chain
 */
contract GoldenNFTv1 is OwnableUpgradeable {
    using Counters for Counters.Counter;

    // ============ Mutable Storage ============
    Counters.Counter private _tokenIds;
    address public _goldenTokenContractAddress;
    uint256 public _totalSupply;
    // Token name
    string private _name;

    // Token symbol
    string private _symbol;

    // TODO: string means more gas, to be improved
    mapping(uint256 => string) private _tokenToCeramic;
    mapping(string => uint256) private _ceramicToToken;

    // ================= Events ==================

    event GoldenTokenContractAddressChanged(
        address indexed goldenTokenContractAddress
    );
    event Minted(uint256 indexed tokenId, string ceramicId);
    event Burned(uint256 indexed tokenId, string ceramicId);

    // ============ Modifiers ============

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyStaked(uint256 withMinimumOf) {
        require(
            IStakeable(_goldenTokenContractAddress).stakeOf(msg.sender) >=
                withMinimumOf,
            "Not enough staked"
        );
        console.log(
            "Stake of me",
            IStakeable(_goldenTokenContractAddress).stakeOf(msg.sender)
        );
        _;
    }

    /**
     * @dev Upgradeable initializer
     */
    function initialize(address goldenTokenContractAddress) public initializer {
        __Ownable_init();
        __ERC721_init("Golden Entity", "GLDE");
        _goldenTokenContractAddress = goldenTokenContractAddress;
    }

    /**
     * @dev Initializes the contract by setting a `name` and a `symbol` to the token collection.
     */
    function __ERC721_init(string memory name_, string memory symbol_) internal onlyInitializing {
        __ERC721_init_unchained(name_, symbol_);
    }

    function __ERC721_init_unchained(string memory name_, string memory symbol_) internal onlyInitializing {
        _name = name_;
        _symbol = symbol_;
    }

    /**
     * @dev See {IERC721Metadata-name}.
     */
    function name() public view virtual returns (string memory) {
        return _name;
    }

    /**
     * @dev See {IERC721Metadata-symbol}.
     */
    function symbol() public view virtual returns (string memory) {
        return _symbol;
    }

    function mint(string memory ceramicId)
        public
        onlyOwner
        returns (uint256)
    {
        require(bytes(ceramicId).length != 0, "ceramicId cannot be empty");
        uint256 newTokenId = _tokenIds.current();
        _ceramicToToken[ceramicId] = newTokenId;
        _tokenToCeramic[newTokenId] = ceramicId;
        _tokenIds.increment();
        _totalSupply = _totalSupply + 1;
        emit Minted(newTokenId, ceramicId);
        return newTokenId;
    }

    function burn(uint256 tokenId) public onlyOwner {
        string memory ceramicId = _tokenToCeramic[tokenId];
        delete _ceramicToToken[ceramicId];
        delete _tokenToCeramic[tokenId];
        _totalSupply = _totalSupply - 1;
        emit Burned(tokenId, ceramicId);
    }

    /**
     * @dev See {IERC721Metadata-tokenURI}.
     */
    function tokenURI(uint256 tokenId)
        public
        view
        returns (string memory)
    {
        require(_exists(tokenId), "tokenId does not exist");
        return _tokenToCeramic[tokenId];
    }

    function setGoldenTokenContractAddress(
        address newGoldenTokenContractAddress
    ) external onlyOwner {
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
        return bytes(_tokenToCeramic[tokenId]).length > 0;
    }

    /**
     * bulk mint users' NFT.
     */
    function bulkMint(string[] calldata ceramicIds) external onlyOwner {
        require(ceramicIds.length > 0, "bulkMint 0 NFTs");
        for (uint256 i = 0; i < ceramicIds.length; i++) {
            string memory ceramicId = ceramicIds[i];
            require(bytes(ceramicId).length > 0, "empty ceramicId");    
            mint(ceramicId);
        }
    }

    /**
     * bulk burn users' NFT.
     */
    function bulkBurn(uint256[] calldata tokenIds) external onlyOwner {
        require(tokenIds.length > 0, "bulkBurn 0 NFTs");
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
    uint256[44] private __gap;
}
