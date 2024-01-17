import React from "react";
import { nameCase } from "../../components/nameCase";

const Index = ( {pokemon} ) => {
    return ( 
    <section className="ultimate-container">
        <h1 style={{
            position: "relative",
            left: "20vw",
            fontSize: "4.5em",
            fontFamily: "'Century Gothic', sans-serif",
            color: "yellow",
            textShadow: "12px 3px 13px blue"
        }} 
        className="page-title">See All The Pokemon!</h1>
        <section style={{
            display: "flex",
            flexFlow: "row wrap",
            fontSize: "2em",
            gap: "100px",
            textAlign: "center",
            marginLeft: "20vw"
        }}
        id="pokemon-container">{pokemon.map((poke, index) => (
            <a style={{
                textDecoration: "none",
                fontStyle: "italic",
                color: "yellow",
                textShadow: "10px 3px 13px blue"
            }} href={`/pokemon/${index}`} key={index}>
                <h2 className="pokemon-name">{nameCase(poke.name)}</h2>
                <img style={{
                    width: "300px"
                }} src={`${poke.img}` + ".jpg"} alt={poke.name} />
            </a>
        ))}</section>
    </section> 
    );
}
 
export default Index;