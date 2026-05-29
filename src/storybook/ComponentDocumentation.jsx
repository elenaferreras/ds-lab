import { DocumentationMarkdown } from './DocumentationMarkdown'
import './component-documentation.css'

/**
 * @param {{
 *   topMarkdown: string
 *   bottomMarkdown: string
 *   sourcePath?: string
 *   visuals?: React.ReactNode
 *   relatedComponents?: React.ReactNode
 * }} props
 */
export function ComponentDocumentation({
  topMarkdown,
  bottomMarkdown,
  sourcePath,
  visuals,
  relatedComponents,
}) {
  return (
    <div className="component-documentation">
      <header className="component-documentation__intro">
        <h1 className="component-documentation__page-title">Documentation</h1>
        <p className="component-documentation__page-lead">
          Usage guidelines and live examples.
        </p>
      </header>

      {topMarkdown ? (
        <DocumentationMarkdown markdown={topMarkdown} skipFirstH1 />
      ) : null}

      {visuals}

      {bottomMarkdown ? (
        <>
          <hr className="component-documentation__divider" />
          <DocumentationMarkdown markdown={bottomMarkdown} />
        </>
      ) : null}

      {relatedComponents}

      {sourcePath ? (
        <p className="component-documentation__meta">
          Source: <code>{sourcePath}</code>
        </p>
      ) : null}
    </div>
  )
}
