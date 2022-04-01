import { expect } from "chai";
import {
  deployments,
  ethers,
  getNamedAccounts,
  getUnnamedAccounts,
} from "hardhat";
import { Contract } from "ethers";

import { setupUsers, setupUser, User, TOTAL_SUPPLY } from "./utils";

describe("GoldenToken - staking", () => {
  let contract: Contract;
  let owner: User<{ GoldenToken: Contract }>;
  let users: User<{ GoldenToken: Contract }>[];

  beforeEach(async function () {
    await deployments.fixture(["GoldenToken"]);
    contract = await ethers.getContract("GoldenToken");
    const contracts = {
      GoldenToken: await ethers.getContract("GoldenToken"),
    };
    const { deployer } = await getNamedAccounts();
    owner = await setupUser<typeof contracts>(deployer, contracts);
    users = await setupUsers<typeof contracts>(
      await getUnnamedAccounts(),
      contracts
    );
  });

  describe("Deployment", () => {
    it("Should be the owner of the contract", async () => {
      expect(await contract.owner()).to.equal(owner.address);
    });
  });

  describe("Staking", () => {
    it("Should NOT allow a user to stake tokens they don't have", async () => {
      const user = users[0];
      await expect(user.GoldenToken.stake(10)).to.be.revertedWith(
        "ERC777: burn amount exceeds balance"
      );
    });

    it("Should allow a user to stake tokens and burn them", async () => {
      const user = users[0];
      await owner.GoldenToken.transfer(user.address, 10);
      await user.GoldenToken.stake(10);
      expect(await contract.stakeOf(user.address)).to.equal(10);
      expect(await contract.balanceOf(user.address)).to.equal(0);
    });

    it("Should NOT allow a user to unstake tokens they didn't stake", async () => {
      const user = users[0];
      await expect(user.GoldenToken.unstake(10)).to.be.revertedWith(
        "Staking: exceeds balance"
      );
    });

    it("Should allow a user to unstake tokens and mint them", async () => {
      const user = users[0];
      await owner.GoldenToken.transfer(user.address, 10);
      await user.GoldenToken.stake(10);
      await user.GoldenToken.unstake(10);
      expect(await contract.stakeOf(user.address)).to.equal(0);
      expect(await contract.balanceOf(user.address)).to.equal(10);
    });
  });

  describe("Slashing", () => {
    it("Owner can slash user's stakes", async () => {
      const user = users[0];
      await owner.GoldenToken.transfer(user.address, 10);
      await user.GoldenToken.stake(10);
      await owner.GoldenToken.slash(user.address, 10);
      expect(await contract.stakeOf(user.address)).to.equal(0);
      expect(await contract.balanceOf(user.address)).to.equal(0);
      expect(await contract.totalSupply()).to.equal(TOTAL_SUPPLY);
    });
  });
});
