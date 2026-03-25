import './tokens.stories.css';

export default {
  title: 'Tokens/Colors',
  parameters: {
    layout: 'padded',
  },
};

function ColorSwatch({ token, value }) {
  return (
    <div className="token-card">
      <div
        className="token-card__preview"
        style={{ background: `var(${token})` }}
      />
      <div className="token-card__info">
        <span className="token-card__name">{token}</span>
        <span className="token-card__value">{value}</span>
      </div>
    </div>
  );
}

function ColorSection({ title, description, colors }) {
  return (
    <div className="token-section">
      <h3 className="token-section__title">{title}</h3>
      {description && (
        <p className="token-section__description">{description}</p>
      )}
      <div className="token-grid">
        {colors.map(({ token, value }) => (
          <ColorSwatch key={token} token={token} value={value} />
        ))}
      </div>
    </div>
  );
}

export const Primary = {
  render: () => (
    <div className="token-stories">
      <h2>Primary Colors</h2>
      <p className="subtitle">Core brand colors used for interactive elements and emphasis.</p>
      <ColorSection
        title="Primary"
        description="Main brand color and its interactive states."
        colors={[
          { token: '--farco-color-primary', value: 'Primary' },
          { token: '--farco-color-primary-hover', value: 'Hover state' },
          { token: '--farco-color-primary-active', value: 'Active state' },
          { token: '--farco-color-accent', value: 'Accent / highlight' },
        ]}
      />
    </div>
  ),
};

export const Semantic = {
  render: () => (
    <div className="token-stories">
      <h2>Semantic Colors</h2>
      <p className="subtitle">Colors with specific meaning for feedback and status.</p>
      <ColorSection
        title="Feedback"
        description="Used for alerts, validation, and status indicators."
        colors={[
          { token: '--farco-color-success', value: 'Success' },
          { token: '--farco-color-warning', value: 'Warning' },
          { token: '--farco-color-danger', value: 'Danger / Error' },
        ]}
      />
      <ColorSection
        title="Surface & Border"
        description="Background and border colors."
        colors={[
          { token: '--farco-color-bg-base', value: 'Base background' },
          { token: '--farco-color-bg-subtle', value: 'Subtle background' },
          { token: '--farco-color-border', value: 'Border' },
        ]}
      />
    </div>
  ),
};

export const Neutrals = {
  render: () => (
    <div className="token-stories">
      <h2>Neutral Colors</h2>
      <p className="subtitle">Grayscale ramp from white to black, used for text, backgrounds, and borders.</p>
      <div className="token-grid">
        {[
          { token: '--farco-color-neutral-0', value: '#ffffff' },
          { token: '--farco-color-neutral-10', value: '#f5f5f5' },
          { token: '--farco-color-neutral-20', value: '#e8e8e8' },
          { token: '--farco-color-neutral-30', value: '#d9d9d9' },
          { token: '--farco-color-neutral-40', value: '#bfbfbf' },
          { token: '--farco-color-neutral-50', value: '#8c8c8c' },
          { token: '--farco-color-neutral-60', value: '#595959' },
          { token: '--farco-color-neutral-70', value: '#434343' },
          { token: '--farco-color-neutral-80', value: '#262626' },
          { token: '--farco-color-neutral-90', value: '#1f1f1f' },
          { token: '--farco-color-neutral-100', value: '#000000' },
        ].map(({ token, value }) => (
          <ColorSwatch key={token} token={token} value={value} />
        ))}
      </div>
    </div>
  ),
};

export const AllColors = {
  name: 'All Colors',
  render: () => (
    <div className="token-stories">
      <h2>All Colors</h2>
      <p className="subtitle">Complete color palette. Switch themes using the toolbar to compare.</p>

      <ColorSection
        title="Primary"
        colors={[
          { token: '--farco-color-primary', value: 'Primary' },
          { token: '--farco-color-primary-hover', value: 'Hover' },
          { token: '--farco-color-primary-active', value: 'Active' },
          { token: '--farco-color-accent', value: 'Accent' },
        ]}
      />

      <ColorSection
        title="Feedback"
        colors={[
          { token: '--farco-color-success', value: 'Success' },
          { token: '--farco-color-warning', value: 'Warning' },
          { token: '--farco-color-danger', value: 'Danger' },
        ]}
      />

      <ColorSection
        title="Surface & Border"
        colors={[
          { token: '--farco-color-bg-base', value: 'Base bg' },
          { token: '--farco-color-bg-subtle', value: 'Subtle bg' },
          { token: '--farco-color-border', value: 'Border' },
        ]}
      />

      <ColorSection
        title="Neutrals"
        colors={[
          { token: '--farco-color-neutral-0', value: '0' },
          { token: '--farco-color-neutral-10', value: '10' },
          { token: '--farco-color-neutral-20', value: '20' },
          { token: '--farco-color-neutral-30', value: '30' },
          { token: '--farco-color-neutral-40', value: '40' },
          { token: '--farco-color-neutral-50', value: '50' },
          { token: '--farco-color-neutral-60', value: '60' },
          { token: '--farco-color-neutral-70', value: '70' },
          { token: '--farco-color-neutral-80', value: '80' },
          { token: '--farco-color-neutral-90', value: '90' },
          { token: '--farco-color-neutral-100', value: '100' },
        ]}
      />
    </div>
  ),
};
