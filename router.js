const express = require('express');
const { authMiddleware } = require('./middleware');
const { createComment, deleteComment, editComment, getComments } = require('./handlers/comments');
const { discoverMovies, getMovie } = require('./handlers/movies');
const { getGenres } = require('./handlers/genres');
const { login, register } = require('./handlers/authentication');
const { addMovie } = require('./handlers/watchlist');

const router = express.Router();

router.delete('/comment', authMiddleware, deleteComment);
router.get('/comments', authMiddleware, getComments);
router.get('/discoverMovies', discoverMovies);
router.get('/getGenres', getGenres);
router.get('/getMovie', getMovie);
router.post('/comment', authMiddleware, createComment);
router.post('/login', login);
router.post('/register', register);
router.put('/comment', editComment);
router.post('/watchlist', authMiddleware, addMovie);

module.exports = { router };
