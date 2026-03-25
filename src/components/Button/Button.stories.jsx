import { Button } from './Button';
import { SearchOutlined, ArrowRightOutlined } from '@ant-design/icons';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'dashed', 'text'],
      description: 'Visual style of the button',
    },
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
      description: 'Button size',
    },
    children: {
      control: 'text',
      description: 'Button label',
    },
    showArrow: {
      control: 'boolean',
      description: 'Show arrow icon after label',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
    },
    danger: {
      control: 'boolean',
      description: 'Danger state',
    },
    block: {
      control: 'boolean',
      description: 'Full width button',
    },
  },
};

// Default
export const Default = {
  args: {
    children: 'Label',
    variant: 'default',
  },
};

// Primary
export const Primary = {
  args: {
    children: 'Label',
    variant: 'primary',
  },
};

// Dashed
export const Dashed = {
  args: {
    children: 'Label',
    variant: 'dashed',
  },
};

// Text
export const Text = {
  args: {
    children: 'Label',
    variant: 'text',
  },
};

// Without arrow
export const WithoutArrow = {
  name: 'Without Arrow',
  args: {
    children: 'Label',
    variant: 'default',
    showArrow: false,
  },
};

// With custom icon
export const WithIcon = {
  name: 'With Icon',
  args: {
    children: 'Search',
    variant: 'default',
    icon: <SearchOutlined />,
    showArrow: false,
  },
};

// Sizes
export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button size="small">Small</Button>
      <Button size="middle">Middle</Button>
      <Button size="large">Large</Button>
    </div>
  ),
};

// Danger
export const Danger = {
  args: {
    children: 'Delete',
    variant: 'default',
    danger: true,
  },
};

export const DangerPrimary = {
  name: 'Danger Primary',
  args: {
    children: 'Delete',
    variant: 'primary',
    danger: true,
  },
};

// Disabled
export const Disabled = {
  args: {
    children: 'Label',
    variant: 'default',
    disabled: true,
  },
};

export const DisabledPrimary = {
  name: 'Disabled Primary',
  args: {
    children: 'Label',
    variant: 'primary',
    disabled: true,
  },
};

// Loading
export const Loading = {
  args: {
    children: 'Loading',
    variant: 'default',
    loading: true,
  },
};

// Block
export const Block = {
  args: {
    children: 'Full Width',
    variant: 'default',
    block: true,
  },
};

// All Variants
export const AllVariants = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <div style={{
          fontSize: '12px',
          fontFamily: 'monospace',
          color: 'var(--farco-color-neutral-50)',
          marginBottom: '8px',
        }}>
          Variants
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button variant="default">Default</Button>
          <Button variant="primary">Primary</Button>
          <Button variant="dashed">Dashed</Button>
          <Button variant="text">Text</Button>
        </div>
      </div>

      <div>
        <div style={{
          fontSize: '12px',
          fontFamily: 'monospace',
          color: 'var(--farco-color-neutral-50)',
          marginBottom: '8px',
        }}>
          Sizes
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Button size="small">Small</Button>
          <Button size="middle">Middle</Button>
          <Button size="large">Large</Button>
        </div>
      </div>

      <div>
        <div style={{
          fontSize: '12px',
          fontFamily: 'monospace',
          color: 'var(--farco-color-neutral-50)',
          marginBottom: '8px',
        }}>
          States
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button>Default</Button>
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
          <Button danger>Danger</Button>
          <Button variant="primary" danger>Danger Primary</Button>
        </div>
      </div>

      <div>
        <div style={{
          fontSize: '12px',
          fontFamily: 'monospace',
          color: 'var(--farco-color-neutral-50)',
          marginBottom: '8px',
        }}>
          Without Arrow
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Button showArrow={false}>No Arrow</Button>
          <Button showArrow={false} icon={<SearchOutlined />}>With Icon</Button>
        </div>
      </div>
    </div>
  ),
};
