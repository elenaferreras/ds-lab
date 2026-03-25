import './tokens.stories.css';

export default {
  title: 'Tokens/Shadows',
  parameters: {
    layout: 'padded',
  },
};

const shadowTokens = [
  {
    token: '--farco-shadow-sm',
    value: '0 1px 2px rgba(0,0,0,0.05)',
    description: 'Subtle elevation for cards and inputs.',
  },
  {
    token: '--farco-shadow-md',
    value: '0 4px 8px rgba(0,0,0,0.1)',
    description: 'Medium elevation for dropdowns and popovers.',
  },
  {
    token: '--farco-shadow-lg',
    value: '0 8px 24px rgba(0,0,0,0.12)',
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
        {shadowTokens.map(({ token, value, description }) => (
          <div key={token} className="shadow-card">
            <div
              className="shadow-card__preview"
              style={{ boxShadow: `var(${token})` }}
            />
            <span className="shadow-card__name">
              {token.replace('--farco-', '')}
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
              color: 'var(--farco-color-neutral-50)',
              marginBottom: '12px',
            }}>
              {token.replace('--farco-', '')}
            </div>
            <div
              style={{
                padding: 'var(--farco-spacing-6)',
                borderRadius: 'var(--farco-radius-lg)',
                background: 'var(--farco-color-bg-base)',
                boxShadow: `var(${token})`,
              }}
            >
              <div style={{
                fontSize: 'var(--farco-font-size-md)',
                fontWeight: 'var(--farco-font-weight-medium)',
                marginBottom: '4px',
              }}>
                Card title
              </div>
              <div style={{
                fontSize: 'var(--farco-font-size-sm)',
                color: 'var(--farco-color-neutral-50)',
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
          borderRadius: 'var(--farco-radius-lg)',
          background: 'var(--farco-color-bg-base)',
          boxShadow: 'var(--farco-shadow-sm)',
          padding: 'var(--farco-spacing-4)',
          border: '1px solid var(--farco-color-neutral-10)',
        }}>
          <span style={{
            fontSize: '11px',
            fontFamily: 'monospace',
            color: 'var(--farco-color-neutral-40)',
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
          borderRadius: 'var(--farco-radius-lg)',
          background: 'var(--farco-color-bg-base)',
          boxShadow: 'var(--farco-shadow-md)',
          padding: 'var(--farco-spacing-4)',
        }}>
          <span style={{
            fontSize: '11px',
            fontFamily: 'monospace',
            color: 'var(--farco-color-neutral-40)',
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
          borderRadius: 'var(--farco-radius-lg)',
          background: 'var(--farco-color-bg-base)',
          boxShadow: 'var(--farco-shadow-lg)',
          padding: 'var(--farco-spacing-4)',
        }}>
          <span style={{
            fontSize: '11px',
            fontFamily: 'monospace',
            color: 'var(--farco-color-neutral-40)',
          }}>
            shadow-lg (top layer)
          </span>
        </div>
      </div>
    </div>
  ),
};
