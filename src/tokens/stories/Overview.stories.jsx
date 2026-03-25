import './tokens.stories.css';

export default {
  title: 'Tokens/Overview',
  parameters: {
    layout: 'padded',
  },
};

function ColorSwatch({ token }) {
  return (
    <div style={{
      width: '32px',
      height: '32px',
      borderRadius: 'var(--farco-radius-sm)',
      background: `var(${token})`,
      border: '1px solid var(--farco-color-neutral-20)',
      flexShrink: 0,
    }} />
  );
}

function TokenRow({ token, value, preview }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '6px 0',
      borderBottom: '1px solid var(--farco-color-neutral-10)',
      fontSize: '12px',
      fontFamily: 'monospace',
    }}>
      {preview && <div style={{ width: '32px', flexShrink: 0 }}>{preview}</div>}
      <span style={{ flex: 1, minWidth: 0 }}>{token}</span>
      <span style={{ color: 'var(--farco-color-neutral-50)', flexShrink: 0 }}>{value}</span>
    </div>
  );
}

export const AllTokens = {
  name: 'All Tokens',
  render: () => (
    <div className="token-stories">
      <h2>Token Overview</h2>
      <p className="subtitle">
        Complete reference of all design tokens. Use the theme switcher in the toolbar to compare values across themes.
      </p>

      {/* Colors */}
      <div className="token-section">
        <h3 className="token-section__title">Colors</h3>
        <p className="token-section__description">Primary, semantic, and neutral color palette.</p>

        {[
          { token: '--farco-color-primary', value: 'Primary' },
          { token: '--farco-color-primary-hover', value: 'Primary hover' },
          { token: '--farco-color-primary-active', value: 'Primary active' },
          { token: '--farco-color-accent', value: 'Accent' },
          { token: '--farco-color-success', value: 'Success' },
          { token: '--farco-color-warning', value: 'Warning' },
          { token: '--farco-color-danger', value: 'Danger' },
          { token: '--farco-color-border', value: 'Border' },
          { token: '--farco-color-bg-base', value: 'Background' },
          { token: '--farco-color-bg-subtle', value: 'Subtle bg' },
          { token: '--farco-color-neutral-0', value: '0 (white)' },
          { token: '--farco-color-neutral-10', value: '10' },
          { token: '--farco-color-neutral-20', value: '20' },
          { token: '--farco-color-neutral-30', value: '30' },
          { token: '--farco-color-neutral-40', value: '40' },
          { token: '--farco-color-neutral-50', value: '50' },
          { token: '--farco-color-neutral-60', value: '60' },
          { token: '--farco-color-neutral-70', value: '70' },
          { token: '--farco-color-neutral-80', value: '80' },
          { token: '--farco-color-neutral-90', value: '90' },
          { token: '--farco-color-neutral-100', value: '100 (black)' },
        ].map(({ token, value }) => (
          <TokenRow
            key={token}
            token={token}
            value={value}
            preview={<ColorSwatch token={token} />}
          />
        ))}
      </div>

      {/* Typography */}
      <div className="token-section">
        <h3 className="token-section__title">Typography</h3>
        <p className="token-section__description">Font family, sizes, weights, line heights, and letter spacing.</p>

        {[
          { token: '--farco-font-family-base', value: "'Overused Grotesk'" },
          { token: '--farco-font-size-xs', value: '12px' },
          { token: '--farco-font-size-sm', value: '14px' },
          { token: '--farco-font-size-md', value: '16px' },
          { token: '--farco-font-size-lg', value: '20px' },
          { token: '--farco-font-size-xl', value: '24px' },
          { token: '--farco-font-weight-regular', value: '400' },
          { token: '--farco-font-weight-medium', value: '500' },
          { token: '--farco-font-weight-bold', value: '700' },
          { token: '--farco-line-height-tight', value: '1.2' },
          { token: '--farco-line-height-base', value: '1.5' },
          { token: '--farco-line-height-relaxed', value: '1.75' },
          { token: '--farco-letter-spacing-tight', value: '-0.01em' },
          { token: '--farco-letter-spacing-base', value: '0.01em' },
        ].map(({ token, value }) => (
          <TokenRow key={token} token={token} value={value} />
        ))}
      </div>

      {/* Spacing */}
      <div className="token-section">
        <h3 className="token-section__title">Spacing</h3>
        <p className="token-section__description">4px base grid for consistent spatial rhythm.</p>

        {[
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
        ].map(({ token, value }) => (
          <TokenRow
            key={token}
            token={token}
            value={value}
            preview={
              <div style={{
                height: '12px',
                width: `var(${token})`,
                maxWidth: '32px',
                background: 'var(--farco-color-primary)',
                borderRadius: '2px',
              }} />
            }
          />
        ))}
      </div>

      {/* Border Radius */}
      <div className="token-section">
        <h3 className="token-section__title">Border Radius</h3>
        <p className="token-section__description">Corner rounding from sharp to pill.</p>

        {[
          { token: '--farco-radius-none', value: '0' },
          { token: '--farco-radius-sm', value: '4px' },
          { token: '--farco-radius-md', value: '6px' },
          { token: '--farco-radius-lg', value: '8px' },
          { token: '--farco-radius-xl', value: '12px' },
          { token: '--farco-radius-full', value: '9999px' },
        ].map(({ token, value }) => (
          <TokenRow
            key={token}
            token={token}
            value={value}
            preview={
              <div style={{
                width: '24px',
                height: '24px',
                border: '2px solid var(--farco-color-primary)',
                borderRadius: `var(${token})`,
              }} />
            }
          />
        ))}
      </div>

      {/* Shadows */}
      <div className="token-section">
        <h3 className="token-section__title">Shadows</h3>
        <p className="token-section__description">Elevation levels for layered UI.</p>

        {[
          { token: '--farco-shadow-sm', value: '0 1px 2px ...' },
          { token: '--farco-shadow-md', value: '0 4px 8px ...' },
          { token: '--farco-shadow-lg', value: '0 8px 24px ...' },
        ].map(({ token, value }) => (
          <TokenRow
            key={token}
            token={token}
            value={value}
            preview={
              <div style={{
                width: '24px',
                height: '24px',
                borderRadius: '4px',
                background: 'var(--farco-color-bg-base)',
                boxShadow: `var(${token})`,
              }} />
            }
          />
        ))}
      </div>

      {/* Misc */}
      <div className="token-section">
        <h3 className="token-section__title">Misc</h3>

        <TokenRow
          token="--farco-opacity-disabled"
          value="0.4"
          preview={
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '4px',
              background: 'var(--farco-color-primary)',
              opacity: 'var(--farco-opacity-disabled)',
            }} />
          }
        />
      </div>
    </div>
  ),
};
