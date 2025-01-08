import { useEffect } from "react";
import { useState } from "react";

const counterOther = () => {
    const [countPokemon, setCountPokemon] = useState(8);

  useEffect(() => {
    setCountPokemon(key => key + 8);
  }, []);

  return countPokemon;
};

export default counterOther;
