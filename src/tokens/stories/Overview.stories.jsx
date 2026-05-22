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
      border: '1px solid var(--farco-color-border-subtle)',
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
      borderBottom: '1px solid var(--farco-color-border-subtle)',
      fontSize: '12px',
      fontFamily: 'monospace',
    }}>
      {preview && <div style={{ width: '32px', flexShrink: 0 }}>{preview}</div>}
      <span style={{ flex: 1, minWidth: 0 }}>{token}</span>
      <span style={{ color: 'var(--ds-color-foreground-text-secondary)', flexShrink: 0 }}>{value}</span>
    </div>
  );
}

const STOPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

export const AllTokens = {
  name: 'All Tokens',
  render: () => (
    <div className="token-stories">
      <h2>Token Overview</h2>
      <p className="subtitle">
        Complete reference of all design tokens. Use the theme switcher in the
        toolbar to compare values across themes.
      </p>

      {/* Primitive — Primary */}
      <div className="token-section">
        <h3 className="token-section__title">Primitive — Primary</h3>
        <p className="token-section__description">Raw primary palette (50–950).</p>
        {STOPS.map((stop) => {
          const token = `--farco-primary-${stop}`;
          return (
            <TokenRow key={token} token={token} value={String(stop)}
              preview={<ColorSwatch token={token} />} />
          );
        })}
      </div>

      {/* Primitive — Secondary */}
      <div className="token-section">
        <h3 className="token-section__title">Primitive — Secondary</h3>
        <p className="token-section__description">Raw secondary palette (50–950).</p>
        {STOPS.map((stop) => {
          const token = `--farco-secondary-${stop}`;
          return (
            <TokenRow key={token} token={token} value={String(stop)}
              preview={<ColorSwatch token={token} />} />
          );
        })}
      </div>

      {/* Primitive — Neutral */}
      <div className="token-section">
        <h3 className="token-section__title">Primitive — Neutral</h3>
        <p className="token-section__description">Grayscale scale plus white and black.</p>
        {[
          { token: '--farco-white', value: 'white' },
          ...STOPS.map((stop) => ({ token: `--farco-neutral-${stop}`, value: String(stop) })),
          { token: '--farco-black', value: 'black' },
        ].map(({ token, value }) => (
          <TokenRow key={token} token={token} value={value}
            preview={<ColorSwatch token={token} />} />
        ))}
      </div>

      {/* Semantic — Action */}
      <div className="token-section">
        <h3 className="token-section__title">Semantic — Action</h3>
        <p className="token-section__description">Interactive element colors with states.</p>
        {[
          '--farco-color-action-primary',
          '--farco-color-action-primary-hover',
          '--farco-color-action-primary-pressed',
          '--farco-color-action-primary-focus',
          '--farco-color-action-primary-disabled',
          '--farco-color-action-secondary',
          '--farco-color-action-secondary-hover',
          '--farco-color-action-secondary-pressed',
          '--farco-color-action-secondary-focus',
          '--farco-color-action-secondary-disabled',
          '--farco-color-action-destructive',
          '--farco-color-action-destructive-hover',
          '--farco-color-action-destructive-pressed',
          '--farco-color-action-destructive-focus',
          '--farco-color-action-destructive-disabled',
        ].map((token) => (
          <TokenRow key={token} token={token} value=""
            preview={<ColorSwatch token={token} />} />
        ))}
      </div>

      {/* Semantic — Surface */}
      <div className="token-section">
        <h3 className="token-section__title">Semantic — Surface</h3>
        {[
          { token: '--farco-color-surface-base',    value: 'page background' },
          { token: '--farco-color-surface-subtle',  value: 'secondary bg' },
          { token: '--farco-color-surface-raised',  value: 'cards / panels' },
          { token: '--farco-color-surface-overlay', value: 'modal scrim' },
        ].map(({ token, value }) => (
          <TokenRow key={token} token={token} value={value}
            preview={<ColorSwatch token={token} />} />
        ))}
      </div>

      {/* Semantic — Text */}
      <div className="token-section">
        <h3 className="token-section__title">Semantic — Text</h3>
        {[
          { token: '--ds-color-foreground-text-primary',   value: 'main body' },
          { token: '--ds-color-foreground-text-secondary', value: 'muted' },
          { token: '--ds-color-foreground-text-disabled',  value: 'disabled' },
          { token: '--ds-color-foreground-text-inverse',   value: 'on dark bg' },
          { token: '--ds-color-foreground-text-on-brand',  value: 'on brand surface' },
          { token: '--ds-color-foreground-text-on-brand-inverse', value: 'on brand (inverse)' },
        ].map(({ token, value }) => (
          <TokenRow key={token} token={token} value={value}
            preview={<ColorSwatch token={token} />} />
        ))}
      </div>

      {/* Semantic — Border */}
      <div className="token-section">
        <h3 className="token-section__title">Semantic — Border</h3>
        {[
          { token: '--farco-color-border',        value: 'default' },
          { token: '--farco-color-border-subtle', value: 'subtle' },
          { token: '--farco-color-border-strong', value: 'strong' },
          { token: '--farco-color-border-focus',  value: 'focus ring' },
        ].map(({ token, value }) => (
          <TokenRow key={token} token={token} value={value}
            preview={<ColorSwatch token={token} />} />
        ))}
      </div>

      {/* Semantic — Feedback */}
      <div className="token-section">
        <h3 className="token-section__title">Semantic — Feedback</h3>
        {[
          '--farco-color-feedback-success',
          '--farco-color-feedback-success-subtle',
          '--farco-color-feedback-success-emphasis',
          '--farco-color-feedback-warning',
          '--farco-color-feedback-warning-subtle',
          '--farco-color-feedback-warning-emphasis',
          '--farco-color-feedback-danger',
          '--farco-color-feedback-danger-subtle',
          '--farco-color-feedback-danger-emphasis',
          '--farco-color-feedback-info',
          '--farco-color-feedback-info-subtle',
          '--farco-color-feedback-info-emphasis',
        ].map((token) => (
          <TokenRow key={token} token={token} value=""
            preview={<ColorSwatch token={token} />} />
        ))}
      </div>

      {/* Typography */}
      <div className="token-section">
        <h3 className="token-section__title">Typography</h3>
        <p className="token-section__description">Font family, sizes, weights, line heights, and letter spacing.</p>
        {[
          { token: '--farco-font-family-base', value: "'Overused Grotesk'" },
          { token: '--farco-font-size-xs',     value: '12px' },
          { token: '--farco-font-size-sm',     value: '14px' },
          { token: '--farco-font-size-md',     value: '16px' },
          { token: '--farco-font-size-lg',     value: '20px' },
          { token: '--farco-font-size-xl',     value: '24px' },
          { token: '--farco-font-weight-regular', value: '400' },
          { token: '--farco-font-weight-medium',  value: '500' },
          { token: '--farco-font-weight-bold',    value: '700' },
          { token: '--farco-line-height-tight',   value: '1.2' },
          { token: '--farco-line-height-base',    value: '1.5' },
          { token: '--farco-line-height-relaxed', value: '1.75' },
          { token: '--farco-letter-spacing-tight', value: '-0.01em' },
          { token: '--farco-letter-spacing-base',  value: '0.01em' },
        ].map(({ token, value }) => (
          <TokenRow key={token} token={token} value={value} />
        ))}
      </div>

      {/* Spacing */}
      <div className="token-section">
        <h3 className="token-section__title">Spacing</h3>
        <p className="token-section__description">4px base grid, spacing.0 = 0px … spacing.30 = 120px.</p>
        {Array.from({ length: 31 }, (_, n) => ({
          token: `--farco-spacing-${n}`,
          value: n === 0 ? '0px' : `${n * 4}px`,
        })).map(({ token, value }) => (
          <TokenRow
            key={token}
            token={token}
            value={value}
            preview={
              <div style={{
                height: '12px',
                width: `var(${token})`,
                maxWidth: '32px',
                background: 'var(--farco-color-action-primary)',
                borderRadius: '2px',
              }} />
            }
          />
        ))}
      </div>

      {/* Border Radius */}
      <div className="token-section">
        <h3 className="token-section__title">Border Radius</h3>
        {[
          { token: '--farco-radius-none', value: '0' },
          { token: '--farco-radius-sm',   value: '4px' },
          { token: '--farco-radius-md',   value: '6px' },
          { token: '--farco-radius-lg',   value: '8px' },
          { token: '--farco-radius-xl',   value: '12px' },
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
                border: '2px solid var(--farco-color-action-primary)',
                borderRadius: `var(${token})`,
              }} />
            }
          />
        ))}
      </div>

      {/* Shadows */}
      <div className="token-section">
        <h3 className="token-section__title">Shadows</h3>
        {[
          { token: '--ds-shadow-sm', value: '0 1px 2px 0 color-mix(… 5%)' },
          { token: '--ds-shadow-md', value: '0 4px 8px 0 color-mix(… 10%)' },
          { token: '--ds-shadow-lg', value: '0 8px 24px 0 color-mix(… 12%)' },
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
                background: 'var(--farco-color-surface-base)',
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
              background: 'var(--farco-color-action-primary)',
              opacity: 'var(--farco-opacity-disabled)',
            }} />
          }
        />
      </div>
    </div>
  ),
};
