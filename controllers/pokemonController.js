const pokemon = require("../models/pokemon");

// Root
const pokemonIndex = (req, res) => {
     res.render("pokemon/Index", {pokemon: pokemon});
};

// Show Route
const pokemonShow = (req, res) => {
    // res.send(pokemon[req.params.index]);
    res.render("pokemon/Show", { pokemon: pokemon[req.params.index], index: pokemon[req.params.index]});
};

module.exports = {
    pokemonIndex, pokemonShow
};