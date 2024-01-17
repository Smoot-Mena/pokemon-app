import React from "react";
import { nameCase } from "../../components/nameCase";

const Show = ( {pokemon} ) => {
    return ( 
        <section style={{
            textAlign: "center",
            margin: "5vw"
        }} className="ultimate-container">
            <h1 style={{
            fontSize: "4.5em",
            fontFamily: "'Century Gothic', sans-serif",
            color: "azure",
            textShadow: "10px 3px 13px blue"
        }} className="page-title">Gotta Catch 'Em All</h1>
            <h3 style={{
                textDecoration: "none",
                fontSize: "3em",
                fontStyle: "italic",
                color: "orange",
                textShadow: "5px 3px 3px brown"
            }} id="pokemon-container">{nameCase(pokemon.name)} 
                <span style={{
                    marginLeft: "5vw"
                }} id="back-button">
                    <a style={{
                        textDecoration: "none",
                        color: "darkgrey",
                        textShadow: "5px 3px 4px #333"
                    }} href="/pokemon">↩ Back</a>
                </span>
            </h3>
            <img src={`${pokemon.img}` + ".jpg"} alt={pokemon.name} />
        </section>
     );
}
 
export default Show;