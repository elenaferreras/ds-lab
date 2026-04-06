import { useState } from 'react'
import { Badge } from './badge'

export default {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'danger', 'accent'],
      description: 'Visual variant of the badge',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Size of the badge',
    },
    children: {
      control: 'text',
      description: 'Badge label',
    },
  },
}

export const Playground = {
  args: {
    children: 'Label',
    variant: 'default',
    size: 'md',
  },
}

export const Variants = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="accent">Accent</Badge>
    </div>
  ),
}

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge variant="success" size="sm">Success sm</Badge>
      <Badge variant="success" size="md">Success md</Badge>
      <Badge variant="danger" size="sm">Danger sm</Badge>
      <Badge variant="danger" size="md">Danger md</Badge>
    </div>
  ),
}

export const Dismissible = {
  render: () => {
    const [badges, setBadges] = useState(['Default', 'Success', 'Warning', 'Danger', 'Accent'])
    const variants = ['default', 'success', 'warning', 'danger', 'accent']

    return (
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
        {badges.map((label, i) => (
          <Badge
            key={label}
            variant={variants[i]}
            onDismiss={() => setBadges((prev) => prev.filter((b) => b !== label))}
          >
            {label}
          </Badge>
        ))}
        {badges.length === 0 && (
          <span style={{ fontSize: '14px', opacity: 0.5 }}>All dismissed</span>
        )}
      </div>
    )
  },
}

export const AllVariantsBothSizes = {
  name: 'All variants – both sizes',
  render: () => {
    const variants = ['default', 'success', 'warning', 'danger', 'accent']
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {variants.map((v) => (
          <div key={v} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Badge variant={v} size="sm">{v}</Badge>
            <Badge variant={v} size="md">{v}</Badge>
          </div>
        ))}
      </div>
    )
  },
}
