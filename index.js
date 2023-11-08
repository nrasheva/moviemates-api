require('dotenv').config();

const cors = require('cors');
const express = require('express');
const router = require('./router');
const { initializeMongoose } = require('./database');

const app = express();
const port = 3000;

app.use(express.json(), cors(), router);

initializeMongoose();

app.listen(port, () => {
  console.log(`Moviemates API listening on port ${port}`);
});
