// Mihail: This file isn't used but it's very important and can be used in the near future
import Safe from '@gnosis.pm/safe-core-sdk';
import EthersAdapter from '@gnosis.pm/safe-ethers-lib';
import { ethers } from 'ethers';

import GoldenNFT from '../../contracts/deployments/goerli/GoldenNFT.json';
import ABI from '../../contracts/deployments/goerli/GoldenNFT.json';

const { utils } = ethers;

const WALLET_PRIVATE_KEY = process.env.GNOSIS_WALLET_PRIVATE_KEY;
const NFT_WALLET_APPROVER = process.env.NFT_WALLET_APPROVER;
const ALCHEMY_URL = process.env.ALCHEMY_URL;

let _GnosisSafeWallet1: Safe | undefined;
let _GnosisSafeWallet2: Safe | undefined;

// @ts-expect-error unused-variable
const _initAndExecGnosisTx = async (params: string[]) => {
  const iface = new ethers.utils.Interface(ABI.abi);
  /**
   * To burn some tokens do:
   * const data = iface.encodeFunctionData("bulkBurn", [[1, 2, 3...]])
   */
  const data = iface.encodeFunctionData('bulkMint', params);
  try {
    const receipt = await createGnosisTx(data);
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

const getSafes = async () => {
  if (!_GnosisSafeWallet1 || !_GnosisSafeWallet2) {
    const config = {
      RPC_URL: ALCHEMY_URL,
      SAFE_ADDRESS: '0xF3dC74fDB8b3F53Ab11889bc6F27D9a5654bCBb4',
      SAFE_OWNERS_PRIVATE_KEYS: [WALLET_PRIVATE_KEY, NFT_WALLET_APPROVER],
      SAFE_TRANSACTION_SERVICE_URL:
        'https://safe-transaction.goerli.gnosis.io/',
    };
    const provider = new ethers.providers.JsonRpcProvider(config.RPC_URL);
    const signers = config.SAFE_OWNERS_PRIVATE_KEYS.map(
      (privateKey) => new ethers.Wallet(privateKey!, provider)
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

const createGnosisTx = async (data: string) => {
  if (
    !(WALLET_PRIVATE_KEY ?? '') ||
    !(NFT_WALLET_APPROVER ?? '') ||
    !(ALCHEMY_URL ?? '')
  ) {
    throw new Error(
      'Missing env variables: WALLET_PRIVATE_KEY, NFT_WALLET_APPROVER, ALCHEMY_URL'
    );
  }

  const { Safe1, Safe2 } = await getSafes();

  const to = utils.getAddress(GoldenNFT.address);

  const safeTransactionData = {
    to,
    value: '0',
    data,
  };

  const safeTransaction = await Safe1.createTransaction({
    safeTransactionData,
  });

  const txHash = await Safe1.getTransactionHash(safeTransaction);

  const approveTxResponse = await Safe1.approveTransactionHash(txHash);
  await approveTxResponse.transactionResponse?.wait(1);
  const approveTxResponse2 = await Safe2.approveTransactionHash(txHash);
  await approveTxResponse2.transactionResponse?.wait(1);

  const executeTxResponse = await Safe2.executeTransaction(safeTransaction);
  const receipt = await executeTxResponse.transactionResponse?.wait(1);
  return receipt;
};
