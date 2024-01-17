const express  = require("express");

const router = express.Router();

// Pokemon Controller
const {pokemonIndex} = require("../controllers/pokemonController");

// Index Route
router.get("/", pokemonIndex);

module.exports = router;