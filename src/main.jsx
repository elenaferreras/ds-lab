import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import './styles/global.css'
import { getAntdTheme } from './tokens/tokens.js'
import App from './App.jsx'

function ThemedApp() {
  useEffect(() => {
    document.body.classList.add('theme-farco')
  }, [])

  return (
    <ConfigProvider theme={{ token: getAntdTheme() }}>
      <App />
    </ConfigProvider>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemedApp />
  </StrictMode>,
)
