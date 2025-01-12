import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import Pokemon from "./pokemon";

const Card = ({ id }) => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const json = await response.json();
      setPokemon(parsePokeAPIResponse(json));
    };
    fetchData();
  }, [id]);

  function parsePokeAPIResponse(json) {
    return {
      name: json.name,
      weight: json.weight / 10,
      height: json.height * 10,
      abilities: json.abilities.map((elem) => elem.ability.name),
      sprites: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
      stats: json.stats.map((elem) => ({
        name_stats: elem.stat.name,
        value: elem.base_stat,
      })),
    };
  }

  const tiltStyle = {
    width: "100%",
    transform: "perspective(1000px)",
  };

  const options = {
    max: 30,
    scale: 1.1,
    speed: 7000,
    easing: "ease",
  };

  return (
    <section className="card-pokemon">
      <Tilt options={options} style={tiltStyle}>
        <div className="container">
          <div className="card">
            <div className="card-image">
              <img src={pokemon.sprites} alt={pokemon.name} />
            </div>
            <div className="card-content">
              <h1>{pokemon.name}</h1>
            </div>
          </div>
        </div>
      </Tilt>
    </section>
  );
};

export default Card;