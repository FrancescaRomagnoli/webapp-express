const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");

// # routes

router.get("/", moviesController.index);

// # export
module.exports = router;
