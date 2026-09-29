import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

document.documentElement.style.setProperty(
  '--fondo',
  `url("${import.meta.env.BASE_URL}imagenes/fondo.png")`,
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
