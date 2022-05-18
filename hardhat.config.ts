// Go to https://hardhat.org/config/ to learn more
import * as dotenv from 'dotenv';

import { HardhatUserConfig } from 'hardhat/config';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';
import 'solidity-coverage';
import 'hardhat-deploy';
import '@nomiclabs/hardhat-ethers';
import '@openzeppelin/test-helpers';

import './tasks/manageToken';
import './tasks/manageSchema';

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.11',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      // This is required for our localhost to work with MetaMask
      chainId: 1337,
    },
    rinkeby: {
      url: process.env.RINKEBY_URL || '',
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: 'USD',
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  namedAccounts: {
    deployer: {
      // Key here is the network id
      default: 0, // tests
      // These need a private key set in .env file as `PRIVATE_KEY`
      4: '0xB9563F6aEd9a3986Fe0e4B57cA1Af40dBD7F7720', // rinkeby
      // TODO: Setup mainnet account
      1: 0, // mainnet
    },
    // tests accounts
    funder: 1,
  },
};

export default config;
