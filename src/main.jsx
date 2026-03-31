import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App.jsx'

function ThemedApp() {
  useEffect(() => {
    document.body.classList.add('theme-farco')
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
