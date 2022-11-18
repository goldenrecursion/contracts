import { BigNumber } from 'ethers';
import { ethers } from 'hardhat';

type Input = string | number;
export const toBN = (value: Input): BigNumber => ethers.BigNumber.from(value);
export const toGLD = (value: Input): BigNumber =>
  ethers.utils.parseUnits(
    typeof value === 'number' ? value.toString() : value,
    '18'
  );
