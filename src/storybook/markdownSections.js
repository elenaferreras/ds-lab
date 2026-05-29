const HIDE_START = '<!-- storybook-hide -->'
const HIDE_END = '<!-- /storybook-hide -->'

/**
 * Remove Storybook-only hidden blocks (Figma MCP notes stay in the file).
 * @param {string} markdown
 * @returns {string}
 */
export function stripStorybookHidden(markdown) {
  let result = markdown
  while (result.includes(HIDE_START)) {
    const start = result.indexOf(HIDE_START)
    const end = result.indexOf(HIDE_END, start)
    if (end === -1) break
    result = result.slice(0, start) + result.slice(end + HIDE_END.length)
  }
  return result.replace(/\n{3,}/g, '\n\n').trim()
}

/**
 * Split markdown into h2 sections. Keys are heading titles (without ##).
 * @param {string} markdown
 * @returns {Map<string, string>}
 */
export function parseH2Sections(markdown) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n')
  /** @type {Map<string, string[]>} */
  const sections = new Map()
  let currentTitle = null
  /** @type {string[]} */
  let preamble = []

  for (const line of lines) {
    const match = line.match(/^## (.+)$/)
    if (match) {
      if (currentTitle) {
        sections.set(currentTitle, sections.get(currentTitle) ?? [])
      } else if (preamble.length) {
        sections.set('__preamble__', preamble)
        preamble = []
      }
      currentTitle = match[1].trim()
      sections.set(currentTitle, [])
    } else if (currentTitle) {
      sections.get(currentTitle).push(line)
    } else {
      preamble.push(line)
    }
  }

  /** @type {Map<string, string>} */
  const result = new Map()
  if (preamble.length) {
    result.set('__preamble__', preamble.join('\n').trim())
  }
  for (const [title, bodyLines] of sections) {
    if (title === '__preamble__') continue
    result.set(title, bodyLines.join('\n').trim())
  }
  return result
}

/**
 * @param {string} markdown
 * @param {{ include?: string[], exclude?: string[] }} [options]
 * @returns {string}
 */
export function extractSections(markdown, options = {}) {
  const cleaned = stripStorybookHidden(markdown)
  const sections = parseH2Sections(cleaned)
  const { include, exclude } = options

  const titles = include
    ? include
    : [...sections.keys()].filter((t) => t !== '__preamble__' && !(exclude ?? []).includes(t))

  const parts = []
  const preamble = sections.get('__preamble__')
  if (preamble && include) {
    parts.push(preamble)
  }

  for (const title of titles) {
    const body = sections.get(title)
    if (body) parts.push(`## ${title}\n\n${body}`)
  }

  return parts.join('\n\n').trim()
}
