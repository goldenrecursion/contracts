import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { deployerAddress } from '../hardhat.config';
import initialPredicates from '../contracts/GoldenSchemaPredicates.json';
import initialEntityTypes from '../contracts/GoldenSchemaEntityTypes.json';
const contractName = 'GoldenSchema';

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy, catchUnknownSigner } = deployments;

  const { deployer } = await getNamedAccounts();
  const dev = ['hardhat', 'localhost'].includes(network.name);

  const depl = dev ? deployer : deployerAddress;

  const args = dev ? [initialPredicates, initialEntityTypes] : [];
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
