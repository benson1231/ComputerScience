import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Fish from './Fish.jsx'
import Airplane from './Airplane.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Fish />
    <Airplane />
  </StrictMode>,
)
