const express = require("express");
const app = express();
const port = 3000;

// # routes

app.get("/", (req, res) => {
  res.send("Hello Worlds");
});

// # listen

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
