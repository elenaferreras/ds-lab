import { ArrowRightOutlined } from './index';

export default {
  title: 'Components/Icons',
  parameters: {
    layout: 'padded',
  },
};

const icons = [
  { name: 'ArrowRightOutlined', component: ArrowRightOutlined },
];

export const AllIcons = {
  name: 'All Icons',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
      {icons.map(({ name, component: Icon }) => (
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
          <Icon width="24" height="24" />
          <span style={{
            fontSize: '11px',
            fontFamily: 'monospace',
            color: 'var(--farco-color-neutral-60)',
            textAlign: 'center',
          }}>
            {name}
          </span>
        </div>
      ))}
    </div>
  ),
};

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
            color: 'var(--farco-color-neutral-60)',
          }}>
            {size}px
          </span>
        </div>
      ))}
    </div>
  ),
};

export const Colors = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      {[
        { label: 'default', color: 'inherit' },
        { label: 'primary', color: 'var(--farco-color-primary)' },
        { label: 'danger', color: 'var(--farco-color-danger)' },
        { label: 'subtle', color: 'var(--farco-color-neutral-50)' },
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
            color: 'var(--farco-color-neutral-60)',
          }}>
            {label}
          </span>
        </div>
      ))}
    </div>
  ),
};
