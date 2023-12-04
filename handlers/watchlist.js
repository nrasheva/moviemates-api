const { User } = require('../models/User');

async function addMovie(req, res) {
  const movieId = req.query.id;
  const userId = req.header('id');

  if (!movieId || isNaN(movieId)) {
    res.status(400).json({ message: 'id parameter must be a number' });
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

async function deleteMovie(req, res) {
  const movieId = req.query.id;
  const userId = req.header('id');

  if (!movieId || isNaN(movieId)) {
    res.status(400).json({ message: 'id parameter must be a number' });
    return;
  }

  try {
    const user = await User.findById(userId);

    if (user) {
      await User.findByIdAndUpdate(userId, { $pull: { watchlist: Number(movieId) } }, { new: true });

      res.status(204).send();
    } else {
      res.status(404).json({ message: 'user not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function getWatchlist(req, res) {
  const userId = req.header('id');

  try {
    const user = await User.findById(userId);

    res.status(200).json(user.watchlist);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

module.exports = { addMovie, deleteMovie, getWatchlist };
