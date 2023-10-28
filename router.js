const express = require('express');
const { getGenres } = require('./handlers/genres');
const { discoverMovies } = require('./handlers/movies');

const router = express.Router();

router.get('/discoverMovies', discoverMovies);
router.get('/getGenres', getGenres);

module.exports = router;
