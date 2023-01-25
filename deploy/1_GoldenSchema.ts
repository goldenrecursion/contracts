import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { deployerAddress } from '../hardhat.config';
import initialPredicates from '../contracts/GoldenSchemaPredicates.json';
import initialEntityTypes from '../contracts/GoldenSchemaEntityTypes.json';
import { init, isDev } from '../utils';
import { network } from 'hardhat';

const contractName = 'GoldenSchema';

init(network);

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy, catchUnknownSigner } = deployments;

  const { deployer } = await getNamedAccounts();
  const dev = isDev(network);

  const depl = dev ? deployer : deployerAddress;

  const args = dev ? [initialPredicates, initialEntityTypes] : [[], []];
  await catchUnknownSigner(
    deploy(contractName, {
      log: true,
      from: depl,
      proxy: {
        owner: depl,
        proxyContract: 'OpenZeppelinTransparentProxy',
        execute: {
          init: {
            methodName: 'initialize',
            args,
          },
        },
      },
    })
  );
};

deploy.id = 'deploy_golden_schema';
deploy.tags = [contractName];

export default deploy;
