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

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, getUnnamedAccounts, network } = hre;
  const { deploy, catchUnknownSigner } = deployments;

  const { deployer } = await getNamedAccounts();

  if (network.name === 'hardhat') {
    const users = await getUnnamedAccounts();
    await singletons.ERC1820Registry(users[0]);
  }

  const contractName = 'GoldenToken';
  await catchUnknownSigner(
    deploy(contractName, {
      log: true,
      contract: 'GoldenTokenV2',
      from: deployer,
      proxy: {
        proxyContract: 'OpenZeppelinTransparentProxy',
      },
    })
  );
};

deploy.id = 'deploy_golden_token';
deploy.tags = ['GoldenToken'];

export default deploy;
