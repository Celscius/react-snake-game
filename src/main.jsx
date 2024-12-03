import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Game_Snake from './snake_game/'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Game_Snake />
  </StrictMode>,
)
