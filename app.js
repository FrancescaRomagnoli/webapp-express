const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// # router

const moviesRouter = require("./routers/movies");
app.use(moviesRouter);

// # listen

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
