import './tokens.stories.css';

export default {
  title: 'Tokens/Shadows',
  parameters: {
    layout: 'padded',
  },
};

const shadowTokens = [
  {
    token: '--ds-shadow-sm',
    value: '0 1px 2px 0 color-mix(… overlays-shadow-sm 5%)',
    description: 'Subtle elevation for cards and inputs.',
  },
  {
    token: '--ds-shadow-md',
    value: '0 4px 8px 0 color-mix(… overlays-shadow-md 10%)',
    description: 'Medium elevation for dropdowns and popovers.',
  },
  {
    token: '--ds-shadow-lg',
    value: '0 8px 24px 0 color-mix(… overlays-shadow-lg 12%)',
    description: 'High elevation for modals and dialogs.',
  },
];

export const Scale = {
  name: 'Shadow Scale',
  render: () => (
    <div className="token-stories">
      <h2>Shadows</h2>
      <p className="subtitle">Elevation levels for layered UI elements.</p>

      <div className="shadow-grid">
        {shadowTokens.map(({ token, value }) => (
          <div key={token} className="shadow-card">
            <div
              className="shadow-card__preview"
              style={{ boxShadow: `var(${token})` }}
            />
            <span className="shadow-card__name">
              {token.replace('--ds-', '')}
            </span>
            <span className="shadow-card__value">{value}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const InContext = {
  name: 'In Context',
  render: () => (
    <div className="token-stories">
      <h2>Shadows in Context</h2>
      <p className="subtitle">How shadow tokens create visual hierarchy between elements.</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', maxWidth: '400px' }}>
        {shadowTokens.map(({ token, description }) => (
          <div key={token}>
            <div style={{
              fontSize: '12px',
              fontFamily: 'monospace',
              color: 'var(--ds-color-foreground-text-secondary)',
              marginBottom: '12px',
            }}>
              {token.replace('--ds-', '')}
            </div>
            <div
              style={{
                padding: 'var(--ds-spacing-24)',
                borderRadius: 'var(--ds-radius-lg)',
                background: 'var(--ds-color-background-surface-page)',
                boxShadow: `var(${token})`,
              }}
            >
              <div style={{
                fontSize: 'var(--ds-font-size-md)',
                fontWeight: 500,
                marginBottom: '4px',
              }}>
                Card title
              </div>
              <div style={{
                fontSize: 'var(--ds-font-size-sm)',
                color: 'var(--ds-color-foreground-text-secondary)',
              }}>
                {description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Stacked = {
  name: 'Stacked Layers',
  render: () => (
    <div className="token-stories">
      <h2>Stacked Layers</h2>
      <p className="subtitle">Demonstrating visual depth hierarchy using shadow tokens.</p>

      <div style={{
        position: 'relative',
        height: '320px',
        width: '400px',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '300px',
          height: '200px',
          borderRadius: 'var(--ds-radius-lg)',
          background: 'var(--ds-color-background-surface-page)',
          boxShadow: 'var(--ds-shadow-sm)',
          padding: 'var(--ds-spacing-16)',
          border: '1px solid var(--ds-color-border-surface-default)',
        }}>
          <span style={{
            fontSize: '11px',
            fontFamily: 'monospace',
            color: 'var(--ds-color-foreground-text-secondary)',
          }}>
            shadow-sm (base layer)
          </span>
        </div>

        <div style={{
          position: 'absolute',
          top: '60px',
          left: '40px',
          width: '300px',
          height: '200px',
          borderRadius: 'var(--ds-radius-lg)',
          background: 'var(--ds-color-background-surface-page)',
          boxShadow: 'var(--ds-shadow-md)',
          padding: 'var(--ds-spacing-16)',
        }}>
          <span style={{
            fontSize: '11px',
            fontFamily: 'monospace',
            color: 'var(--ds-color-foreground-text-secondary)',
          }}>
            shadow-md (middle layer)
          </span>
        </div>

        <div style={{
          position: 'absolute',
          top: '120px',
          left: '80px',
          width: '300px',
          height: '200px',
          borderRadius: 'var(--ds-radius-lg)',
          background: 'var(--ds-color-background-surface-page)',
          boxShadow: 'var(--ds-shadow-lg)',
          padding: 'var(--ds-spacing-16)',
        }}>
          <span style={{
            fontSize: '11px',
            fontFamily: 'monospace',
            color: 'var(--ds-color-foreground-text-secondary)',
          }}>
            shadow-lg (top layer)
          </span>
        </div>
      </div>
    </div>
  ),
};
