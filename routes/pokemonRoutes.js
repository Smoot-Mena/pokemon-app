const express  = require("express");

const router = express.Router();

// Pokemon Controller
const {pokemonIndex, pokemonShow} = require("../controllers/pokemonController");

// Index Route
router.get("/", pokemonIndex);

// Show Route
router.get("/:index", pokemonShow);

module.exports = router;