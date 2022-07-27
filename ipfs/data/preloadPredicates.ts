import fs from 'fs';

import { UUIDToBytes16 } from '../utils/bytes16UUID';
import { cidToBytes32 } from '../utils/bytes32IPFSHash';
import { addToIPFS, IPFSPredicatePayload } from '../IPFSapi';

import predicates from './predicates.json';

const preloadData = async (data: IPFSPredicatePayload[]) => {
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

  fs.writeFileSync(
    __dirname + '/../../contracts/GoldenSchemaPredicates.json',
    JSON.stringify(data, null, 2)
  );
};

preload();
