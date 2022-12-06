import { ethers } from 'hardhat';
import { INITIAL_SUPPLY } from '../../deploy/3_GoldenToken';

async function main() {
  const Golden = await ethers.getContractFactory('GoldenToken');
  const golden = await Golden.deploy();

  await golden.deployed();
  await golden.initialize(INITIAL_SUPPLY);

  const address = golden.address;

  console.log({
    address,
    deployed_by: await Golden.signer.getAddress(),
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
