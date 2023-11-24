const { axios } = require('../axios');

async function discoverMovies(req, res) {
  const { genre, page } = req.query;

  if (!genre) {
    res.status(400).json({ message: 'genre parameter not provided' });
    return;
  } else if (isNaN(page)) {
    res.status(400).json({ message: 'page parameter must be a number' });
    return;
  }

  try {
    const movies = await axios.get(
      `/discover/movie?api_key=${process.env.TMDB_API_KEY}&page=${page}&with_genres=${genre}`
    );

    // Return 5 random movies
    const randomMovies = movies.data.results.sort(() => Math.random() - 0.5).slice(0, 5);

    res.send(randomMovies);
  } catch (error) {
    res.status(error.response.status ? error.response.status : 500).json({ message: error });
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
    res.status(error.response.status ? error.response.status : 500).json({ message: error });
  }
}

module.exports = { discoverMovies, getMovie };
