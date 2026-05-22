import { useEffect, useRef } from 'react';
import './tokens.stories.css';

export default {
  title: 'Tokens/Colors',
  parameters: {
    layout: 'padded',
  },
};

// ---------------------------------------------------------------------------
// Reads the resolved CSS value of a custom property at runtime
// ---------------------------------------------------------------------------
function useResolvedValue(token) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const value = getComputedStyle(ref.current)
      .getPropertyValue(token)
      .trim();
    const valueEl = ref.current.querySelector('[data-resolved]');
    if (valueEl) valueEl.textContent = value || '—';
  });
  return ref;
}

// ---------------------------------------------------------------------------
// ColorSwatch — reads its own computed value via a ref
// ---------------------------------------------------------------------------
function ColorSwatch({ token, label }) {
  const ref = useResolvedValue(token);
  return (
    <div className="token-card" ref={ref}>
      <div
        className="token-card__preview"
        style={{ background: `var(${token})` }}
      />
      <div className="token-card__info">
        <span className="token-card__name">{token}</span>
        <span className="token-card__value" data-resolved>…</span>
        {label && (
          <span className="token-card__value" style={{ opacity: 0.5 }}>
            {label}
          </span>
        )}
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
        {colors.map(({ token, label }) => (
          <ColorSwatch key={token} token={token} label={label} />
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Scale helpers
// ---------------------------------------------------------------------------
const BRAND_STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
const FEEDBACK_STEPS = [150, 300, 500, 700, 950];

function brandScale(mode, palette) {
  return BRAND_STEPS.map((step) => ({
    token: `--ds-brand-color-${mode}-${palette}-${step}`,
  }));
}

function feedbackScale(mode, role) {
  return FEEDBACK_STEPS.map((step) => ({
    token: `--ds-brand-color-${mode}-${role}-${step}`,
  }));
}

// ---------------------------------------------------------------------------
// Stories — Brand scales (raw palettes)
// ---------------------------------------------------------------------------
export const BrandScalesLight = {
  name: 'Brand — Light scales',
  render: () => (
    <div className="token-stories">
      <h2>Brand color scales — Light</h2>
      <p className="subtitle">
        Raw palettes defined in brand/farco.css and brand/neutral.css.
        Switch brand using the toolbar above to compare.
        These are NOT consumed by components directly.
      </p>

      <ColorSection
        title="Primary (50–950)"
        description="Core brand hue. Farco: lime green. Neutral (white-label): orange-red."
        colors={brandScale('light', 'primary')}
      />
      <ColorSection
        title="Secondary (50–950)"
        description="Supporting brand hue. Both brands: steel blue."
        colors={brandScale('light', 'secondary')}
      />
      <ColorSection
        title="Neutral (50–950)"
        description="UI greyscale ramp — warm taupe for both brands."
        colors={brandScale('light', 'neutral')}
      />
      <ColorSection
        title="Error (150–950)"
        colors={feedbackScale('light', 'error')}
      />
      <ColorSection
        title="Success (150–950)"
        colors={feedbackScale('light', 'success')}
      />
      <ColorSection
        title="Warning (150–950)"
        colors={feedbackScale('light', 'warning')}
      />
      <ColorSection
        title="Info (150–950)"
        colors={feedbackScale('light', 'info')}
      />
    </div>
  ),
};

export const BrandScalesDark = {
  name: 'Brand — Dark scales',
  render: () => (
    <div className="token-stories">
      <h2>Brand color scales — Dark</h2>
      <p className="subtitle">
        Same structure as light scales — values are inverted for dark contexts.
        Switch brand using the toolbar above to compare.
      </p>

      <ColorSection
        title="Primary (50–950)"
        colors={brandScale('dark', 'primary')}
      />
      <ColorSection
        title="Secondary (50–950)"
        colors={brandScale('dark', 'secondary')}
      />
      <ColorSection
        title="Neutral (50–950)"
        colors={brandScale('dark', 'neutral')}
      />
      <ColorSection
        title="Error (150–950)"
        colors={feedbackScale('dark', 'error')}
      />
      <ColorSection
        title="Success (150–950)"
        colors={feedbackScale('dark', 'success')}
      />
      <ColorSection
        title="Warning (150–950)"
        colors={feedbackScale('dark', 'warning')}
      />
      <ColorSection
        title="Info (150–950)"
        colors={feedbackScale('dark', 'info')}
      />
    </div>
  ),
};

// ---------------------------------------------------------------------------
// Stories — Semantic tokens
// ---------------------------------------------------------------------------
export const SemanticAction = {
  name: 'Semantic — Action',
  render: () => (
    <div className="token-stories">
      <h2>Action tokens</h2>
      <p className="subtitle">
        Colors for interactive elements (buttons, links).
        Switch brand + mode using the toolbar to verify all combinations.
      </p>

      <ColorSection
        title="Background — primary"
        colors={[
          { token: '--ds-color-background-action-primary',          label: 'default' },
          { token: '--ds-color-background-action-primary-hover',    label: 'hover' },
          { token: '--ds-color-background-action-primary-pressed',  label: 'pressed' },
          { token: '--ds-color-background-action-primary-disabled', label: 'disabled' },
        ]}
      />
      <ColorSection
        title="Foreground — on primary"
        colors={[
          { token: '--ds-color-foreground-action-on-primary',       label: 'default' },
          { token: '--ds-color-foreground-action-on-primary-disabled', label: 'disabled' },
        ]}
      />
      <ColorSection
        title="Border — primary"
        colors={[
          { token: '--ds-color-border-action-primary',          label: 'default' },
          { token: '--ds-color-border-action-primary-hover',    label: 'hover' },
          { token: '--ds-color-border-action-primary-pressed',  label: 'pressed' },
          { token: '--ds-color-border-action-primary-disabled', label: 'disabled' },
        ]}
      />
      <ColorSection
        title="Background — secondary"
        colors={[
          { token: '--ds-color-background-action-secondary',          label: 'default' },
          { token: '--ds-color-background-action-secondary-hover',    label: 'hover' },
          { token: '--ds-color-background-action-secondary-pressed',  label: 'pressed' },
          { token: '--ds-color-background-action-secondary-disabled', label: 'disabled' },
        ]}
      />
      <ColorSection
        title="Foreground — on secondary"
        colors={[
          { token: '--ds-color-foreground-action-on-secondary',          label: 'default' },
          { token: '--ds-color-foreground-action-on-secondary-hover',    label: 'hover' },
          { token: '--ds-color-foreground-action-on-secondary-disabled', label: 'disabled' },
        ]}
      />
      <ColorSection
        title="Focus ring"
        colors={[
          { token: '--ds-color-border-action-focus', label: 'focus' },
        ]}
      />
    </div>
  ),
};

export const SemanticSurface = {
  name: 'Semantic — Surface',
  render: () => (
    <div className="token-stories">
      <h2>Surface tokens</h2>
      <p className="subtitle">
        Background and foreground colors for page layers and containers.
      </p>

      <ColorSection
        title="Background"
        colors={[
          { token: '--ds-color-background-surface-page',    label: 'page' },
          { token: '--ds-color-background-surface-subtle',  label: 'subtle' },
          { token: '--ds-color-background-surface-raised',  label: 'raised' },
          { token: '--ds-color-background-surface-overlay', label: 'overlay' },
        ]}
      />
      <ColorSection
        title="Foreground"
        colors={[
          { token: '--ds-color-foreground-surface-on-page',    label: 'on-page' },
          { token: '--ds-color-foreground-surface-on-subtle',  label: 'on-subtle' },
          { token: '--ds-color-foreground-surface-on-raised',  label: 'on-raised' },
          { token: '--ds-color-foreground-surface-on-overlay', label: 'on-overlay' },
        ]}
      />
      <ColorSection
        title="Border"
        colors={[
          { token: '--ds-color-border-surface-default', label: 'default' },
          { token: '--ds-color-border-surface-strong',  label: 'strong' },
        ]}
      />
    </div>
  ),
};

export const SemanticText = {
  name: 'Semantic — Text',
  render: () => (
    <div className="token-stories">
      <h2>Text tokens</h2>
      <p className="subtitle">Foreground colors for typographic elements.</p>

      <ColorSection
        title="Foreground"
        colors={[
          { token: '--ds-color-foreground-text-primary',    label: 'primary' },
          { token: '--ds-color-foreground-text-secondary',  label: 'secondary' },
          { token: '--ds-color-foreground-text-disabled',   label: 'disabled' },
          { token: '--ds-color-foreground-text-inverse',    label: 'inverse' },
          { token: '--ds-color-foreground-text-on-brand',   label: 'on-brand' },
          { token: '--ds-color-foreground-text-on-brand-inverse', label: 'on-brand-inverse' },
          { token: '--ds-color-foreground-text-link',       label: 'link' },
          { token: '--ds-color-foreground-text-link-hover', label: 'link-hover' },
        ]}
      />
    </div>
  ),
};

export const SemanticInput = {
  name: 'Semantic — Input',
  render: () => (
    <div className="token-stories">
      <h2>Input tokens</h2>
      <p className="subtitle">Colors for text fields and form controls.</p>

      <ColorSection
        title="Background"
        colors={[
          { token: '--ds-color-background-input-default',  label: 'default' },
          { token: '--ds-color-background-input-hover',    label: 'hover' },
          { token: '--ds-color-background-input-focused',  label: 'focused' },
          { token: '--ds-color-background-input-disabled', label: 'disabled' },
          { token: '--ds-color-background-input-error',    label: 'error' },
        ]}
      />
      <ColorSection
        title="Foreground"
        colors={[
          { token: '--ds-color-foreground-input-default',     label: 'default' },
          { token: '--ds-color-foreground-input-placeholder', label: 'placeholder' },
          { token: '--ds-color-foreground-input-disabled',    label: 'disabled' },
        ]}
      />
      <ColorSection
        title="Border"
        colors={[
          { token: '--ds-color-border-input-default',  label: 'default' },
          { token: '--ds-color-border-input-hover',    label: 'hover' },
          { token: '--ds-color-border-input-focused',  label: 'focused' },
          { token: '--ds-color-border-input-disabled', label: 'disabled' },
          { token: '--ds-color-border-input-error',    label: 'error' },
        ]}
      />
    </div>
  ),
};

export const SemanticFeedback = {
  name: 'Semantic — Feedback',
  render: () => (
    <div className="token-stories">
      <h2>Feedback tokens</h2>
      <p className="subtitle">
        Colors for alerts, badges, and status indicators.
        Each category has background, foreground, and border variants.
      </p>

      {['error', 'success', 'warning', 'info'].map((role) => (
        <ColorSection
          key={role}
          title={role.charAt(0).toUpperCase() + role.slice(1)}
          colors={[
            { token: `--ds-color-background-feedback-${role}`,             label: 'background' },
            { token: `--ds-color-background-feedback-${role}-emphasis`,    label: 'background-emphasis' },
            { token: `--ds-color-foreground-feedback-on-${role}`,          label: 'foreground' },
            { token: `--ds-color-foreground-feedback-on-${role}-emphasis`, label: 'foreground-emphasis' },
            { token: `--ds-color-border-feedback-${role}`,                 label: 'border' },
          ]}
        />
      ))}
    </div>
  ),
};
