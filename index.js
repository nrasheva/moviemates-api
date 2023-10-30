require('dotenv').config();

const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();

const port = 3000;

app.use(cors(), router);

app.listen(port, () => {
  console.log(`Moviemates API listening on port ${port}`);
});
