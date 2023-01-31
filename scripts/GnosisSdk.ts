// Mihail: This file isn't used but it's very important and can be used in the near future
import Safe from '@gnosis.pm/safe-core-sdk';
import EthersAdapter from '@gnosis.pm/safe-ethers-lib';
import { ethers } from 'ethers';
import { HardhatEthersHelpers } from '@nomiclabs/hardhat-ethers/types';

import dotenv from 'dotenv';

dotenv.config();

const { utils } = ethers;

type HardhatEthers = typeof ethers & HardhatEthersHelpers;

const GNOSIS_WALLET_PRIVATE_KEY = process.env.GNOSIS_WALLET_PRIVATE_KEY;
const GNOSIS_WALLET2_PRIVATE_KEY = process.env.GNOSIS_WALLET2_PRIVATE_KEY;

let _GnosisSafeWallet1: Safe | undefined;
let _GnosisSafeWallet2: Safe | undefined;

// @ts-expect-error unused-variable
const _initAndExecGnosisTx = async (
  ethers: HardhatEthers,
  params: string[]
) => {
  throw new Error('Deprecated, migrate to sepolia when Gnosis adds support');
  const GoldenNFT = await ethers.getContract('GoldenNFT');
  /**
   * To burn some tokens do:
   * const data = iface.encodeFunctionData("bulkBurn", [[1, 2, 3...]])
   */
  const data = GoldenNFT.interface.encodeFunctionData('bulkMint', params);
  try {
    const receipt = await createGnosisTx(ethers, GoldenNFT.address, data);
    if (receipt) {
      const selectiveReceipt = {
        ...receipt,
        logs: undefined,
        events: undefined,
      };
      // Print receipt if you want to log logs and events as well
      console.debug(
        `>>> GNOSIS: safeTransaction executed ${JSON.stringify(
          selectiveReceipt,
          null,
          4
        )}`
      );
    } else {
      console.error(`>>> GNOSIS receipt is undefined!!`);
    }
  } catch (e) {
    console.error(`>>> GNOSIS error ${JSON.stringify(e, null, 2)}`);
  }
};

const getSafes = async (ethers: HardhatEthers) => {
  if (!_GnosisSafeWallet1 || !_GnosisSafeWallet2) {
    const config = {
      SAFE_ADDRESS: '0xF3dC74fDB8b3F53Ab11889bc6F27D9a5654bCBb4',
      SAFE_OWNERS_PRIVATE_KEYS: [
        GNOSIS_WALLET_PRIVATE_KEY,
        GNOSIS_WALLET2_PRIVATE_KEY,
      ],
    };
    const signers = config.SAFE_OWNERS_PRIVATE_KEYS.map(
      (privateKey) => new ethers.Wallet(privateKey!, ethers.provider)
    );

    const firstSigner = signers[0];
    const secondSigner = signers[1];

    if (!firstSigner) {
      throw new Error('Missing firstSigner');
    }
    if (!secondSigner) {
      throw new Error('Missing secondSigner');
    }

    const ethAdapter = new EthersAdapter({
      ethers,
      signer: firstSigner,
    });

    const ethAdapter2 = new EthersAdapter({
      ethers,
      signer: secondSigner,
    });

    // Safe Core SDK instance
    _GnosisSafeWallet1 = await Safe.create({
      ethAdapter,
      safeAddress: config.SAFE_ADDRESS,
    });

    _GnosisSafeWallet2 = await _GnosisSafeWallet1.connect({
      ethAdapter: ethAdapter2,
      safeAddress: config.SAFE_ADDRESS,
    });
  }
  return {
    Safe1: _GnosisSafeWallet1,
    Safe2: _GnosisSafeWallet2,
  };
};

const createGnosisTx = async (
  ethers: HardhatEthers,
  address: string,
  data: string
) => {
  if (
    !(GNOSIS_WALLET_PRIVATE_KEY ?? '') ||
    !(GNOSIS_WALLET2_PRIVATE_KEY ?? '')
  ) {
    throw new Error(
      'Missing env variables: GNOSIS_WALLET_PRIVATE_KEY, GNOSIS_WALLET2_PRIVATE_KEY'
    );
  }

  const { Safe1, Safe2 } = await getSafes(ethers);

  const to = utils.getAddress(address);

  const safeTransactionData = {
    to,
    value: '0',
    data,
  };

  console.log('Creating safe transaction');
  const safeTransaction = await Safe1.createTransaction({
    safeTransactionData,
  });

  const txHash = await Safe1.getTransactionHash(safeTransaction);

  console.log('Approving transaction hash with safe 1');
  const approveTxResponse = await Safe1.approveTransactionHash(txHash);
  await approveTxResponse.transactionResponse?.wait(1);
  console.log('Approving transaction hash with safe 2');
  const approveTxResponse2 = await Safe2.approveTransactionHash(txHash);
  await approveTxResponse2.transactionResponse?.wait(1);

  console.log('Executing transaction');
  const executeTxResponse = await Safe2.executeTransaction(safeTransaction);
  const receipt = await executeTxResponse.transactionResponse?.wait(1);
  console.log('Executed transaction');
  return receipt;
};
