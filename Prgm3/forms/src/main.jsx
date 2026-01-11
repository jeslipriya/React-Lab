import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Forms from './Forms.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Forms />
  </StrictMode>,
)