import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { network } from 'hardhat';

// @ts-ignore
import testHelpersConfig from '@openzeppelin/test-helpers/configure';
// @ts-ignore
import { singletons } from '@openzeppelin/test-helpers';
import { ethers } from 'ethers';

testHelpersConfig({ provider: network.provider });

export const INITIAL_SUPPLY = ethers.utils.parseUnits('1' + '0'.repeat(9), 18);
export const SEED_AMOUNT = ethers.utils.parseUnits('10000', 18);

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, getUnnamedAccounts, network, ethers } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  if (network.name === 'hardhat') {
    const users = await getUnnamedAccounts();
    await singletons.ERC1820Registry(users[0]);
  }

  const token = await deploy('GoldenToken', {
    log: true,
    from: deployer,
    proxy: {
      proxyContract: 'OpenZeppelinTransparentProxy',
      execute: {
        methodName: 'initialize',
        args: [INITIAL_SUPPLY],
      }
    }
  });
  console.log(token.address, " token(proxy) address")

  if (network.name === 'hardhat') {
    const users = await getUnnamedAccounts();
    // Pre seed test accounts with tokens
    const GoldenToken = (await ethers.getContract('GoldenToken')).connect(
      await ethers.getSigner(deployer)
    );
    for (let i = 0, n = users.length; i < n; i++) {
      await GoldenToken.transfer(users[i], SEED_AMOUNT);
    }
  }
};

deploy.tags = ['GoldenToken'];

export default deploy;
