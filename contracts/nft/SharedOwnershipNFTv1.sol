// SPDX-License-Identifier: MIT

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

contract SharedOwnershipNFTv1 is OwnableUpgradeable {
    // Mapping from token ID (also ceramic content id) to owner contributions
    mapping(uint256 => ContributionInfo) private tokensToContributions;
    // // Mapping from contributor address to token holdings
    // mapping(address => mapping(uint256 => uint256))
    //     private contributorsToHoldings;
    // If a token has been created
    mapping(uint256 => bool) private mintedTokens;

    struct ContributionInfo {
        uint256 totalWeight;
        mapping(address => uint256) contributions;
    }

    string public name;
    string public symbol;

    address public treasuryAddress;
    address public goldenTokenContractAddress;

    // Treasury's ownership share
    uint16 public constant TREASURY_SHARE_BASIS_POINTS = 3000;
    uint16 public constant MAX_CONTRIBUTION_WEIGHT = 1000;
    uint8 public constant CALC_PRECISION = 3;

    uint256 public minStakeToMint;
    uint256 public minterReward;
    uint256 public totalSupply;

    function initialize(
        address _treasuryAddress,
        address _goldenTokenContractAddress
    ) public initializer {
        __Ownable_init();
        treasuryAddress = _treasuryAddress;
        goldenTokenContractAddress = _goldenTokenContractAddress;
        name = "Golden Entity";
        symbol = "GLDE";
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
        _;
    }

    function addWeight(
        uint256 tokenId,
        address contributor,
        uint256 weight
    ) public onlyStaked(minStakeToMint) {
        require(weight > 0, "weight cannot be smaller than 1");
        require(contributor != address(0), "Contributor cannot be 0 address");
        require(
            weight <= MAX_CONTRIBUTION_WEIGHT,
            "weight cannot be larger than max"
        );
        ContributionInfo storage contribution = tokensToContributions[tokenId];

        contribution.contributions[msg.sender] =
            contribution.contributions[msg.sender] +
            weight;
        contribution.totalWeight = contribution.totalWeight + weight;
    }

    function getWeight(uint256 tokenId, address contributor)
        public
        view
        returns (uint256)
    {
        require(tokenId > 0, "tokenId cannot be 0");
        require(contributor != address(0), "Contributor cannot be 0 address");
        return tokensToContributions[tokenId].contributions[contributor];
    }

    /**
     * @dev Returns whether `tokenId` exists.
     */
    function _exists(uint256 tokenId) internal view virtual returns (bool) {
        return mintedTokens[tokenId];
    }

    /**
     * @dev Mints an NFT and updates weights
     *
     * Requirements:
     *
     * - `tokenId` must not exist.
     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received},
     * which is called upon a safe transfer.
     *
     * Emits a {Transfer} event.
     */
    function mint(uint256 tokenId) external onlyStaked(minStakeToMint) {
        mintedTokens[tokenId] = true;
        // contributorsToHoldings[msg.sender][tokenId] =
        //     contributorsToHoldings[msg.sender][tokenId] +
        //     minterReward;
        tokensToContributions[tokenId].contributions[msg.sender] =
            tokensToContributions[tokenId].contributions[msg.sender] +
            minterReward;
        totalSupply = totalSupply + 1;
    }

    function setMinStakeToMint(uint256 newMinStakedToMint) external onlyOwner {
        minStakeToMint = newMinStakedToMint;
    }

    function setMinterReward(uint256 newMinterReward) external onlyOwner {
        minterReward = newMinterReward;
    }

    /**
     * @dev Returns the contributor's share in basis points, e.g: 100% = 10000
     * @param contributor the address of the contributor in question
     * @param tokenId the NFT token id (also ceramic content id)
     */
    function getContributorShare(address contributor, uint256 tokenId) public view returns(uint256) {
        ContributionInfo storage contributionInfo = tokensToContributions[tokenId];
        return contributionInfo.contributions[contributor] * uint256(10**CALC_PRECISION) / contributionInfo.totalWeight;
    }

    /**
     * @dev Returns the token total weight
     * @param tokenId the NFT token id (also ceramic content id)
     */
    function getTokenWeight(uint256 tokenId) public view returns(uint256) {
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
