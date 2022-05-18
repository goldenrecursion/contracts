import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  await deploy('GoldenSchema', {
    from: deployer,
    args: [
      [], // initial predicates
      [], // initial entity types
      // TODO: Figure out how to pass in initial predicates by entity types mapping
    ],
    log: true,
  });
};

deploy.tags = ['GoldenSchema'];

export default deploy;
