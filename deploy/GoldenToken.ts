import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { network } from "hardhat";

// @ts-ignore
import testHelpersConfig from "@openzeppelin/test-helpers/configure";
// @ts-ignore
import { singletons } from "@openzeppelin/test-helpers";
testHelpersConfig({ provider: network.provider });

const INITIAL_SUPPLY = 10 ** 9; // 1 billy

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy } = deployments;

  const { deployer, funder } = await getNamedAccounts();

  if (network.name === "hardhat") {
    await singletons.ERC1820Registry(funder);
  }

  await deploy("GoldenToken", {
    from: deployer,
    args: [INITIAL_SUPPLY, []],
    log: true,
  });
};

func.tags = ["GoldenToken"];

export default func;
