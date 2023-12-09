require('dotenv').config();

const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const { initializeMongoose } = require('./database');
const { router } = require('./router');

const app = express();
const port = 3000;

initializeMongoose();

app.use(cors(), express.json(), morgan('combined'), router);

app.listen(port, () => {
  console.log(`Moviemates API listening on port ${port}`);
});
