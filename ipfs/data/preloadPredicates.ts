import fs from 'fs';

import { UUIDToBytes16 } from '../utils/bytes16UUID';
import { cidToBytes32 } from '../utils/bytes32IPFSHash';
import { addToIPFS } from '../IPFSapi';

import predicates from './predicates.json';

const preloadData = async (data: Record<string, any>[]) => {
  const cids = await Promise.all(
    data.map(async (item) => {
      const cid = await addToIPFS(item);

      return cid;
    })
  );

  return cids;
};

const preload = async () => {
  const predicateCIDS = await preloadData(predicates);
  const data = predicates.map((predicate, i) => [
    UUIDToBytes16(predicate.id),
    cidToBytes32(predicateCIDS[i]!),
  ]);

  //eslint-disable-next-line no-console
  console.log(`IPFS smart contract initial state:`, data);

  fs.writeFileSync(
    'contracts/contracts/GoldenSchemaPredicates.json',
    JSON.stringify(data, null, 2)
  );
};

preload();
