require('dotenv').config();
const axios = require('axios');
const { TENDERLY_USER, TENDERLY_PROJECT, TENDERLY_ACCESS_KEY } = process.env;
const TENDERLY_FORK_API = `https://api.tenderly.co/api/v1/account/${TENDERLY_USER}/project/${TENDERLY_PROJECT}/fork`;

axios
  .post(
    TENDERLY_FORK_API,
    {
      network_id: '1',
    },
    {
      headers: {
        'X-Access-Key': TENDERLY_ACCESS_KEY,
      },
      timeout: 5000,
    }
  )
  .then((res) => {
    const forkId = res.data.simulation_fork.id;
    return process.stdout.write(forkId);
  })
  .catch(process.stderr.write);