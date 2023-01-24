// Go to https://hardhat.org/config/ to learn more
import * as dotenv from 'dotenv';
import * as tenderly from '@tenderly/hardhat-tenderly';
dotenv.config();

import { HardhatUserConfig } from 'hardhat/config';
import '@typechain/hardhat';

// eslint-disable-next-line n/no-extraneous-import
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
import './tasks/manageRoles';
import {
  getArbitrumScanApiKey,
  getDeployerAddress,
  getEtherScanApiKey,
  getPolyScanApiKey,
  getTenderlyForkChainId,
  getTenderlyForkId,
  getTenderlyProject,
  getTenderlyUser,
} from './utils/env.utils';

export const deployerAddress = getDeployerAddress()

const accounts =
  process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [];

tenderly.setup({ automaticVerifications: true });

const ETHER_SCAN_API_KEY = getEtherScanApiKey();
const POLY_SCAN_API_KEY = getPolyScanApiKey();
const ARBITRUM_SCAN_API_KEY = getArbitrumScanApiKey();

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
    tenderly: {
      url: `https://rpc.tenderly.co/fork/${getTenderlyForkId()}`,
      chainId: getTenderlyForkChainId(),
    },
  },
  tenderly: {
    project: getTenderlyProject(),
    username: getTenderlyUser(),
    privateVerification: true,
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: 'USD',
  },
  etherscan: {
    apiKey: {
      mainnet: ETHER_SCAN_API_KEY,
      ropsten: ETHER_SCAN_API_KEY,
      rinkeby: ETHER_SCAN_API_KEY,
      sepolia: ETHER_SCAN_API_KEY,
      goerli: ETHER_SCAN_API_KEY,
      kovan: ETHER_SCAN_API_KEY,
      polygon: POLY_SCAN_API_KEY,
      polygonMumbai: POLY_SCAN_API_KEY,
      arbitrumGoerli: ARBITRUM_SCAN_API_KEY,
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
      {
        network: 'sepolia',
        chainId: 11155111,
        urls: {
          apiURL: 'https://api-sepolia.etherscan.io/api',
          browserURL: 'https://sepolia.etherscan.io/',
        },
      },
    ],
  },
  namedAccounts: {
    deployer: {
      // Key here is the network id
      default: 0, // tests
      // These need a private key set in .env file as `PRIVATE_KEY`
      80001: deployerAddress,
      11155111: deployerAddress,
      // TODO: Setup mainnet account
      1: 0, // mainnet
    },
  },
};

export default config;
