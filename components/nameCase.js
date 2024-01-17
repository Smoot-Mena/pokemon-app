function nameCase(pokemon) {
    let letter = pokemon.charAt(0);
    return pokemon.replace(letter, letter.toUpperCase());
}

module.exports = {nameCase};