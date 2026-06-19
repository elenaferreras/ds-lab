import LoginPage from './Login'

export default {
  title: 'Pages/Login',
  component: LoginPage,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    media: {
      control: 'select',
      options: ['gradient', 'image', 'none'],
    },
    layout: {
      control: 'select',
      options: ['split', 'stack'],
    },
  },
}

export const Gradient = {
  args: {
    media: 'gradient',
    layout: 'split',
  },
}

export const Image = {
  args: {
    media: 'image',
    layout: 'split',
  },
}

export const Default = Gradient

export const DarkMode = {
  args: {
    media: 'gradient',
    layout: 'split',
  },
  globals: {
    mode: 'dark',
  },
}

export const NeutralBrand = {
  args: {
    media: 'gradient',
    layout: 'split',
  },
  globals: {
    brand: 'neutral',
  },
}

export const Mobile = {
  args: {
    media: 'gradient',
    layout: 'stack',
  },
}
