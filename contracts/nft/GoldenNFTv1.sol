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
contract GoldenNFTv1 is ERC721Upgradeable, OwnableUpgradeable {
    using Counters for Counters.Counter;

    // ============ Mutable Storage ============
    Counters.Counter private _tokenIds;
    address public _goldenTokenContractAddress;
    uint256 public _totalSupply;

    // TODO: string means more gas, to be improved
    mapping(uint256 => string) private _ceramicIds;

    // ================= Events ==================

    event GoldenTokenContractAddressChanged(
        address indexed goldenTokenContractAddress
    );
    event Minted(address indexed to, uint256 indexed tokenId, string ceramicId);
    event Burned(uint256 indexed tokenId);

    // ============ Structs ============

    struct Mint {
        address to;
        string ceramicId;
    }

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

    function mint(address to, string memory ceramicId)
        public
        onlyOwner
        returns (uint256)
    {
        require(
            to != address(0) && to != address(this),
            "to cannot be 0 or this"
        );
        require(bytes(ceramicId).length != 0, "ceramicId cannot be empty");
        uint256 newItemId = _tokenIds.current();
        super._mint(to, newItemId);
        _ceramicIds[newItemId] = ceramicId;
        _tokenIds.increment();
        _totalSupply = _totalSupply + 1;
        emit Minted(to, newItemId, ceramicId);
        return newItemId;
    }

    function burn(uint256 tokenId) public onlyOwner {
        super._burn(tokenId);
        delete _ceramicIds[tokenId];
        _totalSupply = _totalSupply - 1;
        emit Burned(tokenId);
    }

    /**
     * @dev See {IERC721Metadata-tokenURI}.
     */
    function tokenURI(uint256 tokenId)
        public
        view
        override
        returns (string memory)
    {
        require(_exists(tokenId), "tokenId does not exist");
        return _ceramicIds[tokenId];
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

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override {
        super._beforeTokenTransfer(from, to, tokenId);
        require(
            (from == address(0) ||
                from == owner() ||
                from == address(this) ||
                to == address(this)) || 
                to == address(0),
            "ERC721: Not allowed to transfer"
        );
    }

    /**
     * bulk mint users' NFT.
     */
    function bulkMint(Mint[] calldata mints) external onlyOwner {
        require(mints.length > 0, "bulkMint 0 NFTs");
        for (uint256 i = 0; i < mints.length; i++) {
            address to = mints[i].to;
            require(to != address(0), "invalid to");
            string memory ceramicId = mints[i].ceramicId;
            require(bytes(ceramicId).length > 0, "empty ceramicId");    
            mint(to, ceramicId);
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

}
