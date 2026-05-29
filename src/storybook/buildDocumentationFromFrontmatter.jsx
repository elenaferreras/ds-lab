import { ColorTokenList } from './documentation/ColorTokenList'
import { DocSection } from './documentation/DocSection'
import { resolveDemoComponent } from './documentation/componentRegistry'
import { resolveIcon } from './documentation/iconRegistry'
import { resolveRelatedPreview } from './documentation/relatedPreviewRegistry'

const row = {
  display: 'flex',
  gap: '12px',
  alignItems: 'center',
  flexWrap: 'wrap',
}

const panel = {
  padding: 'var(--ds-spacing-24)',
  borderRadius: 'var(--ds-radius-md)',
  border: '1px dashed var(--ds-color-border-surface-default)',
  background: 'var(--ds-color-background-surface-subtle)',
}

const DEFAULT_SECTIONS = {
  variants: true,
  dangerVariants: true,
  sizes: true,
  states: true,
  compositionPatterns: true,
  colorTokens: true,
  relatedComponents: true,
}

/**
 * @param {string} demoComponent
 * @param {{ label?: string, props?: Record<string, unknown>, icon?: string, iconOnly?: boolean, ariaLabel?: string, dismissible?: boolean }} item
 */
function renderDemoItem(demoComponent, item) {
  const Comp = resolveDemoComponent(demoComponent)
  const { label, props = {}, icon, iconOnly, ariaLabel, dismissible } = item
  const IconEl = resolveIcon(icon)
  const iconNode = IconEl ? <IconEl /> : undefined

  if (demoComponent === 'Avatar') {
    return <Comp {...props} />
  }

  if (demoComponent === 'Input') {
    return <Comp {...props} />
  }

  if (demoComponent === 'Badge') {
    const badgeProps = dismissible ? { ...props, onDismiss: () => {} } : props
    return <Comp {...badgeProps}>{label}</Comp>
  }

  if (iconOnly) {
    return (
      <Comp {...props} iconLeft={iconNode} aria-label={ariaLabel}>
        {null}
      </Comp>
    )
  }

  return (
    <Comp {...props} iconLeft={iconNode ? iconNode : undefined}>
      {label}
    </Comp>
  )
}

/**
 * @param {string} demoComponent
 * @param {{ id: string, buttons: Array<Record<string, unknown>> }} pattern
 */
function renderPatternButton(demoComponent, button) {
  return renderDemoItem(demoComponent, {
    label: button.label,
    props: {
      variant: button.variant,
      intent: button.intent,
      size: button.size,
    },
    icon: button.icon,
    iconOnly: button.iconOnly,
    ariaLabel: button.ariaLabel,
  })
}

/**
 * @param {Record<string, unknown>} documentation
 */
