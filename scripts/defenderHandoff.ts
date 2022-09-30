import { ethers, getNamedAccounts, network, upgrades } from 'hardhat';
import { GoldenToken } from '../typechain';

export const DEFENDER_MULTISIG_CONTRACT_ADDRESS_GOERLI =
  '0xF3dC74fDB8b3F53Ab11889bc6F27D9a5654bCBb4';

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
    DEFENDER_MULTISIG_CONTRACT_ADDRESS_GOERLI,
    await contractSigned.balanceOf(deployer)
  );

  // Then hand off the actual contract
  await upgrades.admin.transferProxyAdminOwnership(
    DEFENDER_MULTISIG_CONTRACT_ADDRESS_GOERLI
  );

  console.log('ALL DONE');
}

main();
