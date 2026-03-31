import { Button } from './button'

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
      description: 'Visual hierarchy of the button',
    },
    intent: {
      control: 'select',
      options: ['regular', 'danger'],
      description: 'Semantic meaning of the action',
    },
    children: {
      control: 'text',
      description: 'Button label',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
    },
  },
}

export const Playground = {
  args: {
    children: 'Label',
    variant: 'primary',
    intent: 'regular',
  },
}

export const Variants = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
}

export const Danger = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="primary" intent="danger">Primary danger</Button>
      <Button variant="secondary" intent="danger">Secondary danger</Button>
      <Button variant="ghost" intent="danger">Ghost danger</Button>
    </div>
  ),
}

export const States = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
      <Button variant="primary" loading>Loading</Button>
      <Button variant="secondary" loading>Loading</Button>
    </div>
  ),
}

