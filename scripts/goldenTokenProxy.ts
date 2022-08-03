import { ethers, upgrades } from 'hardhat';
import { INITIAL_SUPPLY } from '../deploy/3_GoldenToken';

async function main() {
  const GoldenToken = await ethers.getContractFactory('GoldenToken');
  console.log('Deploying GoldenToken...');
  const goldenToken = await upgrades.deployProxy(
    GoldenToken,
    [INITIAL_SUPPLY],
    { initializer: 'initialize' }
  );
  console.log('GoldenToken deployed to:', goldenToken.address);
}

void main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
