import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import card from "./card";
import SinglePokemon from "./SinglePokemon";
import Pokedex from "./pokedex";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemon/:id" element={<SinglePokemon />} />
      </Routes>
    </Router>
  );
};

export default App;