import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { network } from 'hardhat';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import testHelpersConfig from '@openzeppelin/test-helpers/configure';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { singletons } from '@openzeppelin/test-helpers';
import { ethers } from 'ethers';

testHelpersConfig({ provider: network.provider });

export const INITIAL_SUPPLY = ethers.utils.parseUnits('1' + '0'.repeat(9), 18);
export const SEED_AMOUNT = ethers.utils.parseUnits('10000', 18);
export const STAKE_AMOUNT = ethers.utils.parseUnits('10', 18);
const contractName = 'GoldenToken';

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, getUnnamedAccounts, network } = hre;
  const { deploy, catchUnknownSigner } = deployments;

  const { deployer } = await getNamedAccounts();

  if (['hardhat', 'localhost'].includes(network.name)) {
    const users = await getUnnamedAccounts();
    await singletons.ERC1820Registry(users[0]);
  }

  await catchUnknownSigner(
    deploy(contractName, {
      log: true,
      contract: 'GoldenTokenV2',
      from: deployer,
      proxy: {
        owner: '0xd8f26e63c9b3a4c8d1cab70eb252a15c7d180f04',
        proxyContract: 'OpenZeppelinTransparentProxy',
      },
    })
  );
};

deploy.id = 'deploy_golden_token';
deploy.tags = [contractName];

export default deploy;
