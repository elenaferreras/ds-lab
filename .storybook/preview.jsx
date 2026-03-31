import React, { useEffect } from 'react'
import '../src/styles/global.css'
import { switchTheme } from '../src/tokens/tokens.js'

function ThemeDecorator({ themeName, children }) {
  useEffect(() => {
    switchTheme(themeName)
  }, [themeName])

  return children
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
