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

// # export
module.exports = { index };
