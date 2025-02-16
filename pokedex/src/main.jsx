import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import routes from './routes/routes.jsx'


import Pokedex from './pokedex.jsx'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <div>
    <App />
  </div>,
)
