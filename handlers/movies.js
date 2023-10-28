const axios = require('axios');

async function discoverMovies(req, res) {
  const genre = req.query.genre;

  if (!genre) {
    res.status(400).json({ message: 'genre parameter not provided' });
    return;
  }

  try {
    const movies = await axios.get(
      `${process.env.TMDB_BASE_URL}/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=${genre}`
    );

    res.send(movies.data);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { discoverMovies };
