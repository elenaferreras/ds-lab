import React from 'react'
import {
  ArrowRightOutlined,
  PlusOutlined,
  CloseOutlined,
  CheckCircleOutlined,
  WarningOutlined,
  XCircleOutlined,
} from './index'

export default {
  title: 'Components/Icons',
  parameters: {
    layout: 'padded',
  },
}

const icons = [
  { name: 'ArrowRightOutlined', component: ArrowRightOutlined },
  { name: 'PlusOutlined', component: PlusOutlined },
  { name: 'CloseOutlined', component: CloseOutlined },
  { name: 'CheckCircleOutlined', component: CheckCircleOutlined },
  { name: 'WarningOutlined', component: WarningOutlined },
  { name: 'XCircleOutlined', component: XCircleOutlined },
]

export const AllIcons = {
  name: 'All Icons',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
      {icons.map(({ name, component: IconComponent }) => (
        <div
          key={name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            padding: '16px',
            border: '1px solid var(--farco-color-border)',
            borderRadius: 'var(--farco-radius-md)',
            minWidth: '120px',
          }}
        >
          {React.createElement(IconComponent, { width: '24', height: '24' })}
          <span style={{
            fontSize: '11px',
            fontFamily: 'monospace',
            color: 'var(--farco-color-text-secondary)',
            textAlign: 'center',
          }}>
            {name}
          </span>
        </div>
      ))}
    </div>
  ),
}

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-end' }}>
      {[12, 16, 20, 24, 32].map((size) => (
        <div
          key={size}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <ArrowRightOutlined width={size} height={size} />
          <span style={{
            fontSize: '11px',
            fontFamily: 'monospace',
            color: 'var(--farco-color-text-secondary)',
          }}>
            {size}px
          </span>
        </div>
      ))}
    </div>
  ),
}

export const Colors = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      {[
        { label: 'default', color: 'inherit' },
        { label: 'primary', color: 'var(--farco-color-action-primary)' },
        { label: 'danger', color: 'var(--farco-color-feedback-danger)' },
        { label: 'subtle', color: 'var(--farco-color-text-secondary)' },
      ].map(({ label, color }) => (
        <div
          key={label}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <ArrowRightOutlined width="24" height="24" style={{ color }} />
          <span style={{
            fontSize: '11px',
            fontFamily: 'monospace',
            color: 'var(--farco-color-text-secondary)',
          }}>
            {label}
          </span>
        </div>
      ))}
    </div>
  ),
}
