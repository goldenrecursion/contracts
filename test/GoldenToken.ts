import { expect } from "chai";
import {
  deployments,
  ethers,
  getNamedAccounts,
  getUnnamedAccounts,
} from "hardhat";
import { Contract, BigNumber } from "ethers";

import { setupUsers, setupUser, User } from "./utils";

describe("GoldenToken contract", function () {
  let tokenContract: Contract;
  let owner: User<{ GoldenToken: Contract }>;
  let users: User<{ GoldenToken: Contract }>[];

  // Have to set the number as a string because of JavaScript "safe range" limitations.
  // More info: https://docs.ethers.io/v5/api/utils/bignumber/#BigNumber
  const totalSupply = BigNumber.from(
    "1" +
      "0".repeat(9) + // 1 billy
      "0".repeat(18) // 18 decimal point
  );

  beforeEach(async function () {
    await deployments.fixture(["GoldenToken"]);
    tokenContract = await ethers.getContract("GoldenToken");
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

  describe("Deployment", function () {
    it("Should have correct token total supply", async function () {
      expect(await tokenContract.totalSupply()).to.equal(totalSupply);
    });

    it("Should assign the total supply of tokens to the deployer", async function () {
      const ownerBalance = await tokenContract.balanceOf(owner.address);
      expect(totalSupply).to.equal(ownerBalance);
    });
  });

  describe("Transactions", function () {
    it("Should transfer tokens between accounts", async function () {
      expect(await tokenContract.balanceOf(users[0].address)).to.equal(0);

      // Transfer 50 tokens from owner to users[0].address
      await owner.GoldenToken.transfer(users[0].address, 50);
      expect(await tokenContract.balanceOf(users[0].address)).to.equal(50);

      // Transfer 50 tokens from users[0].address to addr2
      await users[0].GoldenToken.transfer(users[1].address, 50);
      expect(await tokenContract.balanceOf(users[1].address)).to.equal(50);
      expect(await tokenContract.balanceOf(users[0].address)).to.equal(0);
    });

    it("Should fail if sender doesn’t have enough tokens", async function () {
      const initialOwnerBalance = await tokenContract.balanceOf(owner.address);

      // Try to send 1 token from users[0].address (0 tokens) to owner (1000000 tokens).
      // `require` will evaluate false and revert the transaction.
      await expect(
        users[0].GoldenToken.transfer(owner.address, 1)
      ).to.be.revertedWith("ERC777: transfer amount exceeds balance");

      // Owner balance shouldn't have changed.
      expect(await tokenContract.balanceOf(owner.address)).to.equal(
        initialOwnerBalance
      );
    });
  });
});
