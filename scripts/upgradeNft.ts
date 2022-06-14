import { ethers, upgrades } from 'hardhat';

const NFT_ADDRESS = '0xc5a5C42992dECbae36851359345FE25997F5C42d' // Make sure to update this with the new address

async function main() {
  const SharedOwnershipNFTv2 = await ethers.getContractFactory("SharedOwnershipNFTv2");
  const sharedOwnershipNFTv2 = await upgrades.upgradeProxy(NFT_ADDRESS, SharedOwnershipNFTv2);
  await sharedOwnershipNFTv2.deployed();
  console.log("SharedOwnershipNFTv2 deployed to:", sharedOwnershipNFTv2.address);
  console.log("SharedOwnershipNFTv2 some:", await sharedOwnershipNFTv2.getSome());
  console.log("SharedOwnershipNFTv2 somethingElse:", await sharedOwnershipNFTv2.getSomethingElse());
}

main();