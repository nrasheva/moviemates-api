const { axios } = require('../axios');

async function getGenres(req, res) {
  try {
    const genres = await axios.get(`/genre/movie/list?api_key=${process.env.TMDB_API_KEY}`);

    res.send(genres.data.genres);
  } catch (error) {
    res.status(error.response.status ? error.response.status : 500).json({ message: error });
  }
}

module.exports = { getGenres };
