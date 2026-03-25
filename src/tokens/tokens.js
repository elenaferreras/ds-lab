/**
 * Maps --farco-* CSS custom properties to antd's ConfigProvider theme.token.
 *
 * This reads computed styles from the DOM so it always reflects whichever
 * theme class is currently active on <body>.
 */
export function getAntdTheme() {
  if (typeof document === 'undefined') {
    return getDefaultAntdTheme();
  }

  const styles = getComputedStyle(document.body);
  const get = (varName) => styles.getPropertyValue(varName).trim();
  const getNum = (varName, fallback) => parseFloat(get(varName)) || fallback;

  return {
    // Colors
    colorPrimary: get('--farco-color-primary') || '#000000',
    colorPrimaryHover: get('--farco-color-primary-hover') || '#1a1a1a',
    colorPrimaryActive: get('--farco-color-primary-active') || '#333333',
    colorSuccess: get('--farco-color-success') || '#52c41a',
    colorWarning: get('--farco-color-warning') || '#faad14',
    colorError: get('--farco-color-danger') || '#ff4d4f',
    colorTextBase: get('--farco-color-neutral-100') || '#000000',
    colorBgBase: get('--farco-color-bg-base') || '#ffffff',
    colorBorder: get('--farco-color-border') || '#000000',

    // Typography
    fontFamily: get('--farco-font-family-base') || "'Overused Grotesk', sans-serif",
    fontSize: getNum('--farco-font-size-md', 16),
    fontSizeSM: getNum('--farco-font-size-sm', 14),
    fontSizeLG: getNum('--farco-font-size-lg', 20),

    // Border radius
    borderRadius: getNum('--farco-radius-md', 6),
    borderRadiusSM: getNum('--farco-radius-sm', 4),
    borderRadiusLG: getNum('--farco-radius-lg', 8),

    // Sizing
    controlHeight: getNum('--farco-spacing-10', 40),
    controlHeightSM: getNum('--farco-spacing-8', 32),
    controlHeightLG: getNum('--farco-spacing-12', 48),

    // Spacing
    padding: getNum('--farco-spacing-4', 16),
    paddingSM: getNum('--farco-spacing-2', 8),
    paddingLG: getNum('--farco-spacing-6', 24),
    margin: getNum('--farco-spacing-4', 16),
    marginSM: getNum('--farco-spacing-2', 8),
    marginLG: getNum('--farco-spacing-6', 24),
  };
}

function getDefaultAntdTheme() {
  return {
    colorPrimary: '#000000',
    colorPrimaryHover: '#1a1a1a',
    colorPrimaryActive: '#333333',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorTextBase: '#000000',
    colorBgBase: '#ffffff',
    colorBorder: '#000000',
    fontFamily: "'Overused Grotesk', sans-serif",
    fontSize: 16,
    fontSizeSM: 14,
    fontSizeLG: 20,
    borderRadius: 6,
    borderRadiusSM: 4,
    borderRadiusLG: 8,
    controlHeight: 40,
    controlHeightSM: 32,
    controlHeightLG: 48,
    padding: 16,
    paddingSM: 8,
    paddingLG: 24,
    margin: 16,
    marginSM: 8,
    marginLG: 24,
  };
}

export function switchTheme(themeName) {
  document.body.classList.remove('theme-white-label', 'theme-farco');
  document.body.classList.add(`theme-${themeName}`);
}

export const themes = [
  { id: 'farco', label: 'Farco' },
  { id: 'white-label', label: 'White Label' },
];
