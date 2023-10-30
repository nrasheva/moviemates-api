const { axios } = require('../axios');

async function discoverMovies(req, res) {
  const genre = req.query.genre;

  if (!genre) {
    res.status(400).json({ message: 'genre parameter not provided' });
    return;
  }

  try {
    const movies = await axios.get(`/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=${genre}`);

    res.send(movies.data);
  } catch (error) {
    console.log(error);
  }
}

async function getMovie(req, res) {
  const id = req.query.id;

  if (!id) {
    res.status(400).json({ message: 'id parameter not provided' });
    return;
  }

  try {
    const movie = await axios.get(`/movie/${id}?api_key=${process.env.TMDB_API_KEY}`);

    res.send(movie.data);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { discoverMovies, getMovie };
