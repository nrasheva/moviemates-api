const express = require('express');
const { authMiddleware } = require('./middleware');
const { createComment, deleteComment, editComment, getComments } = require('./handlers/comments');
const { discoverMovies, getMovie } = require('./handlers/movies');
const { getGenres } = require('./handlers/genres');
const { login, register } = require('./handlers/authentication');
const { addMovie, deleteMovie, getWatchlist } = require('./handlers/watchlist');

const router = express.Router();

router.post('/login', login);
router.post('/register', register);

router.delete('/comment', authMiddleware, deleteComment);
router.get('/comments', authMiddleware, getComments);
router.post('/comment', authMiddleware, createComment);
router.put('/comment', authMiddleware, editComment);

router.get('/getGenres', getGenres);

router.get('/discoverMovies', discoverMovies);
router.get('/getMovie', getMovie);

router.delete('/watchlist', authMiddleware, deleteMovie);
router.get('/watchlist', authMiddleware, getWatchlist);
router.post('/watchlist', authMiddleware, addMovie);

router.get('/', (req, res) =>
  res.status(200).json({ status: `Moviemates API running in a ${process.env.NODE_ENV} environment` })
);

module.exports = { router };
