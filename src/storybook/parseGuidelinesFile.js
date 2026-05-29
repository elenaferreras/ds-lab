import yaml from 'js-yaml'
import { splitDocumentationMarkdown } from './documentationSections.js'

/**
 * @param {string} raw
 * @returns {{ data: Record<string, unknown>, content: string }}
 */
function parseFrontmatter(raw) {
  if (!raw.startsWith('---')) {
    return { data: {}, content: raw }
  }

  const end = raw.indexOf('---', 3)
  if (end === -1) {
    return { data: {}, content: raw }
  }

  const yamlText = raw.slice(3, end).trim()
  const content = raw.slice(end + 3).replace(/^\n/, '')
  const data = yaml.load(yamlText)

  return {
    data: typeof data === 'object' && data !== null ? data : {},
    content,
  }
}

/**
 * @param {string} rawMarkdown
 */
export function parseGuidelinesFile(rawMarkdown) {
  const { data: frontmatter, content: body } = parseFrontmatter(rawMarkdown)
  const { top, bottom } = splitDocumentationMarkdown(body)

  return {
    frontmatter,
    documentation: frontmatter.documentation ?? null,
    topMarkdown: top,
    bottomMarkdown: bottom,
  }
}
