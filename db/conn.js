const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "movies_db",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("MySql connected :)");
});

module.exports = connection;
