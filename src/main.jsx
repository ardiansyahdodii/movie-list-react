import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import SearchProvider from './contexts/searchContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SearchProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </SearchProvider>
)
