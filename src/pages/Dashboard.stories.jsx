import DashboardPage from './Dashboard'

export default {
  title: 'Pages/Dashboard',
  component: DashboardPage,
  parameters: {
    layout: 'fullscreen',
  },
}

export const Default = {}

export const DarkMode = {
  globals: {
    mode: 'dark',
  },
}

export const NeutralBrand = {
  globals: {
    brand: 'neutral',
  },
}
