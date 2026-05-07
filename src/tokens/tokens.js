/**
 * Token helpers — brand and mode switching.
 * Sets data-brand and data-mode attributes on document.body.
 * CSS handles everything else via [data-brand] and [data-mode] selectors.
 */

export const brands = [
  { id: 'farco',   label: 'Farco' },
  { id: 'neutral', label: 'Neutral' },
]

export const modes = [
  { id: 'light', label: 'Light' },
  { id: 'dark',  label: 'Dark' },
]

export function switchBrand(brandId) {
  document.body.setAttribute('data-brand', brandId)
}

export function switchMode(modeId) {
  document.body.setAttribute('data-mode', modeId)
}

/** Convenience: set both at once */
export function switchTheme(brandId, modeId = 'light') {
  switchBrand(brandId)
  switchMode(modeId)
}
