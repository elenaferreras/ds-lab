import './tokens.stories.css';

export default {
  title: 'Tokens/Border Radius',
  parameters: {
    layout: 'padded',
  },
};

const radiusTokens = [
  { token: '--farco-radius-none', value: '0' },
  { token: '--farco-radius-sm', value: '4px' },
  { token: '--farco-radius-md', value: '6px' },
  { token: '--farco-radius-lg', value: '8px' },
  { token: '--farco-radius-xl', value: '12px' },
  { token: '--farco-radius-full', value: '9999px' },
];

export const Scale = {
  name: 'Radius Scale',
  render: () => (
    <div className="token-stories">
      <h2>Border Radius</h2>
      <p className="subtitle">Corner rounding options from sharp to fully rounded.</p>

      <div className="radius-grid">
        {radiusTokens.map(({ token, value }) => (
          <div key={token} className="radius-card">
            <div
              className="radius-card__preview"
              style={{ borderRadius: `var(${token})` }}
            />
            <span className="radius-card__name">
              {token.replace('--farco-', '')}
            </span>
            <span className="radius-card__value">{value}</span>
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
      <h2>Radius in Context</h2>
      <p className="subtitle">How radius tokens look applied to cards and buttons.</p>

      <div className="token-section">
        <h3 className="token-section__title">Cards</h3>
        <p className="token-section__description">Same card with different radius values.</p>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          {radiusTokens.map(({ token, value }) => (
            <div
              key={token}
              style={{
                width: '140px',
                height: '100px',
                borderRadius: `var(${token})`,
                border: `1px solid var(--farco-color-border)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--farco-color-bg-base)',
              }}
            >
              <span style={{
                fontSize: '11px',
                fontFamily: 'monospace',
                color: 'var(--farco-color-neutral-50)',
              }}>
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="token-section" style={{ marginTop: '40px' }}>
        <h3 className="token-section__title">Buttons</h3>
        <p className="token-section__description">Same button shape with different radius values.</p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
          {radiusTokens.map(({ token, value }) => (
            <div
              key={token}
              style={{
                height: '40px',
                padding: '0 20px',
                borderRadius: `var(${token})`,
                border: `1px solid var(--farco-color-neutral-100)`,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontFamily: 'monospace',
              }}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};
