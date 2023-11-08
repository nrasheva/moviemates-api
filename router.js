const express = require('express');
const { discoverMovies, getMovie } = require('./handlers/movies');
const { getGenres } = require('./handlers/genres');
const { register } = require('./handlers/authentication');

const router = express.Router();

router.get('/discoverMovies', discoverMovies);
router.get('/getGenres', getGenres);
router.get('/getMovie', getMovie);
router.post('/register', register);

module.exports = router;
