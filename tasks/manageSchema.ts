import { task } from 'hardhat/config';
import { createGnosisTx } from '../scripts/GnosisSdk';

import { ethers } from 'ethers';
import { HardhatEthersHelpers } from '@nomiclabs/hardhat-ethers/types';
import { getGnosisWallet } from '../utils';

type HardhatEthers = typeof ethers & HardhatEthersHelpers;

const SLEEP_WAIT_TIME_MS = 5000;

const proposeVoteAndExecute = async (
  ethers: HardhatEthers,
  proposalAddress: string,
  proposalTransactionData: string,
  description: string
) => {
  const wallet = new ethers.Wallet(getGnosisWallet(), ethers.provider);

  const GoldenSchemaGovernor = (
    await ethers.getContract('GoldenSchemaGovernor')
  ).connect(wallet);
  const descriptionHash = ethers.utils.id(description);
  console.log(description);
  console.log(`Proposal description hash: ${descriptionHash}`);

  const transaction = await GoldenSchemaGovernor.propose(
    [proposalAddress],
    [0],
    [proposalTransactionData],
    description
  );
  const result = await transaction.wait();
  const proposalId = result.events!.find(
    (event: { event: string }) => event.event === 'ProposalCreated'
  )!.args![0];

  let governorState = await GoldenSchemaGovernor.state(proposalId);
  console.log(
    `Governor state: ${await GoldenSchemaGovernor.state(proposalId)}`
  );
  while (governorState !== 1) {
    console.log(
      `Waiting for proposal to become votable, governor state: ${governorState}`
    );
    await new Promise((resolve) => setTimeout(resolve, SLEEP_WAIT_TIME_MS));
    governorState = await GoldenSchemaGovernor.state(proposalId);
  }
  console.log(`Proposal ID: ${proposalId}`);

  const voteTransactionData = GoldenSchemaGovernor.interface.encodeFunctionData(
    'castVote',
    [proposalId, 1]
  );
  await createGnosisTx(
    ethers,
    GoldenSchemaGovernor.address,
    voteTransactionData
  );
  console.log(`Proposal ${proposalId} voted`);

  governorState = await GoldenSchemaGovernor.state(proposalId);
  console.log(
    `Governor state: ${await GoldenSchemaGovernor.state(proposalId)}`
  );
  while (governorState !== 4) {
    console.log(
      `Waiting for proposal to become executable, governor state: ${governorState}`
    );
    await new Promise((resolve) => setTimeout(resolve, SLEEP_WAIT_TIME_MS));
    governorState = await GoldenSchemaGovernor.state(proposalId);
  }

  await GoldenSchemaGovernor.execute(
    [proposalAddress],
    [0],
    [proposalTransactionData],
    descriptionHash
  );
  console.log(`Proposal ${proposalId} executed`);
};

task('changeSchema', 'Change schema by calling a contract mutation method')
  .addParam(
    'call',
    'addPredicate(0x33a32d05fa014409b52a1ae68a00a366,0x912c7cdebb0a8d99787e3fcbca4e609052741e79f4cf2e24dcb24f3a9b7ffce6)',
    undefined,
    undefined,
    true
  )
  .setAction(async (params, { ethers, getNamedAccounts, network }) => {
    const { call } = params;

    const matchResult = call.match(/([a-zA-Z]+)\((.*)\)/);
    if (matchResult == null) {
      throw new Error(
        `Wrong usage.  Use something like --call "addPredicate(0x33a32d05fa014409b52a1ae68a00a366,0x912c7cdebb0a8d99787e3fcbca4e609052741e79f4cf2e24dcb24f3a9b7ffce6)"`
      );
    }

    const methodName = matchResult[1];
    const args = matchResult[2].split(',').map((arg: string) => arg.trim());
    switch (methodName) {
      case 'addPredicate':
      case 'updatePredicate':
      case 'addEntityType':
      case 'updateEntityType':
        if (args.length !== 2) {
          throw new Error(`Method ${methodName} has wrong number of arguments`);
        }
        break;
      case 'removePredicate':
      case 'removeEntityType':
        if (args.length !== 1) {
          throw new Error(`Method ${methodName} has wrong number of arguments`);
        }
        break;
      default:
        throw new Error(`Unsupported method ${methodName}`);
    }

    const GoldenSchema = await ethers.getContract('GoldenSchema');

    const schemaTransactionData = GoldenSchema.interface.encodeFunctionData(
      methodName,
      args
    );
    const description = `Proposing to call: GoldenSchema.${methodName}(${args.join(
      ', '
    )})`;
    await proposeVoteAndExecute(
      ethers,
      GoldenSchema.address,
      schemaTransactionData,
      description
    );
  });
