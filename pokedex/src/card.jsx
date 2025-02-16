import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { Link } from "react-router-dom";

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
      type: json.types.map((elem) => elem.type.name),
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

  function getBackgroundColor(type) {
    switch (type) {
      case "fire":
        return "#EC6E6F";
      case "water":
        return "#009ACC";
      case "grass":
        return "#20B911";
      case "electric":
        return "#FFCE4B";
      case "psychic":
        return "#FF6F91";
      case "ice":
        return "#6DD3F5";
      case "dragon":
        return "#6A7BAF";
      case "dark":
        return "#595761";
      case "fairy":
        return "#F09AD9";
      case "normal":
        return "#BEBEBE";
      case "fighting":
        return "#A75555";
      case "flying":
        return "#A1BBEC";
      case "poison":
        return "#B467B4";
      case "ground":
        return "#E0C068";
      case "rock":
        return "#B8A038";
      case "bug":
        return "#A8B820";
      case "ghost":
        return "#705898";
      case "steel":
        return "#B8B8D0";
      case "unknown":
        return "#68A090";
      case "shadow":
        return "#5A5A5A";

      // Add more cases for other types
      default:
        return "gray";
    }
  }

  function Cap(name) {
    const firstLetter = name.charAt(0).toUpperCase();
    const rest = name.slice(1);
    return firstLetter + rest;
  }

  return (
    <section className="card-pokemon">
      <Link to={`/Pokedex/${id}`} key={id}>
        <Tilt options={options} style={tiltStyle}>
          <div className="container">
            <div
              className="card"
              style={{
                backgroundColor:
                  pokemon.type && pokemon.type.length > 0
                    ? getBackgroundColor(pokemon.type[0])
                    : "gray",
              }}
            >
              <div className="card-image">
                <img src={pokemon.sprites} alt={pokemon.name} />
              </div>
              <div className="card-content">
                <h1>{pokemon.name ? Cap(pokemon.name) : "non trovato"}</h1>
                <div className="list-type">
                  <ul>
                    {pokemon.type &&
                      pokemon.type.map((type) => <li key={type}>{type}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Tilt>
      </Link>
    </section>
  );
};

export default Card;
