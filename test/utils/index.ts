import { BigNumber, Contract } from "ethers";
import { ethers } from "hardhat";
import { Address } from "hardhat-deploy/types";

export type User<T> = { address: Address } & T;

export async function setupUsers<
  T extends { [contractName: string]: Contract }
>(addresses: Address[], contracts: T): Promise<({ address: Address } & T)[]> {
  const users: ({ address: Address } & T)[] = [];
  for (const address of addresses) {
    users.push(await setupUser(address, contracts));
  }
  return users;
}

export async function setupUser<T extends { [contractName: string]: Contract }>(
  address: Address,
  contracts: T
): Promise<{ address: Address } & T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user: any = { address };
  for (const key of Object.keys(contracts)) {
    user[key] = contracts[key].connect(await ethers.getSigner(address));
  }
  return user as { address: Address } & T;
}

// Have to set the number as a string because of JavaScript "safe range" limitations.
// More info: https://docs.ethers.io/v5/api/utils/bignumber/#BigNumber
export const TOTAL_SUPPLY = BigNumber.from(
  "1" +
    "0".repeat(9) + // 1 billy
    "0".repeat(18) // 18 decimal point
);
