const { User } = require('../models/User');

async function addMovie(req, res) {
  const movieId = req.query.id;
  const userId = req.header('id');

  if (!movieId) {
    res.status(400).json({ message: 'movieId parameter not provided' });
    return;
  }

  try {
    const user = await User.findById(userId);

    if (user) {
      const updatedWatchlist = [...new Set([...user.watchlist, Number(movieId)])];

      user.watchlist = updatedWatchlist;

      await user.save();

      res.status(204).send();
    } else {
      res.status(404).json({ message: 'user not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

module.exports = { addMovie };
