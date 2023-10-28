const express = require('express');
const { getGenres } = require('./handlers/genres');

const router = express.Router();

router.get('/getGenres', getGenres);

module.exports = router;
