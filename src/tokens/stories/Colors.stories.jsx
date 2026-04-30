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

// ---------------------------------------------------------------------------
// Primitive scale stops
// ---------------------------------------------------------------------------
const STOPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

function paletteTokens(prefix) {
  return STOPS.map((stop) => ({
    token: `--farco-${prefix}-${stop}`,
    value: String(stop),
  }));
}

// ---------------------------------------------------------------------------
// Stories — Primitives
// ---------------------------------------------------------------------------
export const PrimitivePalettes = {
  name: 'Primitives — Palettes',
  render: () => (
    <div className="token-stories">
      <h2>Primitive Palettes</h2>
      <p className="subtitle">
        Raw color scales per brand (50–950). These are the source of truth that
        semantic tokens alias from. Switch themes using the toolbar to compare
        brands.
      </p>

      <ColorSection
        title="Primary"
        description="Core brand hue."
        colors={paletteTokens('primary')}
      />

      <ColorSection
        title="Secondary"
        description="Supporting brand hue."
        colors={paletteTokens('secondary')}
      />
    </div>
  ),
};

export const PrimitiveNeutrals = {
  name: 'Primitives — Neutrals',
  render: () => (
    <div className="token-stories">
      <h2>Neutral Palette</h2>
      <p className="subtitle">
        Grayscale ramp from near-white (50) to near-black (950). Black and white
        exist as separate tokens outside the numbered scale.
      </p>

      <ColorSection
        title="White &amp; Black"
        colors={[
          { token: '--farco-white', value: 'white' },
          { token: '--farco-black', value: 'black' },
        ]}
      />

      <ColorSection
        title="Neutral Scale"
        colors={paletteTokens('neutral')}
      />
    </div>
  ),
};

export const PrimitiveFeedback = {
  name: 'Primitives — Feedback',
  render: () => (
    <div className="token-stories">
      <h2>Feedback Palettes</h2>
      <p className="subtitle">
        Full 50–950 scales for each feedback category. Semantic feedback tokens
        alias specific stops from these scales.
      </p>

      <ColorSection title="Success" colors={paletteTokens('success')} />
      <ColorSection title="Warning" colors={paletteTokens('warning')} />
      <ColorSection title="Danger"  colors={paletteTokens('danger')} />
      <ColorSection title="Info"    colors={paletteTokens('info')} />
    </div>
  ),
};

// ---------------------------------------------------------------------------
// Stories — Semantic
// ---------------------------------------------------------------------------
export const SemanticAction = {
  name: 'Semantic — Action',
  render: () => (
    <div className="token-stories">
      <h2>Action Tokens</h2>
      <p className="subtitle">
        Colors for interactive elements (buttons, links). Each role has a full
        set of interaction states.
      </p>

      <ColorSection
        title="Primary"
        colors={[
          { token: '--farco-color-action-primary',          value: 'default' },
          { token: '--farco-color-action-primary-hover',    value: 'hover' },
          { token: '--farco-color-action-primary-pressed',  value: 'pressed' },
          { token: '--farco-color-action-primary-focus',    value: 'focus' },
          { token: '--farco-color-action-primary-disabled', value: 'disabled' },
        ]}
      />

      <ColorSection
        title="Secondary"
        colors={[
          { token: '--farco-color-action-secondary',          value: 'default' },
          { token: '--farco-color-action-secondary-hover',    value: 'hover' },
          { token: '--farco-color-action-secondary-pressed',  value: 'pressed' },
          { token: '--farco-color-action-secondary-focus',    value: 'focus' },
          { token: '--farco-color-action-secondary-disabled', value: 'disabled' },
        ]}
      />

      <ColorSection
        title="Destructive"
        colors={[
          { token: '--farco-color-action-destructive',          value: 'default' },
          { token: '--farco-color-action-destructive-hover',    value: 'hover' },
          { token: '--farco-color-action-destructive-pressed',  value: 'pressed' },
          { token: '--farco-color-action-destructive-focus',    value: 'focus' },
          { token: '--farco-color-action-destructive-disabled', value: 'disabled' },
        ]}
      />
    </div>
  ),
};

export const SemanticSurface = {
  name: 'Semantic — Surface',
  render: () => (
    <div className="token-stories">
      <h2>Surface Tokens</h2>
      <p className="subtitle">Background colors for page layers.</p>

      <ColorSection
        title="Surface"
        colors={[
          { token: '--farco-color-surface-base',    value: 'base — page background' },
          { token: '--farco-color-surface-subtle',  value: 'subtle — secondary bg' },
          { token: '--farco-color-surface-raised',  value: 'raised — cards / panels' },
          { token: '--farco-color-surface-overlay', value: 'overlay — modal scrim' },
        ]}
      />
    </div>
  ),
};

export const SemanticText = {
  name: 'Semantic — Text',
  render: () => (
    <div className="token-stories">
      <h2>Text Tokens</h2>
      <p className="subtitle">Colors for typographic elements.</p>

      <ColorSection
        title="Text"
        colors={[
          { token: '--farco-color-text-primary',   value: 'primary — main body' },
          { token: '--farco-color-text-secondary',  value: 'secondary — muted' },
          { token: '--farco-color-text-disabled',   value: 'disabled' },
          { token: '--farco-color-text-inverse',    value: 'inverse — on dark bg' },
          { token: '--farco-color-text-on-action',  value: 'on-action — button label' },
        ]}
      />
    </div>
  ),
};

export const SemanticBorder = {
  name: 'Semantic — Border',
  render: () => (
    <div className="token-stories">
      <h2>Border Tokens</h2>
      <p className="subtitle">Colors for dividers, input borders, and focus rings.</p>

      <ColorSection
        title="Border"
        colors={[
          { token: '--farco-color-border',        value: 'default' },
          { token: '--farco-color-border-subtle', value: 'subtle' },
          { token: '--farco-color-border-strong', value: 'strong' },
          { token: '--farco-color-border-focus',  value: 'focus ring' },
        ]}
      />
    </div>
  ),
};

export const SemanticFeedback = {
  name: 'Semantic — Feedback',
  render: () => (
    <div className="token-stories">
      <h2>Feedback Tokens</h2>
      <p className="subtitle">
        Semantic feedback colors for alerts, badges, and status indicators.
        Each category has three levels of emphasis.
      </p>

      <ColorSection
        title="Success"
        colors={[
          { token: '--farco-color-feedback-success',          value: 'default' },
          { token: '--farco-color-feedback-success-subtle',   value: 'subtle' },
          { token: '--farco-color-feedback-success-emphasis', value: 'emphasis' },
        ]}
      />
      <ColorSection
        title="Warning"
        colors={[
          { token: '--farco-color-feedback-warning',          value: 'default' },
          { token: '--farco-color-feedback-warning-subtle',   value: 'subtle' },
          { token: '--farco-color-feedback-warning-emphasis', value: 'emphasis' },
        ]}
      />
      <ColorSection
        title="Danger"
        colors={[
          { token: '--farco-color-feedback-danger',          value: 'default' },
          { token: '--farco-color-feedback-danger-subtle',   value: 'subtle' },
          { token: '--farco-color-feedback-danger-emphasis', value: 'emphasis' },
        ]}
      />
      <ColorSection
        title="Info"
        colors={[
          { token: '--farco-color-feedback-info',          value: 'default' },
          { token: '--farco-color-feedback-info-subtle',   value: 'subtle' },
          { token: '--farco-color-feedback-info-emphasis', value: 'emphasis' },
        ]}
      />
    </div>
  ),
};
