import './tokens.stories.css';

export default {
  title: 'Tokens/Spacing',
  parameters: {
    layout: 'padded',
  },
};

const spacingTokens = [
  { token: '--farco-spacing-1', value: '4px' },
  { token: '--farco-spacing-2', value: '8px' },
  { token: '--farco-spacing-3', value: '12px' },
  { token: '--farco-spacing-4', value: '16px' },
  { token: '--farco-spacing-5', value: '20px' },
  { token: '--farco-spacing-6', value: '24px' },
  { token: '--farco-spacing-8', value: '32px' },
  { token: '--farco-spacing-10', value: '40px' },
  { token: '--farco-spacing-12', value: '48px' },
  { token: '--farco-spacing-16', value: '64px' },
];

export const Scale = {
  name: 'Spacing Scale',
  render: () => (
    <div className="token-stories">
      <h2>Spacing</h2>
      <p className="subtitle">Consistent spacing scale based on a 4px grid. Used for padding, margin, and gaps.</p>

      {spacingTokens.map(({ token, value }) => (
        <div key={token} className="spacing-row">
          <span className="spacing-row__label">{token.replace('--farco-', '')}</span>
          <div
            className="spacing-row__bar"
            style={{ width: `var(${token})` }}
          />
          <span className="spacing-row__value">{value}</span>
        </div>
      ))}
    </div>
  ),
};

export const BoxModel = {
  name: 'Box Model Demo',
  render: () => (
    <div className="token-stories">
      <h2>Spacing in Context</h2>
      <p className="subtitle">How spacing tokens are used for padding and gaps between elements.</p>

      <div className="token-section">
        <h3 className="token-section__title">Padding</h3>
        <p className="token-section__description">
          Each box below uses a different spacing token for padding.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { token: '--farco-spacing-2', label: 'spacing-2 (8px)' },
            { token: '--farco-spacing-4', label: 'spacing-4 (16px)' },
            { token: '--farco-spacing-6', label: 'spacing-6 (24px)' },
            { token: '--farco-spacing-8', label: 'spacing-8 (32px)' },
          ].map(({ token, label }) => (
            <div
              key={token}
              style={{
                padding: `var(${token})`,
                border: `1px solid var(--farco-color-border)`,
                borderRadius: 'var(--farco-radius-md)',
                background: 'var(--farco-color-bg-subtle)',
              }}
            >
              <span style={{ fontSize: '12px', fontFamily: 'monospace' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="token-section" style={{ marginTop: '40px' }}>
        <h3 className="token-section__title">Gap</h3>
        <p className="token-section__description">
          Items spaced apart using gap tokens.
        </p>
        {[
          { token: '--farco-spacing-1', label: 'gap: spacing-1 (4px)' },
          { token: '--farco-spacing-2', label: 'gap: spacing-2 (8px)' },
          { token: '--farco-spacing-4', label: 'gap: spacing-4 (16px)' },
          { token: '--farco-spacing-6', label: 'gap: spacing-6 (24px)' },
        ].map(({ token, label }) => (
          <div key={token} style={{ marginBottom: '24px' }}>
            <div style={{
              fontSize: '12px',
              fontFamily: 'monospace',
              color: 'var(--farco-color-neutral-50)',
              marginBottom: '8px',
            }}>
              {label}
            </div>
            <div style={{
              display: 'flex',
              gap: `var(${token})`,
            }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--farco-radius-sm)',
                    background: 'var(--farco-color-primary)',
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
