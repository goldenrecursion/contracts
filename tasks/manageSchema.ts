import { task } from 'hardhat/config';
import { createGnosisTx } from '../scripts/GnosisSdk';

import { Contract, ethers } from 'ethers';
import { HardhatEthersHelpers } from '@nomiclabs/hardhat-ethers/types';
import oldGoldenSchemaAbi from '../abis/GoldenSchemaGoerli.json';
import newGoldenSchema from '../deployments/sepolia/GoldenSchema.json';
import { getGnosisWallet } from '../utils/env.utils';

const newGoldenSchemaAbi = newGoldenSchema.abi;
const newSepoliaSchema = newGoldenSchema.address;

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

task(
  'migrateToSepolia',
  'Migrate all the state to Sepolia blockchain'
).setAction(async (_, { ethers }) => {
  const { predicates, entityTypes } = await getPredicatesAndEntityTypes();

  const predChunks = getChunks(predicates);
  const typesChunks = getChunks(entityTypes);

  const infuraProvider = new ethers.providers.InfuraProvider(
    'sepolia',
    process.env.INFURA_SEPOLIA_KEY
  );

  const signer = new ethers.Wallet(process.env.PRIVATE_KEY!, infuraProvider);
  const newSchemaContract = new ethers.Contract(
    newSepoliaSchema,
    newGoldenSchemaAbi,
    signer
  );

  console.log(
    'predicates',
    predChunks.map((el) => el.length)
  );
  console.log(
    'entityTypes',
    typesChunks.map((el) => el.length)
  );

  const predicateLength = Object.keys(
    await newSchemaContract.predicates()
  ).length;
  const typesLength = Object.keys(await newSchemaContract.entityTypes()).length;

  if (typesLength > 0 || predicateLength > 0) {
    console.error('New contract already has state');
    return;
  }

  console.log('sepolia predicates', predicateLength);
  console.log('sepolia types', typesLength);
  console.log('owner', await newSchemaContract.owner());

  for (const chunk of predChunks) {
    const gas = await getGasData(newSchemaContract);
    await (await newSchemaContract.bulkAddPredicates(chunk, gas)).wait(1);
    console.log('Added predicates');
  }

  for (const chunk of typesChunks) {
    const gas = await getGasData(newSchemaContract);
    await (await newSchemaContract.bulkAddEntityTypes(chunk, gas)).wait(1);
    console.log('Added entity types');
  }

  console.log(
    'Predicates after migration',
    Object.keys(await newSchemaContract.predicates()).length
  );
  console.log(
    'Types after migration',
    Object.keys(await newSchemaContract.predicates()).length
  );
});

const getChunks = (indexedObject: any) => {
  const chunkSize = 10;
  const result = [];
  let chunks = [];

  let count = 0;
  for (const key of Object.keys(indexedObject)) {
    const item = indexedObject[key];
    const validKeys = Object.keys(item).filter((el) => el.includes('ID'));
    chunks.push({
      [validKeys[0]]: item[validKeys[0]],
      [validKeys[1]]: item[validKeys[1]],
    });
    count++;
    if (count === chunkSize) {
      count = 0;
      result.push(chunks);
      chunks = [];
    }
  }
  if (chunks.length > 0) {
    result.push(chunks);
  }

  return result;
};

const getPredicatesAndEntityTypes = async () => {
  const contractAddress = '0x5d17C47bd3eF557881DC5CdF674bceebE425B2d3'; // Old GoldenSchema contract
  const alchemyProvider = new ethers.providers.AlchemyProvider(
    'goerli',
    process.env.ALCHEMY_GOERLI_KEY
  );

  const signer = new ethers.Wallet(process.env.PRIVATE_KEY!, alchemyProvider);
  const contract = new ethers.Contract(
    contractAddress,
    oldGoldenSchemaAbi,
    signer
  );
  console.log('old owner', await contract.owner());
  const predicates = await contract.predicates();
  const entityTypes = await contract.entityTypes();
  return {
    predicates,
    entityTypes,
  };
};

const getGasData = async (contract: Contract) => {
  const gasPrice = await contract.provider.getGasPrice();
  return {
    maxPriorityFeePerGas: gasPrice.mul(2),
    maxFeePerGas: gasPrice.mul(2),
  };
};
