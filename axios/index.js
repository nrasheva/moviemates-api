const axios = require('axios');

const baseURL = process.env.TMDB_BASE_URL;
const timeout = 20000;

axios.defaults.baseURL = baseURL;
axios.defaults.timeout = timeout;

module.exports = { axios };
