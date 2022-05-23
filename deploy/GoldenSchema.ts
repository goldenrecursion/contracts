import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { testSchema } from '../test/utils';

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  let initialPredicates: string[] = [];
  let initialEntityTypes: string[] = [];
  // initial predicates by entity types tuples
  // e.i.:
  // [
  //   [<entity CID>, [<predicate CID>, <predicate CID>, ...]],
  //   [<entity CID>, [<predicate CID>, <predicate CID>, ...]],
  //   ...
  // ]
  let initialPrediactesByEntityTypes: [string, string[]][] = [];

  if (network.name === 'hardhat') {
    initialPredicates = testSchema.predicates;
    initialEntityTypes = testSchema.entityTypes;
    initialPrediactesByEntityTypes = testSchema.predicatesByEntityTypes;
  }

  await deploy('GoldenSchema', {
    from: deployer,
    args: [
      initialPredicates,
      initialEntityTypes,
      initialPrediactesByEntityTypes,
    ],
    log: true,
  });
};

deploy.tags = ['GoldenSchema'];

export default deploy;
