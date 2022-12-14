require('dotenv').config();
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
  .catch(process.stderr.write);
