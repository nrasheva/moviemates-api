const express = require('express');
const { authMiddleware } = require('./middleware');
const { createComment, getComments } = require('./handlers/comments');
const { discoverMovies, getMovie } = require('./handlers/movies');
const { getGenres } = require('./handlers/genres');
const { login, register } = require('./handlers/authentication');

const router = express.Router();

router.get('/comments', authMiddleware, getComments);
router.get('/discoverMovies', discoverMovies);
router.get('/getGenres', getGenres);
router.get('/getMovie', getMovie);
router.post('/comment', authMiddleware, createComment);
router.post('/login', login);
router.post('/register', register);

module.exports = { router };
