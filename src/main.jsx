import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LenisWrapper from './components/LenisWrapper.jsx'
import ThemeProvider from './contexts/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <LenisWrapper>
        <App />
      </LenisWrapper>
    </ThemeProvider>
  </StrictMode>,
)
