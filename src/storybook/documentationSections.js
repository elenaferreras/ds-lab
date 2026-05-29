import { extractSections, stripStorybookHidden } from './markdownSections.js'

export { extractSections, stripStorybookHidden }

export const DEFAULT_TOP_SECTIONS = [
  'Overview',
  'When to use',
  'Variants',
  'Props and behavior',
]

export const DEFAULT_BOTTOM_SECTIONS = [
  'Do',
  "Don't",
  'Content guidelines',
  'Accessibility',
]

/**
 * @param {string} markdown
 * @param {{ top?: string[], bottom?: string[] }} [options]
 */
export function splitDocumentationMarkdown(
  markdown,
  { top = DEFAULT_TOP_SECTIONS, bottom = DEFAULT_BOTTOM_SECTIONS } = {}
) {
  return {
    top: extractSections(markdown, { include: top }),
    bottom: extractSections(markdown, { include: bottom }),
  }
}
