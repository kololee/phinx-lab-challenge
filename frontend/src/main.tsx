import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppTheme } from './theme/AppTheme.tsx'

import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppTheme>
      <App />
    </AppTheme>
  </React.StrictMode>,
)
