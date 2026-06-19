/** Default series colors mapped to design tokens. */
export const chartColors = [
  'var(--ds-color-background-action-primary)',
  'var(--ds-color-foreground-action-on-secondary)',
  'var(--ds-color-background-feedback-success-emphasis)',
  'var(--ds-color-background-feedback-warning-emphasis)',
  'var(--ds-color-background-feedback-info-emphasis)',
]

export const axisTickStyle = {
  fill: 'var(--ds-color-foreground-text-secondary)',
  fontSize: 12,
  fontFamily: 'var(--ds-font-family-body)',
}

/** Shared XAxis / YAxis props for DS-styled charts. */
export const axisProps = {
  tick: axisTickStyle,
  axisLine: { stroke: 'var(--ds-color-border-surface-strong)' },
  tickLine: false,
}

/** Shared CartesianGrid props. */
export const gridProps = {
  stroke: 'var(--ds-color-border-surface-default)',
  strokeDasharray: '4 4',
  vertical: false,
}

/** Shared Tooltip content + label styles. */
export const tooltipProps = {
  contentStyle: {
    backgroundColor: 'var(--ds-color-background-surface-overlay)',
    border: '1px solid var(--ds-color-border-surface-strong)',
    borderRadius: 'var(--ds-radius-md)',
    fontSize: 'var(--ds-font-size-sm)',
    fontFamily: 'var(--ds-font-family-body)',
    color: 'var(--ds-color-foreground-text-primary)',
    boxShadow: 'var(--ds-shadow-md)',
  },
  labelStyle: {
    color: 'var(--ds-color-foreground-text-secondary)',
    fontWeight: 500,
    marginBottom: 4,
  },
  itemStyle: {
    color: 'var(--ds-color-foreground-text-primary)',
  },
  cursor: { fill: 'var(--ds-color-background-surface-subtle)' },
}

/** Pick a series color by index (wraps around the palette). */
export function chartColor(index) {
  return chartColors[index % chartColors.length]
}

/** Pill-shaped bar radius — fully rounded top and bottom. */
export const roundedBarRadius = [20, 20, 20, 20]

/** Rounded bar chart fills. */
export const barChartInactiveFill = 'var(--ds-color-border-surface-default)'
export const barChartActiveFill = 'var(--ds-color-foreground-action-on-secondary)'

/** Minimal X-axis for rounded bar charts (no axis line, no tick marks). */
export const minimalBarXAxisProps = {
  axisLine: false,
  tickLine: false,
  tick: axisTickStyle,
  dy: 8,
}

/** Format a numeric value as a compact label (e.g. 243 → "243K"). */
export function formatBarValue(value) {
  if (value >= 1000) return `${Math.round(value / 1000)}K`
  return `${value}K`
}

/** Space reserved above bars for the active-value pill label. */
export const roundedBarLabelHeight = 28
export const roundedBarLabelOffset = 10
export const roundedBarChartTopMargin =
  roundedBarLabelHeight + roundedBarLabelOffset + 12

/** Default margins for rounded bar charts (top leaves room for value pills). */
export const roundedBarChartMargin = {
  top: roundedBarChartTopMargin,
  right: 12,
  left: 12,
  bottom: 4,
}
