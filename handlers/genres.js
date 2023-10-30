const { axios } = require('../axios');

async function getGenres(req, res) {
  try {
    const genres = await axios.get(`/genre/movie/list?api_key=${process.env.TMDB_API_KEY}`);

    res.send(genres.data.genres);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getGenres };
