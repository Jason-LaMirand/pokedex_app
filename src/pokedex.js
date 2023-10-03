import React from "react";
import Pokecard from "./card";
import "./pokedex.css";

function Pokedex(props) {
    let winnerMsg = null;
    if (props.isWinner) {
        winnerMsg = <p className="Pokedex-winner">You win!</p>;
    }

    return (
        <div className="Pokedex">
            <h2 className="Pokedex-title">Pokedex</h2>
            <div className="Pokedex-cards">
                {props.pokemon.map(p => (
                    <Pokecard
                        id={p.id}
                        name={p.name}
                        type={p.type}
                        exp={p.base_experience}
                    />
                ))}
            </div>
            <h4>Total experience: {props.exp}</h4>
            {winnerMsg}
        </div>
    );
}

export default Pokedex;