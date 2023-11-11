require('dotenv').config();

const cors = require('cors');
const express = require('express');
const { initializeMongoose } = require('./database');
const { router } = require('./router');

const app = express();
const port = 3000;

initializeMongoose();

app.use(express.json(), cors(), router);

app.listen(port, () => {
  console.log(`Moviemates API listening on port ${port}`);
});
