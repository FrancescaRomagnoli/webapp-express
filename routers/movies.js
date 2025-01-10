const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");

// # routes

router.get("/", moviesController.index);

router.get("/:id", moviesController.show);

// # export
module.exports = router;