export function buildDocumentationVisuals(documentation) {
  if (!documentation) return null

  const demoComponent = documentation.demoComponent ?? 'Button'
  const sections = { ...DEFAULT_SECTIONS, ...documentation.sections }

  return function DocumentationVisuals() {
    return (
      <div className="component-documentation__visuals">
        {sections.variants && documentation.variants?.length > 0 && (
          <DocSection
            title="Variants"
            description={
              documentation.variantDescription ??
              'Visual hierarchy and semantic options for this component.'
            }
          >
            <div style={row}>
              {documentation.variants.map((item, i) => (
                <span key={i}>{renderDemoItem(demoComponent, item)}</span>
              ))}
            </div>
          </DocSection>
        )}

        {sections.dangerVariants && documentation.dangerVariants?.length > 0 && (
          <DocSection
            title="Danger intent"
            description={
              documentation.dangerDescription ??
              'Use for destructive or irreversible actions, on any variant.'
            }
          >
            <div style={row}>
              {documentation.dangerVariants.map((item, i) => (
                <span key={i}>{renderDemoItem(demoComponent, item)}</span>
              ))}
            </div>
          </DocSection>
        )}

        {sections.sizes && documentation.sizes?.length > 0 && (
          <DocSection
            title="Sizes and states"
            description={
              documentation.sizesDescription ??
              'Size scale and interactive states for this component.'
            }
          >
            <div style={{ ...panel, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={row}>
                {documentation.sizes.map((item, i) => (
                  <span key={i}>{renderDemoItem(demoComponent, item)}</span>
                ))}
              </div>
              {documentation.states?.length > 0 && (
                <div style={row}>
                  {documentation.states.map((item, i) => (
                    <span key={i}>{renderDemoItem(demoComponent, item)}</span>
                  ))}
                </div>
              )}
            </div>
          </DocSection>
        )}

        {sections.states &&
          !sections.sizes &&
          documentation.states?.length > 0 && (
            <DocSection title="States" description={documentation.statesDescription}>
              <div style={row}>
                {documentation.states.map((item, i) => (
                  <span key={i}>{renderDemoItem(demoComponent, item)}</span>
                ))}
              </div>
            </DocSection>
          )}

        {sections.compositionPatterns && documentation.compositionPatterns?.length > 0 && (
          <DocSection
            title="Composition patterns"
            description="Reusable layouts from the guidelines — use these structures when building screens."
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {documentation.compositionPatterns.map((pattern) => (
                <div key={pattern.id}>
                  <p className="component-documentation__pattern-label">{pattern.id}</p>
                  {pattern.id === 'empty-state' ? (
                    <div
                      style={{
                        ...panel,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '12px',
                        textAlign: 'center',
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          fontSize: 'var(--ds-font-size-md)',
                          color: 'var(--ds-color-foreground-text-secondary)',
                        }}
                      >
                        No projects yet
                      </p>
                      {pattern.buttons.map((btn, i) => (
                        <span key={i}>{renderPatternButton(demoComponent, btn)}</span>
                      ))}
                    </div>
                  ) : (
                    <div
                      style={{
                        ...panel,
                        ...row,
                        justifyContent:
                          pattern.id === 'form-footer' || pattern.id === 'destructive-confirm'
                            ? 'flex-end'
                            : undefined,
                      }}
                    >
                      {pattern.buttons.map((btn, i) => (
                        <span key={i}>{renderPatternButton(demoComponent, btn)}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </DocSection>
        )}

        {sections.colorTokens && documentation.colorTokens?.length > 0 && (
          <DocSection
            title="Color tokens"
            description={
              documentation.colorTokensDescription ??
              'Theme (semantic) variables used by this component.'
            }
          >
            <ColorTokenList tokens={documentation.colorTokens} />
          </DocSection>
        )}
      </div>
    )
  }
}

/**
 * @param {{ name: string, description: string, children: React.ReactNode }} props
 */
function RelatedComponentCard({ name, description, children }) {
  return (
    <div className="component-documentation__related-card">
      <div className="component-documentation__related-preview">{children}</div>
      <div className="component-documentation__related-info">
        <h3 className="component-documentation__related-name">{name}</h3>
        <p className="component-documentation__related-desc">{description}</p>
      </div>
    </div>
  )
}

/**
 * @param {Record<string, unknown>} documentation
 */
export function buildRelatedComponentsPreview(documentation) {
  if (!documentation?.related?.length) return null

  const sections = { ...DEFAULT_SECTIONS, ...documentation.sections }
  if (sections.relatedComponents === false) return null

  return function RelatedComponentsPreview() {
    return (
      <section className="component-documentation__related">
        <h2 className="component-documentation__related-heading">Related components</h2>
        <div className="component-documentation__related-grid">
          {documentation.related.map((item) => (
            <RelatedComponentCard
              key={item.name}
              name={item.name}
              description={item.description}
            >
              {resolveRelatedPreview(item.previewType)}
            </RelatedComponentCard>
          ))}
        </div>
      </section>
    )
  }
}
