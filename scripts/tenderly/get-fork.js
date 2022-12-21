const path = require('path');
require('dotenv').config({
  path: path.join(process.cwd(), '.env'),
});
process.stdout.write(path.join(process.cwd(), '.env'));
const axios = require('axios');
const { TENDERLY_PROJECT, TENDERLY_ACCESS_KEY, FORK_NAME } = process.env;

if (!FORK_NAME) {
  throw new Error(`Missing env: FORK_NAME`);
}

// return forks from project
const TENDERLY_FORKS = `https://api.tenderly.co/api/v2/project/${TENDERLY_PROJECT}/forks`;

axios
  .get(TENDERLY_FORKS, {
    headers: {
      'X-Access-Key': TENDERLY_ACCESS_KEY,
    },
  })
  .then((res) => {
    if (!Array.isArray(res.data)) {
      throw new Error(`Tenderly error`);
    }

    const fork = res.data.find(({ name }) => name === FORK_NAME);

    if (!fork) {
      throw new Error(`Fork not found`);
    }

    return process.stdout.write(fork.id);
  })
  .catch(process.stderr.write);
