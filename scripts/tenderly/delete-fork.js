const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '../../', '.env'),
});
const axios = require('axios');
const {
  TENDERLY_USER,
  TENDERLY_PROJECT,
  TENDERLY_ACCESS_KEY,
  TENDERLY_FORK_ID,
} = process.env;

if (!TENDERLY_FORK_ID) {
  throw new Error(`Missing env: TENDERLY_FORK_ID`);
}

const TENDERLY_FORK_ACCESS_URL = `https://api.tenderly.co/api/v1/account/${TENDERLY_USER}/project/${TENDERLY_PROJECT}/fork/${TENDERLY_FORK_ID}`;

axios
  .delete(TENDERLY_FORK_ACCESS_URL, {
    headers: {
      'X-Access-Key': TENDERLY_ACCESS_KEY,
    },
  })
  .then(() => process.stdout.write('Done'))
  .catch((err) => process.stderr.write(err.message));
