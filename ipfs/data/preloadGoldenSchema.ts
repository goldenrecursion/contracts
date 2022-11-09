import fs from 'fs';

import { UUIDToBytes16 } from '../utils/bytes16UUID';
import { cidToBytes32 } from '../utils/bytes32IPFSHash';
import { addToIPFS } from '../IPFSapi';

import predicates from './predicates.json';
import entityTypes from './entityTypes.json';

const ipfsNodeConfigs = [
  {
    filename: 'GoldenSchemaPredicates.json',
    nodes: predicates,
  },
  {
    filename: 'GoldenSchemaEntityTypes.json',
    nodes: entityTypes,
  },
];

for (const ipfsNodeConfig of ipfsNodeConfigs) {
  Promise.all(ipfsNodeConfig.nodes.map(addToIPFS))
    .then((nodeCIDS) => {
      return fs.writeFileSync(
        __dirname + `/../../contracts/${ipfsNodeConfig.filename}`,
        JSON.stringify(
          ipfsNodeConfig.nodes.map((node, i) => [
            UUIDToBytes16(node.id),
            cidToBytes32(nodeCIDS[i]),
          ]),
          null,
          2
        ) + '\n'
      );
    })
    .catch(console.error);
}
