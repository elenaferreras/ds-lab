import { ComponentDocumentation } from './ComponentDocumentation'
import {
  buildDocumentationVisuals,
  buildRelatedComponentsPreview,
} from './buildDocumentationFromFrontmatter'
import { parseGuidelinesFile } from './parseGuidelinesFile'

/**
 * @param {{
 *   guidelines: string
 *   customVisuals?: React.ComponentType | null
 *   customRelated?: React.ComponentType | null
 * }} options
 */
export function createDocumentationStory({
  guidelines,
  customVisuals = null,
  customRelated = null,
}) {
  const parsed = parseGuidelinesFile(guidelines)
  const { frontmatter, documentation, topMarkdown, bottomMarkdown } = parsed

  const Visuals =
    customVisuals ??
    (documentation?.custom ? null : buildDocumentationVisuals(documentation))

  const Related = customRelated ?? buildRelatedComponentsPreview(documentation)

  return {
    name: 'Documentation',
    parameters: {
      layout: 'fullscreen',
      docs: { disable: true },
    },
    render: () => (
      <ComponentDocumentation
        topMarkdown={topMarkdown}
        bottomMarkdown={bottomMarkdown}
        visuals={Visuals ? <Visuals /> : null}
        relatedComponents={Related ? <Related /> : null}
        sourcePath={frontmatter.source}
      />
    ),
  }
}
