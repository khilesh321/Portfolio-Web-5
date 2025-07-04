import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LenisWrapper from './components/LenisWrapper.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LenisWrapper>
      <App />
    </LenisWrapper>
  </StrictMode>,
)
