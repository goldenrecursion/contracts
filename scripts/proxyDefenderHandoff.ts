import { getNamedAccounts, network, upgrades } from 'hardhat';

const DEFENDER_MULTISIG_CONTRACT_ADDRESS =
  '0x47fa2bf523675d4bA29734359181db0638beE789';

async function main() {
  const { deployer } = await getNamedAccounts();

  console.log(
    [
      `Network: ${network.name}`,
      `Deployer address: ${deployer}`,
    ].join('\n')
  );

  await upgrades.admin.transferProxyAdminOwnership(DEFENDER_MULTISIG_CONTRACT_ADDRESS);

  console.log('ALL DONE');
}

void main();
