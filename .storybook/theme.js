import { create } from 'storybook/theming/create';

export default create({
  base: 'light',

  // Brand — wordmark from farcostudio.com, links to the DS lab root
  brandTitle: 'DS Lab',
  brandImage: '/farco-logo.svg',
  brandUrl: '?path=/story/get-started--page',
  brandTarget: '_self',

  // Typography — mirrors --farco-font-family-base
  fontBase: "'Overused Grotesk', sans-serif",
  fontCode: "'Overused Grotesk', monospace",

  // Core palette — mirrors --farco-color-primary / --farco-color-accent
  colorPrimary: '#000000',   // --farco-color-primary
  colorSecondary: '#000000', // keep interactions black; accent applied via CSS overrides

  // App shell — white canvas, subtle grey sidebar, pure black borders
  // mirrors --farco-color-bg-base / --farco-color-bg-subtle / --farco-color-border
  appBg: '#f5f5f5',          // --farco-color-bg-subtle  (sidebar / panel bg)
  appContentBg: '#ffffff',   // --farco-color-bg-base    (canvas area)
  appPreviewBg: '#ffffff',   // --farco-color-bg-base    (story preview)
  appBorderColor: '#e8e8e8', // --farco-color-neutral-20 (subtle rule)
  appBorderRadius: 0,        // flat — Farco site uses no rounded cards in chrome

  // Text — mirrors --farco-color-neutral-100 / --farco-color-neutral-0
  textColor: '#000000',       // --farco-color-neutral-100
  textMutedColor: '#8c8c8c',  // --farco-color-neutral-50
  textInverseColor: '#ffffff', // --farco-color-neutral-0

  // Toolbar bar — clean white strip like the Farco navbar
  // mirrors --farco-color-bg-base / neutral-50 / primary / primary-hover
  barBg: '#ffffff',           // --farco-color-bg-base
  barTextColor: '#595959',    // --farco-color-neutral-60
  barSelectedColor: '#000000', // --farco-color-primary
  barHoverColor: '#000000',   // --farco-color-primary

  // Form inputs — mirrors --farco-color-bg-base / --farco-color-border / --farco-radius-sm
  inputBg: '#ffffff',         // --farco-color-bg-base
  inputBorder: '#d9d9d9',     // --farco-color-neutral-30
  inputTextColor: '#000000',  // --farco-color-neutral-100
  inputBorderRadius: 4,       // --farco-radius-sm
});
