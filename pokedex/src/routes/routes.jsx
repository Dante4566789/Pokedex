import { createBrowserRouter } from "react-router-dom"; 
import Pokedex from "../pokedex";
import SinglePokemon from "../SinglePokemon";


const routes = createBrowserRouter([
    {path: "/Pokedex", element: <Pokedex/>},
    {path : "/:id", element: <SinglePokemon/>}
    
])

export default routes;

