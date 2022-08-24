import fs from 'fs';

import { UUIDToBytes16 } from '../utils/bytes16UUID';
import { cidToBytes32 } from '../utils/bytes32IPFSHash';
import { addToIPFS } from '../IPFSapi';

import predicates from './predicates.json';

Promise.all(predicates.map(addToIPFS))
  .then((predicateCIDS) => {
    return fs.writeFileSync(
      __dirname + '/../../contracts/GoldenSchemaPredicates.json',
      JSON.stringify(
        predicates.map((predicate, i) => [
          UUIDToBytes16(predicate.id),
          cidToBytes32(predicateCIDS[i]),
        ]),
        null,
        2
      ) + '\n'
    );
  })
  .catch(console.error);
