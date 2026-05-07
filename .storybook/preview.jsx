import React, { useEffect } from 'react'
import '../src/styles/global.css'
import { switchBrand, switchMode } from '../src/tokens/tokens.js'
import theme from './theme'

function ThemeDecorator({ brandId, modeId, children }) {
  useEffect(() => {
    switchBrand(brandId)
    switchMode(modeId)
  }, [brandId, modeId])

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
    },

    docs: {
      theme,
    },
  },

  globalTypes: {
    brand: {
      name: 'Brand',
      description: 'Active brand',
      defaultValue: 'farco',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'farco',   title: 'Farco' },
          { value: 'neutral', title: 'Neutral' },
        ],
        showName: true,
      },
    },
    mode: {
      name: 'Mode',
      description: 'Light or dark mode',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark',  title: 'Dark' },
        ],
        showName: true,
      },
    },
  },

  decorators: [
    (Story, context) => {
      const brandId = context.globals.brand || 'farco'
      const modeId  = context.globals.mode  || 'light'

      return (
        <ThemeDecorator brandId={brandId} modeId={modeId}>
          <Story />
        </ThemeDecorator>
      )
    },
  ],
}
