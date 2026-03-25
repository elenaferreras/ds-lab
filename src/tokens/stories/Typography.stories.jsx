import './tokens.stories.css';

export default {
  title: 'Tokens/Typography',
  parameters: {
    layout: 'padded',
  },
};

function TypeRow({ label, token, value, sampleStyle }) {
  return (
    <div className="type-row">
      <div className="type-row__sample" style={sampleStyle}>
        {label}
      </div>
      <div className="type-row__meta">
        <span className="type-row__token">{token}</span>
        <span className="type-row__value">{value}</span>
      </div>
    </div>
  );
}

export const FontFamily = {
  name: 'Font Family',
  render: () => (
    <div className="token-stories">
      <h2>Font Family</h2>
      <p className="subtitle">The base typeface used across all components.</p>

      <div className="token-section">
        <div style={{
          fontFamily: 'var(--farco-font-family-base)',
          fontSize: 'var(--farco-font-size-xl)',
          marginBottom: '8px',
        }}>
          Overused Grotesk
        </div>
        <div style={{
          fontFamily: 'var(--farco-font-family-base)',
          fontSize: 'var(--farco-font-size-md)',
          color: 'var(--farco-color-neutral-50)',
          marginBottom: '24px',
        }}>
          ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
          abcdefghijklmnopqrstuvwxyz<br />
          0123456789 !@#$%^&*()
        </div>
        <div className="type-row__meta">
          <span className="type-row__token">--farco-font-family-base</span>
          <span className="type-row__value">'Overused Grotesk', sans-serif</span>
        </div>
      </div>
    </div>
  ),
};

export const FontSizes = {
  name: 'Font Sizes',
  render: () => (
    <div className="token-stories">
      <h2>Font Sizes</h2>
      <p className="subtitle">Type scale from extra small to extra large.</p>

      <TypeRow
        label="Extra Small — The quick brown fox"
        token="--farco-font-size-xs"
        value="12px"
        sampleStyle={{ fontSize: 'var(--farco-font-size-xs)' }}
      />
      <TypeRow
        label="Small — The quick brown fox"
        token="--farco-font-size-sm"
        value="14px"
        sampleStyle={{ fontSize: 'var(--farco-font-size-sm)' }}
      />
      <TypeRow
        label="Medium — The quick brown fox"
        token="--farco-font-size-md"
        value="16px"
        sampleStyle={{ fontSize: 'var(--farco-font-size-md)' }}
      />
      <TypeRow
        label="Large — The quick brown fox"
        token="--farco-font-size-lg"
        value="20px"
        sampleStyle={{ fontSize: 'var(--farco-font-size-lg)' }}
      />
      <TypeRow
        label="Extra Large — The quick brown fox"
        token="--farco-font-size-xl"
        value="24px"
        sampleStyle={{ fontSize: 'var(--farco-font-size-xl)' }}
      />
    </div>
  ),
};

export const FontWeights = {
  name: 'Font Weights',
  render: () => (
    <div className="token-stories">
      <h2>Font Weights</h2>
      <p className="subtitle">Available font weights for hierarchy and emphasis.</p>

      <TypeRow
        label="Regular weight — The quick brown fox jumps over the lazy dog"
        token="--farco-font-weight-regular"
        value="400"
        sampleStyle={{
          fontSize: 'var(--farco-font-size-lg)',
          fontWeight: 'var(--farco-font-weight-regular)',
        }}
      />
      <TypeRow
        label="Medium weight — The quick brown fox jumps over the lazy dog"
        token="--farco-font-weight-medium"
        value="500"
        sampleStyle={{
          fontSize: 'var(--farco-font-size-lg)',
          fontWeight: 'var(--farco-font-weight-medium)',
        }}
      />
      <TypeRow
        label="Bold weight — The quick brown fox jumps over the lazy dog"
        token="--farco-font-weight-bold"
        value="700"
        sampleStyle={{
          fontSize: 'var(--farco-font-size-lg)',
          fontWeight: 'var(--farco-font-weight-bold)',
        }}
      />
    </div>
  ),
};

export const LineHeight = {
  name: 'Line Height',
  render: () => {
    const sampleText = 'The quick brown fox jumps over the lazy dog. Design systems bring consistency and efficiency to product development.';
    return (
      <div className="token-stories">
        <h2>Line Height</h2>
        <p className="subtitle">Vertical rhythm options for different content densities.</p>

        <div className="token-section">
          <h3 className="token-section__title">Tight (1.2)</h3>
          <p className="token-section__description">--farco-line-height-tight</p>
          <p style={{
            fontSize: 'var(--farco-font-size-md)',
            lineHeight: 'var(--farco-line-height-tight)',
            maxWidth: '480px',
            marginBottom: '32px',
            background: 'var(--farco-color-bg-subtle)',
            padding: '16px',
            borderRadius: 'var(--farco-radius-md)',
          }}>
            {sampleText}
          </p>
        </div>

        <div className="token-section">
          <h3 className="token-section__title">Base (1.5)</h3>
          <p className="token-section__description">--farco-line-height-base</p>
          <p style={{
            fontSize: 'var(--farco-font-size-md)',
            lineHeight: 'var(--farco-line-height-base)',
            maxWidth: '480px',
            marginBottom: '32px',
            background: 'var(--farco-color-bg-subtle)',
            padding: '16px',
            borderRadius: 'var(--farco-radius-md)',
          }}>
            {sampleText}
          </p>
        </div>

        <div className="token-section">
          <h3 className="token-section__title">Relaxed (1.75)</h3>
          <p className="token-section__description">--farco-line-height-relaxed</p>
          <p style={{
            fontSize: 'var(--farco-font-size-md)',
            lineHeight: 'var(--farco-line-height-relaxed)',
            maxWidth: '480px',
            background: 'var(--farco-color-bg-subtle)',
            padding: '16px',
            borderRadius: 'var(--farco-radius-md)',
          }}>
            {sampleText}
          </p>
        </div>
      </div>
    );
  },
};

export const LetterSpacing = {
  name: 'Letter Spacing',
  render: () => (
    <div className="token-stories">
      <h2>Letter Spacing</h2>
      <p className="subtitle">Tracking adjustments for different use cases.</p>

      <TypeRow
        label="TIGHT LETTER SPACING"
        token="--farco-letter-spacing-tight"
        value="-0.01em"
        sampleStyle={{
          fontSize: 'var(--farco-font-size-lg)',
          letterSpacing: 'var(--farco-letter-spacing-tight)',
          textTransform: 'uppercase',
        }}
      />
      <TypeRow
        label="BASE LETTER SPACING"
        token="--farco-letter-spacing-base"
        value="0.01em"
        sampleStyle={{
          fontSize: 'var(--farco-font-size-lg)',
          letterSpacing: 'var(--farco-letter-spacing-base)',
          textTransform: 'uppercase',
        }}
      />
    </div>
  ),
};
