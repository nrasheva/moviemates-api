const express = require('express');
const { getGenres } = require('./handlers/genres');
const { discoverMovies, getMovie } = require('./handlers/movies');

const router = express.Router();

router.get('/discoverMovies', discoverMovies);
router.get('/getGenres', getGenres);
router.get('/getMovie', getMovie);

module.exports = router;
