// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
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
contract SharedOwnershipNFTv1 is OwnableUpgradeable {
    // ============ Mutable Storage ============

    // Mapping from token ID (also ceramic content id) to owner contributions
    mapping(bytes32 => ContributionInfo) private tokensToContributions;
    // // Mapping from contributor address to token holdings
    // mapping(address => mapping(uint256 => uint256))
    //     private contributorsToHoldings;
    // If a token has been created
    mapping(bytes32 => bool) private mintedTokens;

    string public name;
    string public symbol;

    address public treasuryAddress;
    address public goldenTokenContractAddress;

    uint256 public minStakeToMint;
    uint256 public minterReward;
    uint256 public totalSupply;

    // ============ Immutable Storage ============

    // Treasury's ownership share 30%
    uint16 public constant TREASURY_SHARE = 30_000;
    uint16 public constant MAX_CONTRIBUTION_WEIGHT = 1000;
    uint8 public constant CALC_PRECISION = 3;

    // ================= Structs =================

    struct ContributionInfo {
        uint256 totalWeight;
        mapping(address => uint256) contributions;
    }

    // ================= Events ==================

    event WeightAdded(bytes32 indexed tokenId, uint256 weight);
    event Minted(bytes32 indexed tokenId);
    event GoldenTokenContractAddressChanged(
        address indexed goldenTokenContractAddress
    );
    event TreasuryAddressChanged(address indexed treasuryAddress);
    event MinStakeToMintsChanged(uint256 indexed minStakeToMint);
    event MinterRewardChanged(uint256 indexed minterReward);

    /**
     * @dev Upgradeable initializer
     */
    function initialize(
        address _treasuryAddress,
        address _goldenTokenContractAddress
    ) public initializer {
        __Ownable_init();
        treasuryAddress = _treasuryAddress;
        goldenTokenContractAddress = _goldenTokenContractAddress;
        name = "Golden Entity";
        symbol = "GLDE";
        minterReward = 10;
        // 10 staked
        minStakeToMint =
            10 *
            10**uint256(IStakeable(_goldenTokenContractAddress).decimals());
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyStaked(uint256 withMinimumOf) {
        require(
            IStakeable(goldenTokenContractAddress).stakeOf(msg.sender) >=
                withMinimumOf,
            "Not enough staked"
        );
        console.log(
            "Stake of me",
            IStakeable(goldenTokenContractAddress).stakeOf(msg.sender)
        );
        _;
    }

    function addWeight(bytes32 tokenId, uint256 weight)
        public
        onlyStaked(minStakeToMint)
    {
        require(weight > 0, "weight cannot be smaller than 1");
        require(
            weight <= MAX_CONTRIBUTION_WEIGHT,
            "weight cannot be larger than max"
        );
        require(exists(tokenId), "Token does not exist");
        ContributionInfo storage contribution = tokensToContributions[tokenId];

        contribution.contributions[msg.sender] =
            contribution.contributions[msg.sender] +
            weight;
        contribution.totalWeight = contribution.totalWeight + weight;
        emit WeightAdded(tokenId, weight);
    }

    function getWeight(bytes32 tokenId, address contributor)
        public
        view
        returns (uint256)
    {
        require(contributor != address(0), "Contributor cannot be 0 address");
        return tokensToContributions[tokenId].contributions[contributor];
    }

    /**
     * @dev Returns whether `tokenId` exists.
     */
    function exists(bytes32 tokenId) public view virtual returns (bool) {
        return mintedTokens[tokenId];
    }

    /**
     * @dev Mints an NFT and updates weights
     *
     * Requirements:
     * - `tokenId` must not exist.
     */
    function mint(bytes32 tokenId) external onlyStaked(minStakeToMint) {
        require(!exists(tokenId), "tokenId already exists");
        mintedTokens[tokenId] = true;
        console.log("mint ~ msg.sender", msg.sender);
        // contributorsToHoldings[msg.sender][tokenId] =
        //     contributorsToHoldings[msg.sender][tokenId] +
        //     minterReward;
        ContributionInfo storage contributionInfo = tokensToContributions[
            tokenId
        ];
        contributionInfo.contributions[msg.sender] =
            contributionInfo.contributions[msg.sender] +
            minterReward;
        contributionInfo.totalWeight =
            contributionInfo.totalWeight +
            minterReward;
        console.log("mint ~ msg.sender", msg.sender);
        totalSupply = totalSupply + 1;
        emit Minted(tokenId);
    }

    function setMinStakeToMint(uint256 newMinStakedToMint) external onlyOwner {
        minStakeToMint = newMinStakedToMint;
        emit MinStakeToMintsChanged(newMinStakedToMint);
    }

    function setMinterReward(uint256 newMinterReward) external onlyOwner {
        minterReward = newMinterReward;
        emit MinterRewardChanged(minterReward);
    }

    function setTreasuryAddress(address newTreasuryAddress) external onlyOwner {
        treasuryAddress = newTreasuryAddress;
        emit TreasuryAddressChanged(treasuryAddress);
    }

    function setGoldenTokenContractAddress(
        address newGoldenTokenContractAddress
    ) external onlyOwner {
        goldenTokenContractAddress = newGoldenTokenContractAddress;
        emit GoldenTokenContractAddressChanged(goldenTokenContractAddress);
    }

    /**
     * @dev Returns the contributor's share depending on CALC_PRECISION,
     * e.g: 100% and CALC_PRECISION == 3 => 100000 (100 * 10 ** 3)
     * @param contributor the address of the contributor in question
     * @param tokenId the NFT token id (also ceramic content id)
     */
    function getContributorShare(address contributor, bytes32 tokenId)
        public
        view
        returns (uint256)
    {
        ContributionInfo storage contributionInfo = tokensToContributions[
            tokenId
        ];
        return
            ((contributionInfo.contributions[contributor] *
                uint256(10**CALC_PRECISION)) / contributionInfo.totalWeight) *
            100;
    }

    /**
     * @dev Returns the token total weight
     * @param tokenId the NFT token id (also ceramic content id)
     */
    function getTokenWeight(bytes32 tokenId) public view returns (uint256) {
        return tokensToContributions[tokenId].totalWeight;
    }

    // // Finish, figure out how and why do this
    // function bulkUpdateNFTs(uint256[] calldata tokenIdsToReplace, uint256[] calldata newTokenIds)
    //     external
    //     onlyOwner
    // {
    //     require(tokenIdsToReplace.length == newTokenIds.length, "lengths don't match");
    //     for (uint16 i = 0; i < tokenIdsToReplace.length; i++) {
    //         require(mintedTokens[newTokenIds[i]] == false, "tokenId already used");
    //
    //         mintedTokens[tokenIdsToReplace[i]] = false;
    //         mintedTokens[newTokenIds[i]] = true;
    //     }
    // }
}
