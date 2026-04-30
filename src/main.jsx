import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App.jsx'

function ThemedApp() {
  useEffect(() => {
    document.body.setAttribute('data-brand', 'farco')
    document.body.setAttribute('data-mode', 'light')
  }, [])

  return (
    <App />
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemedApp />
  </StrictMode>,
)
