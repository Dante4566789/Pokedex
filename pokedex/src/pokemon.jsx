

import React, {useState, useEffect} from "react";

const Pokemon = (id) =>{
    
   
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        const fetchData = async ()=>{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const json = await response.json();

            const p = parsePokeAPIResponse(json);
            setPokemon(p);
        };
        fetchData();
        
        

    }, [])
    
    
    function parsePokeAPIResponse(json){
        const Pokemonx = {
            name: json.name,
            weight: json.weight,
            height: json.height,
            abilities : [],
            sprites: json.sprites.front_default,
            stats: [],


        };

        Pokemonx.abilities = json.abilities.map((elem)=>{return elem.ability.name});
        Pokemonx.stats = json.stats.map((elem) => {
            return {
                name_stats: elem.stat.name,
                value: elem.base_stat,
            }
        })

        return Pokemonx
    }

    return pokemon
    
      

      /*return (
        <div>
          <h2>Stat Names:</h2>
          {pokemon.stats && pokemon.stats.length > 0 ? (
            <ul>
              {pokemon.stats.map((stat) => (
                <li key={stat.name_stats}>{stat.name_stats}</li>
              ))}
            </ul>
          ) : (
            <p>No stats available</p>
          )}
        </div>
      );
    };*/
    
    
    
    
   
    
    /*cardPokemon.stats = pokemon.stats.map((pokemon)=>{
        return{
            name_stats: pokemon.name,
            value: pokemon.name,
        }
    })

    return cardPokemon*/

}

export default Pokemon;