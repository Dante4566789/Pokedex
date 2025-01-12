import React, { useEffect, useState } from "react";
import Card from "./card";
import "./index.css";
import logo from "./assets/logo.png";

const Pokedex = () => {
  const [finalCount, setFinalCount] = useState(0);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
      );
      const json = await response.json();
      setFinalCount(parseFinalCount(json));
    };
    fetchData();
  }, []);

  function parseFinalCount(json) {
    return parseInt(json.count, 10);
  }

  const loadMorePokemon = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 8, finalCount));
  };

  const visibleCounts = Array.from({ length: visibleCount }, (_, i) => i + 1);

  console.log("finalCount:", finalCount);
  console.log("visibleCounts:", visibleCounts);

  return (
    <section className="Pokedex-container">
      <div className="logo">
        <img
          src={logo}
          alt="logo"
        />
      </div>
    <section className="Pokedex">
      
      
      {visibleCounts.map((id) => (
        <Card key={id} id={id} />
      ))}
      {visibleCount < finalCount && (
        <button onClick={loadMorePokemon}>Other Pokemon</button>
      )}
    </section>
    </section>
  );
};

export default Pokedex;