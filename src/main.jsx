import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TemaProvider } from './contexts/TemaContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TemaProvider>
      <App />
  </TemaProvider>
)
