import { task } from 'hardhat/config';
import { v4 as uuidv4 } from 'uuid';
import { CID } from 'ipfs-http-client';

import { UUIDToBytes16 } from '../ipfs/utils/bytes16UUID';
import { addToIPFS, getDataFromIPFSByCID } from '../ipfs/IPFSapi';
import { cidToBytes32, bytes32ToCid } from '../ipfs/utils/bytes32IPFSHash';
import { Contract } from 'ethers';

const OBJECT_TYPES = [
  'entity',
  'integer',
  'float',
  'decimal',
  'string',
  'anyURI',
  'dateTime',
];

const done = (hash: string, networkName: string) => {
  console.log('DONE');
  console.log(`https://${networkName}.etherscan.io/tx/${hash}`);
};

const getPredicate = async ({
  id,
  cid,
  GoldenSchema,
}: {
  id: string;
  cid: string;
  GoldenSchema: Contract;
}) => {
  let _cid: string;
  if (cid) {
    _cid = cid;
  } else if (id) {
    _cid = bytes32ToCid(
      await GoldenSchema.predicateIDToLatestCID(UUIDToBytes16(id))
    );
  } else {
    throw Error('Must provide either `--id` or `--cid`');
  }
  const predicate = await getDataFromIPFSByCID(_cid);
  if (!predicate) {
    throw Error(`No predicate found with CID: ${_cid}, ID: ${id}`);
  }
  return predicate;
};

task('addPredicate', 'Add predicate to IPFS and create a proposal')
  .addParam('name', 'Name of the predicate')
  .addParam('description', 'Description of the predicate')
  .addParam(
    'objectType',
    `Object type of the predicate. Valid types are: ${OBJECT_TYPES}`
  )
  .addParam('label', 'Label of the predicate')
  .setAction(
    async (
      { name, description, objectType, label },
      { ethers, getNamedAccounts, network }
    ) => {
      if (!OBJECT_TYPES.includes(objectType)) {
        throw Error(
          `Invalid object type: ${objectType}. Valid types are: ${OBJECT_TYPES}`
        );
      }
      const GoldenSchema = await ethers.getContract('GoldenSchema');
      let id = uuidv4();
      while (
        (await GoldenSchema.predicateIDToLatestCID(UUIDToBytes16(id))) !==
        '0x0000000000000000000000000000000000000000000000000000000000000000'
      ) {
        id = uuidv4();
      }
      const predicateData = {
        id,
        name,
        description,
        object_type: objectType,
        label,
      };
      const cid = await addToIPFS(predicateData);
      const predicate = await getDataFromIPFSByCID(cid.toString());
      const { deployer } = await getNamedAccounts();
      const GoldenSchemaGovernor = (
        await ethers.getContract('GoldenSchemaGovernor')
      ).connect(await ethers.getSigner(deployer));
      const transactionData = GoldenSchema.interface.encodeFunctionData(
        'addPredicate',
        [UUIDToBytes16(id), cidToBytes32(cid)]
      );
      const proposalDescription = `Add predicate type\n${JSON.stringify(
        predicate
      )}`;
      const transaction = await GoldenSchemaGovernor.propose(
        [GoldenSchema.address],
        [0],
        [transactionData],
        proposalDescription
      );
      console.log(proposalDescription);
      done(transaction.hash, network.name);
    }
  );

task('updatePredicate', 'Add predicate to IPFS and create a proposal')
  .addParam('id', 'UUID of the predicate', undefined, undefined, true)
  .addParam('cid', 'CID of the predicate', undefined, undefined, true)
  .addParam('name', 'Name of the predicate', undefined, undefined, true)
  .addParam('label', 'Label of the predicate', undefined, undefined, true)
  .addParam(
    'description',
    'Description of the predicate',
    undefined,
    undefined,
    true
  )
  .addParam(
    'objectType',
    `Object type of the predicate. Valid types are: ${OBJECT_TYPES}`,
    undefined,
    undefined,
    true
  )
  .setAction(async (params, { ethers, getNamedAccounts, network }) => {
    const GoldenSchema = await ethers.getContract('GoldenSchema');
    const { id, cid } = params;
    const currentVersion = await getPredicate({ id, cid, GoldenSchema });
    const predicateData = {
      id: currentVersion.id,
      name: params.name || currentVersion.name,
      description: params.description || currentVersion.description,
      object_type: params.objectType || currentVersion.object_type,
      label: params.label || currentVersion.label,
      prevVersion: CID.parse(currentVersion.cid),
    };
    const newCid = await addToIPFS(predicateData);
    const newVersion = await getDataFromIPFSByCID(newCid.toString());
    const { deployer } = await getNamedAccounts();
    const GoldenSchemaGovernor = (
      await ethers.getContract('GoldenSchemaGovernor')
    ).connect(await ethers.getSigner(deployer));
    const transactionData = GoldenSchema.interface.encodeFunctionData(
      'updatePredicate',
      [UUIDToBytes16(currentVersion.id), cidToBytes32(newCid)]
    );
    const proposalDescription = `Update predicate type\n- ${JSON.stringify(
      currentVersion
    )}\n+ ${JSON.stringify(newVersion)}`;
    const transaction = await GoldenSchemaGovernor.propose(
      [GoldenSchema.address],
      [0],
      [transactionData],
      proposalDescription
    );
    console.log(proposalDescription);
    done(transaction.hash, network.name);
  });

task('removePredicate', 'Add predicate to IPFS and create a proposal')
  .addParam('id', 'UUID of the predicate', undefined, undefined, true)
  .addParam('cid', 'CID of the predicate', undefined, undefined, true)
  .setAction(async (params, { ethers, getNamedAccounts, network }) => {
    const GoldenSchema = await ethers.getContract('GoldenSchema');
    const { id, cid } = params;
    const currentVersion = await getPredicate({ id, cid, GoldenSchema });
    const { deployer } = await getNamedAccounts();
    const GoldenSchemaGovernor = (
      await ethers.getContract('GoldenSchemaGovernor')
    ).connect(await ethers.getSigner(deployer));
    const transactionData = GoldenSchema.interface.encodeFunctionData(
      'removePredicate',
      [UUIDToBytes16(currentVersion.id)]
    );
    const proposalDescription = `Remove predicate type\n${JSON.stringify(
      currentVersion
    )}`;
    const transaction = await GoldenSchemaGovernor.propose(
      [GoldenSchema.address],
      [0],
      [transactionData],
      proposalDescription
    );
    console.log(proposalDescription);
    done(transaction.hash, network.name);
  });
