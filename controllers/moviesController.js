// # db connection
const connection = require("../db/conn");

// # index

function index(req, res) {
  const sql =
    "SELECT id, title, director, release_year, abstract, image FROM movies";

  connection.query(sql, (err, results) => {
    const movies = results.map((movie) => ({
      ...movie,
    }));

    // $ internal error
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "database query failed" });
    }

    res.json(movies);
  });
}

// # show

function show(req, res) {
  const sql =
    "SELECT id, title, director, release_year, abstract, image FROM movies WHERE id = ?";
  const movieId = parseInt(req.params.id);

  connection.query(sql, [movieId], (err, moviesResults) => {
    // $ internal error
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "database query failed" });
    }

    // $ not found error
    if (moviesResults.length === 0) {
      return res.status(404).json({ error: "movie not found" });
    }

    let movie = moviesResults[0];

    // # getting movie reviews from db

    const reviewsSql = `SELECT id, name, vote, text FROM reviews WHERE movie_id = ?`;

    connection.query(reviewsSql, [movieId], (err, reviewsResults) => {
      movie.reviews = reviewsResults.map((review) => {
        return {
          id: review.id,
          name: review.name,
          vote: review.vote,
          text: review.text,
        };
      });

      console.log(reviewsResults, movie.reviews);
      res.json(movie);
    });
  });
}

// # export
module.exports = { index, show };
