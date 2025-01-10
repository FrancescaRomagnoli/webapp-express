// # db connection
const connection = require("../db/conn");

// # index

function index(req, res) {
  const sql = "SELECT * FROM movies";

  connection.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "database query failed" });
    }

    res.json(results);
  });
}

function show(req, res) {
  const sql = "SELECT * FROM movies_db.movies WHERE id = ?";
  const id = parseInt(req.params.id);

  connection.query(sql, [id], (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "database query failed" });
    }

    if (isNaN(id)) {
      return res.status(404).json({ error: "movie not found" });
    }

    res.json(results);
  });
}

// # export
module.exports = { index, show };
