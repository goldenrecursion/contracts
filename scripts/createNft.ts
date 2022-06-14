import { ethers, upgrades } from 'hardhat';

async function main() {
  const SharedOwnershipNFTv1 = await ethers.getContractFactory("SharedOwnershipNFTv1");
  const sharedOwnershipNFTv1 = await upgrades.deployProxy(SharedOwnershipNFTv1, []);
  await sharedOwnershipNFTv1.deployed();
  console.log("SharedOwnershipNFTv1 deployed to:", sharedOwnershipNFTv1.address);
  console.log("SharedOwnershipNFTv1 some:", await sharedOwnershipNFTv1.getSome());
}

main();