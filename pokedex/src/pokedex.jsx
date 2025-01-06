import Pokemon from "./pokemon";
import "./index.css";
import card from "./card";
import { useEffect, useState } from "react";

const Pokedex = () => {
  const [finalCount, setFinalCount] = useState(1300);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
      );
      const json = await response.json();

      const p = parseFinalCount(json);
      setFinalCount(p);
    };
    fetchData();
  }, []);

  function parseFinalCount(json) {
    const finalCountx = parseInt(json.count, 10);

    return finalCountx;
  }
 
  

  const counts = [];
  for(let index=1; index <= finalCount; index++){
    counts.push(index)
  }
 
  const visibleCounts = counts.slice(0, 1025);
  console.log("finalCount:", finalCount);
  console.log("counts:", counts);
  

  return (
    <section className="Pokedex">
     { visibleCounts.map((id) => {
        
        return <div key={id}>{card(id)}</div>;
      })}
    </section>
  );
};

export default Pokedex;
