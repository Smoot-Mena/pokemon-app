import React from "react";

const Index = ( {pokemon} ) => {
    function nameCase(pokemon) {
        let letter = pokemon.charAt(0);
        return pokemon.replace(letter, letter.toUpperCase());
    }

    return ( 
    <section>
        <h1>See All The Pokemon!</h1>
        <section>{pokemon.map((poke, Index) => (
            <section key={Index}>
                <h2>{nameCase(poke.name)}</h2>
                <img src={`${poke.img}` + ".jpg"} alt={poke.name} />
            </section>
        ))}</section>
    </section> 
    );
}
 
export default Index;