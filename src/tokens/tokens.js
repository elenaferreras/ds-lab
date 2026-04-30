/**
 * Switch the active brand on <body>.
 * The token system uses [data-brand] and [data-mode] attributes.
 * @param {'farco' | 'white-label'} brandName
 */
export function switchTheme(brandName) {
  document.body.setAttribute('data-brand', brandName)
}

/**
 * Switch the active color mode on <body>.
 * @param {'light' | 'dark'} mode
 */
export function switchMode(mode) {
  if (mode === 'dark') {
    document.body.setAttribute('data-mode', 'dark')
  } else {
    document.body.removeAttribute('data-mode')
  }
}

export const themes = [
  { id: 'farco', label: 'Farco' },
  { id: 'white-label', label: 'White Label' },
]

export const modes = [
  { id: 'light', label: 'Light' },
  { id: 'dark', label: 'Dark' },
]
