// Go to https://hardhat.org/config/ to learn more
import * as dotenv from 'dotenv';

import { HardhatUserConfig } from 'hardhat/config';
import '@typechain/hardhat';

import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';

import 'hardhat-gas-reporter';
import 'solidity-coverage';
import 'hardhat-deploy';
import '@openzeppelin/test-helpers';
import '@openzeppelin/hardhat-upgrades';

import './tasks/manageToken';
import './tasks/manageSchema';
import './tasks/manageWallets';

dotenv.config();

const accounts =
  process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [];

const config: HardhatUserConfig = {
  typechain: {
    outDir: 'typechain/',
  },
  solidity: {
    version: '0.8.16',
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
      chainId: 4,
      accounts,
    },
    goerli: {
      url: process.env.GOERLI_URL || '',
      chainId: 5,
      accounts,
    },
    polygon: {
      url: process.env.POLYGON_URL || '',
      chainId: 137,
      accounts,
    },
    mumbai: {
      url: process.env.MUMBAI_URL || '',
      chainId: 80001,
      accounts,
    },
    sepolia: {
      url: process.env.SEPOLIA_URL || '',
      chainId: 11155111,
      accounts,
    },
    arbitrumGoerli: {
      url: process.env.ARBITRUM_GOERLI_URL || '',
      chainId: 421613,
      accounts,
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: 'USD',
  },
  etherscan: {
    apiKey: {
      mainnet: process.env.ETHERSCAN_API_KEY!,
      ropsten: process.env.ETHERSCAN_API_KEY!,
      rinkeby: process.env.ETHERSCAN_API_KEY!,
      sepolia: process.env.ETHERSCAN_API_KEY!,
      goerli: process.env.ETHERSCAN_API_KEY!,
      kovan: process.env.ETHERSCAN_API_KEY!,
      polygon: process.env.POLYSCAN_API_KEY!,
      polygonMumbai: process.env.POLYSCAN_API_KEY!,
      arbitrumGoerli: process.env.ARBISCAN_API_KEY!,
    },
    customChains: [
      {
        network: 'arbitrumGoerli',
        chainId: 421613,
        urls: {
          apiURL: 'https://api-goerli.arbiscan.io/api',
          browserURL: 'https://goerli.arbiscan.io/',
        },
      },
    ],
  },
  namedAccounts: {
    deployer: {
      // Key here is the network id
      default: 0, // tests
      // These need a private key set in .env file as `PRIVATE_KEY`
      4: '0xB9563F6aEd9a3986Fe0e4B57cA1Af40dBD7F7720', // rinkeby
      80001: '0x4e2548274014F034Ffc71947bb7bA584C64E2315',
      11155111: '0x4e2548274014F034Ffc71947bb7bA584C64E2315',
      // TODO: Setup mainnet account
      1: 0, // mainnet
    },
  },
};

export default config;
