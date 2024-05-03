import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppTheme } from './theme/AppTheme.tsx'
import { PokemonContext } from './context/PokemonContext.tsx'

import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppTheme>
      <PokemonContext.Provider value={null}>
        <App />
      </PokemonContext.Provider>
    </AppTheme>
  </React.StrictMode>,
)
