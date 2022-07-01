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
export const STAKE_AMOUNT = ethers.utils.parseUnits('10', 18);

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, getUnnamedAccounts, network, ethers } =
    hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  // const signers = await ethers.getSigners();
  // const proxyOwnerSigner = signers[1];

  if (network.name === 'hardhat') {
    const users = await getUnnamedAccounts();
    await singletons.ERC1820Registry(users[0]);
  }

  const contractName = 'GoldenToken';
  // let goldenToken = await deployments.getOrNull(contractName);
  // if (!goldenToken) {
    await deploy(contractName, {
      log: true,
      from: deployer,
      skipIfAlreadyDeployed: true,
      proxy: {
        proxyContract: 'OpenZeppelinTransparentProxy',
        execute: {
          methodName: 'initialize',
          args: [INITIAL_SUPPLY],
        },
      },
    });
  // }

  // console.log('Address of deployed goldenToken', goldenToken?.address)
  // // V2 implementation
  // const implementationReceipt = await deploy('GoldenTokenV2', {
  //   log: true,
  //   from: deployer,
  //   deterministicDeployment: true,
  // });
  // console.log("Implementation deployed to", implementationReceipt.address);


  // const proxyVersion = await deployments.get(contractName + "_Proxy");
  // // const regularVersion = await deployments.get(contractName);
  // const proxy = await ethers.getContractAt(proxyVersion.abi, proxyVersion.address, proxyOwnerSigner);

  // // If we want to run any post upgrade functions or initializations or anything after the implementation deployment, 
  // // then we would need to actually populate the data here. See https://github.com/wighawag/buidler-deploy/blob/e534fcdc7ffffe2511a48c04def54ae1acf532bc/src/helpers.ts#L854 for more
  // const data = "0x";
  // console.log("Changing implementation...");
  // await proxy.changeImplementation(implementationReceipt.address, data);
  // console.log("Upgrade complete");

  if (network.name === 'hardhat') {
    const users = await getUnnamedAccounts();
    const GoldenToken = (await ethers.getContract('GoldenToken')).connect(
      await ethers.getSigner(deployer)
    );

    // Pre seed test accounts with tokens
    for (let i = 0, n = users.length; i < n; i++) {
      await GoldenToken.transfer(users[i], SEED_AMOUNT);
    }

    // Pre seed test accounts with stakes
    const userStakes = [];
    for (const user of [deployer, ...users]) {
      userStakes.push({
        addr: user,
        amount: STAKE_AMOUNT,
      });
    }
    const totalStakes = STAKE_AMOUNT.mul(users.length + 1);
    await GoldenToken.bulkStake(userStakes, totalStakes);
  }
};

deploy.id = 'deploy_golden_token';
deploy.tags = ['GoldenToken'];

export default deploy;
