import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeProvider from './context/ThemeContext'
import FinanceProvider from './context/FinanceContext.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <FinanceProvider>
    <App />
    </FinanceProvider>
    </ThemeProvider>
  </StrictMode>,
)
