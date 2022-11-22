import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import initialPredicates from '../contracts/data/GoldenSchemaPredicates.json';
import initialEntityTypes from '../contracts/data/GoldenSchemaEntityTypes.json';
import { deployerAddress } from '../hardhat.config';

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy, catchUnknownSigner } = deployments;

  const { deployer } = await getNamedAccounts();
  const dev = ['hardhat', 'localhost'].includes(network.name);

  const contractName = 'GoldenSchema';
  const depl = dev ? deployer : deployerAddress;
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
            args: [initialPredicates, initialEntityTypes],
          },
        },
      },
    })
  );
};

deploy.id = 'deploy_golden_schema';
deploy.tags = ['GoldenSchema'];

export default deploy;
