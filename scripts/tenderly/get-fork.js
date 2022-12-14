require('dotenv').config();
const axios = require('axios');
const { TENDERLY_PROJECT, TENDERLY_ACCESS_KEY, TENDERLY_FORK_ID } = process.env;

if (!TENDERLY_FORK_ID) {
  throw new Error(`Missing env: TENDERLY_FORK_ID`);
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

    const fork = res.data.find(({ id }) => id === TENDERLY_FORK_ID);
    console.log({
      fork,
      TENDERLY_FORK_ID,
    });

    return process.stdout.write(fork);
  })
  .catch(process.stderr.write);
