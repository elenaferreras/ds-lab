/**
 * Remove YAML frontmatter from docs/components/*.md.
 * @param {string} source
 * @returns {string}
 */
export function stripFrontmatter(source) {
  if (!source.startsWith('---')) return source
  const end = source.indexOf('---', 3)
  if (end === -1) return source
  return source.slice(end + 3).trimStart()
}
