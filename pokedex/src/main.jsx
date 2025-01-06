import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import Pokedex from './pokedex.jsx'
import Pokemon from './pokemon.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    <Pokedex/>
  </div>,
)
