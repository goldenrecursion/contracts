import { ethers, getNamedAccounts, network } from 'hardhat';
import { GoldenToken } from '../typechain';

const DEFENDER_MULTISIG_CONTRACT_ADDRESS =
  '0x47fa2bf523675d4bA29734359181db0638beE789';

async function main() {
  const { deployer } = await getNamedAccounts();
  const contract = await ethers.getContract('GoldenToken');
  const contractSigned = contract.connect(
    await ethers.getSigner(deployer)
  ) as GoldenToken;

  console.log(
    [
      `Network: ${network.name}`,
      `Contract address: ${contract.address}`,
      `Deployer address: ${deployer}`,
    ].join('\n')
  );

  // First hand off all tokens
  await contractSigned.transfer(
    DEFENDER_MULTISIG_CONTRACT_ADDRESS,
    await contractSigned.balanceOf(deployer)
  );

  // Then hand off the actual contract
  await contractSigned.transferOwnership(DEFENDER_MULTISIG_CONTRACT_ADDRESS);

  console.log('ALL DONE');
}

void main();
