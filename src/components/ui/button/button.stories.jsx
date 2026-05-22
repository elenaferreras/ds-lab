import { Button } from './button'
import { ArrowRightIcon, PlusIcon } from '@phosphor-icons/react'

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
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button',
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
    size: 'md',
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

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}

export const SizesSecondary = {
  name: 'Sizes – Secondary',
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size="sm" variant="secondary">Small</Button>
      <Button size="md" variant="secondary">Medium</Button>
      <Button size="lg" variant="secondary">Large</Button>
    </div>
  ),
}

export const WithIcons = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button iconLeft={<PlusIcon />}>Add item</Button>
      <Button variant="secondary" iconRight={<ArrowRightIcon />}>Continue</Button>
      <Button variant="ghost" iconLeft={<PlusIcon />} iconRight={<ArrowRightIcon />}>Both</Button>
      <Button size="sm" iconLeft={<PlusIcon />}>Small</Button>
      <Button size="lg" iconRight={<ArrowRightIcon />}>Large</Button>
    </div>
  ),
}

export const IconOnly = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Button size="sm" iconLeft={<PlusIcon />}>{null}</Button>
        <Button size="md" iconLeft={<PlusIcon />}>{null}</Button>
        <Button size="lg" iconLeft={<PlusIcon />}>{null}</Button>
      </div>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Button variant="primary" iconLeft={<PlusIcon />}>{null}</Button>
        <Button variant="secondary" iconLeft={<PlusIcon />}>{null}</Button>
        <Button variant="ghost" iconLeft={<PlusIcon />}>{null}</Button>
      </div>
    </div>
  ),
}

export const States = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
      <Button variant="secondary" loading>Loading</Button>
      <Button size="sm" loading>Loading sm</Button>
      <Button size="lg" loading>Loading lg</Button>
    </div>
  ),
}
