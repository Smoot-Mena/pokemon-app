const pokemon = require("../models/pokemon");

// Root
const pokemonIndex = (req, res) => {
     res.render("pokemon/Index", {pokemon: pokemon});
};

module.exports = {
    pokemonIndex
};