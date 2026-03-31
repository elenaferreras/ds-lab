export function switchTheme(themeName) {
  document.body.classList.remove('theme-white-label', 'theme-farco');
  document.body.classList.add(`theme-${themeName}`);
}

export const themes = [
  { id: 'farco', label: 'Farco' },
  { id: 'white-label', label: 'White Label' },
];
