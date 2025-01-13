import React, { useEffect, useState } from "react";
import Card from "./card";
import "./index.css";
import logo from "./assets/logo.png";

const Pokedex = () => {
  const [finalCount, setFinalCount] = useState(0);
  const [visibleCount, setVisibleCount] = useState(8);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState(null);

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

  useEffect(() => {
    const handleSearch = async () => {
      if (search.trim() === '') {
        setSearchResult(null);
        return;
      }
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);
        if (!response.ok) throw new Error('Pokemon not found');
        const json = await response.json();
        setSearchResult(json);
      } catch (error) {
        console.error(error);
        setSearchResult(null);
      }
    };

    handleSearch();
  }, [search]);

  function parseFinalCount(json) {
    return parseInt(json.count, 10);
  }

  const loadMorePokemon = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 8, finalCount));
  };

  const visibleCounts = Array.from({ length: visibleCount }, (_, i) => i + 1);

  return (
    <section className="Pokedex-container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="search-panel">
          <input
            type="text"
            placeholder="Search Pokémon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      <section className="Pokedex">
        
        {searchResult ? (
          <Card key={searchResult.id} id={searchResult.id} />
        ) : (
          <>
            {visibleCounts.map((id) => (
              <Card key={id} id={id} />
            ))}
            {visibleCount < finalCount && (
              <button onClick={loadMorePokemon}>Other Pokemon</button>
            )}
          </>
        )}
      </section>
    </section>
  );
};

export default Pokedex;