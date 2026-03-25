import React, { useEffect, useState } from 'react'
import { ConfigProvider } from 'antd'
import '../src/styles/global.css'
import { getAntdTheme, switchTheme } from '../src/tokens/tokens.js'

function ThemeDecorator({ themeName, children }) {
  const [antdTokens, setAntdTokens] = useState(getAntdTheme())

  useEffect(() => {
    switchTheme(themeName)
    // Re-read tokens after the class is applied so getComputedStyle picks up the new values
    requestAnimationFrame(() => {
      setAntdTokens(getAntdTheme())
    })
  }, [themeName])

  return (
    <ConfigProvider theme={{ token: antdTokens }}>
      {children}
    </ConfigProvider>
  )
}

export default {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: "todo"
    }
  },

  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'farco',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'farco', title: 'Farco' },
          { value: 'white-label', title: 'White Label' },
        ],
        showName: true,
      },
    },
  },

  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'farco'

      return (
        <ThemeDecorator themeName={theme}>
          <Story />
        </ThemeDecorator>
      )
    },
  ],
}
