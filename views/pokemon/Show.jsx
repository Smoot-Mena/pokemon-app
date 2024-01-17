import React from "react";
import { nameCase } from "../../components/nameCase";

const Show = ( {pokemon} ) => {
    return ( 
        <section className="ultimate-container">
            <h1 className="page-title">Gotta Catch 'Em All</h1>
            <h3 id="pokemon-container">{nameCase(pokemon.name)} 
                <span id="back-button"><a href="/pokemon">↩ Back</a></span>
            </h3>
            <img src={`${pokemon.img}` + ".jpg"} alt={pokemon.name} />
        </section>
     );
}
 
export default Show;