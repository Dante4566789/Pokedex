import Pokemon from "./pokemon"
import "./index.css"


const Pokedex = ()=>{

    const pokemon = Pokemon(1);

    return(
        <section className="Pokedex">
            <div className="container">
                <div className="card">
                    <div className="card-image">
                        <img src={pokemon.sprites}></img>
                    </div>
                    <div className="card-content">
                        <h1>{pokemon.name}</h1>
                        <h2>Weight : {pokemon.weight}kg</h2>
                        <h2>Height : {pokemon.height}kg</h2>
                        <div className="card-stats">
                            {pokemon.stats && pokemon.stats.length > 0 ? (
                                <ul>
                                    {pokemon.stats.map((stat) => (
                                        <li key={stat.name_stats}>{stat.name_stats} : {stat.value}</li>
                                    ))}
                                </ul>
                                ) : (
                                    <p>No stats available</p>
                                )}
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pokedex