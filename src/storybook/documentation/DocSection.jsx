/**
 * @param {{ title: string, description?: string, children: React.ReactNode }} props
 */
export function DocSection({ title, description, children }) {
  return (
    <section className="component-documentation__section">
      <h2 className="component-documentation__section-title">{title}</h2>
      {description ? (
        <p className="component-documentation__section-desc">{description}</p>
      ) : null}
      <div className="component-documentation__section-body">{children}</div>
    </section>
  )
}
