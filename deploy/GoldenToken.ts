import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { network } from 'hardhat';

// @ts-ignore
import testHelpersConfig from '@openzeppelin/test-helpers/configure';
// @ts-ignore
import { singletons } from '@openzeppelin/test-helpers';
import { BigNumber } from 'ethers';
testHelpersConfig({ provider: network.provider });

const INITIAL_SUPPLY = BigNumber.from(
  '1' +
    '0'.repeat(9) + // 1 billy
    '0'.repeat(18) // 18 decimal point
);

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, getUnnamedAccounts, network, ethers } =
    hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  if (network.name === 'hardhat') {
    const users = await getUnnamedAccounts();
    await singletons.ERC1820Registry(users[0]);
  }

  await deploy('GoldenToken', {
    from: deployer,
    args: [INITIAL_SUPPLY],
    log: true,
  });

  if (network.name === 'hardhat') {
    const users = await getUnnamedAccounts();
    // Pre seed test accounts with tokens
    const GoldenToken = (await ethers.getContract('GoldenToken')).connect(
      await ethers.getSigner(deployer)
    );
    const amount = ethers.utils.parseUnits('10000', 18);
    for (let i = 0, n = users.length; i < n; i++) {
      console.log(`Seeding ${users[i]} with ${amount}`);
      await GoldenToken.transfer(users[i], amount);
    }
  }
};

deploy.tags = ['GoldenToken'];

export default deploy;
