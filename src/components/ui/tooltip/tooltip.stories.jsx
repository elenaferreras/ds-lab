import { Tooltip, TooltipProvider } from './tooltip'
import { Gear, House } from '@phosphor-icons/react'
import { Button } from '../button'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div style={{ padding: 64, display: 'flex', justifyContent: 'center' }}>
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
  argTypes: {
    content: {
      control: 'text',
      description: 'Text shown inside the tooltip',
    },
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Preferred side of the trigger',
    },
    sideOffset: {
      control: 'number',
      description: 'Distance from the trigger in pixels',
    },
  },
}

export const Playground = {
  args: {
    content: 'Home',
    side: 'top',
    sideOffset: 8,
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button variant="secondary" iconLeft={<House size={16} weight="regular" />}>
        {null}
      </Button>
    </Tooltip>
  ),
}

export const Sides = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <Tooltip content="Top" side="top">
        <Button variant="ghost" size="sm">Top</Button>
      </Tooltip>
      <Tooltip content="Right" side="right">
        <Button variant="ghost" size="sm">Right</Button>
      </Tooltip>
      <Tooltip content="Bottom" side="bottom">
        <Button variant="ghost" size="sm">Bottom</Button>
      </Tooltip>
      <Tooltip content="Left" side="left">
        <Button variant="ghost" size="sm">Left</Button>
      </Tooltip>
    </div>
  ),
}

export const IconTrigger = {
  name: 'Icon trigger (SideNav pattern)',
  render: () => (
    <Tooltip content="Settings" side="right">
      <button
        type="button"
        aria-label="Settings"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 'var(--ds-spacing-40)',
          height: 'var(--ds-spacing-40)',
          border: 'none',
          borderRadius: '9999px',
          background: 'transparent',
          color: 'var(--ds-color-foreground-text-primary)',
          cursor: 'pointer',
        }}
      >
        <Gear size={20} weight="regular" />
      </button>
    </Tooltip>
  ),
}
