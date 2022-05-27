import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { testSchema } from '../test/utils';

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  let initialPredicates: [string, string][] = [];
  // initial predicates
  // e.i.:
  // [
  //   [<predicate uuid>, <predicate latest CID>],
  //   [<predicate uuid>, <predicate latest CID>],
  //   ...
  // ]

  if (network.name === 'hardhat') {
    initialPredicates = testSchema.predicates;
  }

  await deploy('GoldenSchema', {
    from: deployer,
    args: [initialPredicates],
    log: true,
  });
};

deploy.tags = ['GoldenSchema'];

export default deploy;
