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
    // Mapping from token ID to owner contributions
    mapping(uint256 => Contribution) public tokensToContributions;
    // Mapping from contributor address to token holdings
    mapping(address => mapping(uint256 => uint256))
        public contributorsToHoldings;
    // If a token has been created
    mapping(uint256 => bool) public mintedToken;

    struct Contribution {
        uint256 totalWeight;
        mapping(address => uint256) contributions;
    }

    string public name;
    string public symbol;

    address public treasuryAddress;
    address public goldenTokenContractAddress;

    // Treasury's ownership share
    uint16 private constant TREASURY_SHARE_BASIS_POINTS = 3000;
    uint16 private constant MAX_CONTRIBUTION_WEIGHT = 1000;

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
    modifier onlyStaked() {
        require(
            IStakeable(goldenTokenContractAddress).stakeOf(msg.sender) >=
                minStakeToMint,
            "Not enough staked"
        );
        _;
    }

    function addWeight(
        uint256 tokenId,
        address contributor,
        uint256 weight
    ) public onlyStaked {
        require(weight > 0, "weight cannot be smaller than 1");
        require(contributor != address(0), "Contributor cannot be 0 address");
        require(
            weight <= MAX_CONTRIBUTION_WEIGHT,
            "weight cannot be larger than max"
        );
        Contribution storage contribution = tokensToContributions[tokenId];

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
        return mintedToken[tokenId];
    }

    /**
     * @dev Safely mints `tokenId` and transfers it to `to`.
     *
     * Requirements:
     *
     * - `tokenId` must not exist.
     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received},
     * which is called upon a safe transfer.
     *
     * Emits a {Transfer} event.
     */
    function mint(address minter, uint256 tokenId) external onlyStaked {
        require(minter != address(0), "Mint to the zero address");
        require(!_exists(tokenId), "Token already minted");

        mintedToken[tokenId] = true;
        contributorsToHoldings[msg.sender][tokenId] =
            contributorsToHoldings[msg.sender][tokenId] +
            minterReward;
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
}
