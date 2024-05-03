import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppTheme } from './theme/AppTheme.tsx'
import { PokemonProvider } from './context/PokemonContext.tsx'

import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppTheme>
      <PokemonProvider>
        <App />
      </PokemonProvider>
    </AppTheme>
  </React.StrictMode>,
)
