/**
 * Lightweight markdown for docs/components/*.md in Storybook canvas.
 * Avoids @storybook/addon-docs Markdown (needs theme.typography.fonts in canvas).
 */

/** @param {string} text */
function parseInline(text) {
  const parts = []
  const re = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|`([^`]+)`)/g
  let last = 0
  let m
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push({ type: 'text', value: text.slice(last, m.index) })
    if (m[2] != null) parts.push({ type: 'link', label: m[2], href: m[3] })
    else if (m[4] != null) parts.push({ type: 'strong', value: m[4] })
    else if (m[5] != null) parts.push({ type: 'code', value: m[5] })
    last = m.index + m[0].length
  }
  if (last < text.length) parts.push({ type: 'text', value: text.slice(last) })
  return parts
}

/** @param {ReturnType<typeof parseInline>} parts */
function Inline({ parts }) {
  return parts.map((part, i) => {
    if (part.type === 'text') return <span key={i}>{part.value}</span>
    if (part.type === 'strong') return <strong key={i}>{part.value}</strong>
    if (part.type === 'code') return <code key={i}>{part.value}</code>
    if (part.type === 'link') {
      return (
        <a key={i} href={part.href}>
          {part.label}
        </a>
      )
    }
    return null
  })
}

/** @param {string} line */
function parseTableRow(line) {
  return line
    .split('|')
    .slice(1, -1)
    .map((cell) => cell.trim())
}

/** @param {string} markdown */
function parseBlocks(markdown) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n')
  /** @type {Array<{ type: string, [key: string]: unknown }>} */
  const blocks = []
  let i = 0

  const isTableLine = (line) => line.trim().startsWith('|')
  const isSeparator = (line) => /^\|[\s\-:|]+\|$/.test(line.trim())

  while (i < lines.length) {
    const line = lines[i]
    const trimmed = line.trim()

    if (!trimmed) {
      i += 1
      continue
    }

    if (trimmed.startsWith('```')) {
      const lang = trimmed.slice(3).trim() || 'text'
      i += 1
      const codeLines = []
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i])
        i += 1
      }
      if (i < lines.length) i += 1
      blocks.push({ type: 'code', lang, value: codeLines.join('\n') })
      continue
    }

    if (isTableLine(line)) {
      const header = parseTableRow(line)
      i += 1
      if (i < lines.length && isSeparator(lines[i])) i += 1
      const rows = []
      while (i < lines.length && isTableLine(lines[i])) {
        rows.push(parseTableRow(lines[i]))
        i += 1
      }
      blocks.push({ type: 'table', header, rows })
      continue
    }

    const heading = trimmed.match(/^(#{1,3})\s+(.+)$/)
    if (heading) {
      blocks.push({ type: 'heading', level: heading[1].length, text: heading[2] })
      i += 1
      continue
    }

    if (trimmed.startsWith('- ')) {
      const items = []
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        items.push(lines[i].trim().slice(2))
        i += 1
      }
      blocks.push({ type: 'list', items })
      continue
    }

    const para = []
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].trim().startsWith('#') &&
      !lines[i].trim().startsWith('- ') &&
      !lines[i].trim().startsWith('```') &&
      !isTableLine(lines[i])
    ) {
      para.push(lines[i].trim())
      i += 1
    }
    blocks.push({ type: 'paragraph', text: para.join(' ') })
  }

  return blocks
}

/** @param {{ markdown: string, skipFirstH1?: boolean }} props */
export function DocumentationMarkdown({ markdown, skipFirstH1 = false }) {
  let blocks = parseBlocks(markdown)
  if (skipFirstH1) {
    const firstH1 = blocks.findIndex((b) => b.type === 'heading' && b.level === 1)
    if (firstH1 !== -1) blocks = blocks.filter((_, i) => i !== firstH1)
  }

  return (
    <article className="component-documentation__article">
      {blocks.map((block, index) => {
        if (block.type === 'heading') {
          const Tag = block.level === 1 ? 'h1' : block.level === 2 ? 'h2' : 'h3'
          return (
            <Tag key={index} className={`component-documentation__h${block.level}`}>
              <Inline parts={parseInline(block.text)} />
            </Tag>
          )
        }
        if (block.type === 'paragraph') {
          return (
            <p key={index} className="component-documentation__p">
              <Inline parts={parseInline(block.text)} />
            </p>
          )
        }
        if (block.type === 'list') {
          return (
            <ul key={index} className="component-documentation__ul">
              {block.items.map((item, j) => (
                <li key={j}>
                  <Inline parts={parseInline(item)} />
                </li>
              ))}
            </ul>
          )
        }
        if (block.type === 'table') {
          return (
            <div key={index} className="component-documentation__table-wrap">
              <table className="component-documentation__table">
                <thead>
                  <tr>
                    {block.header.map((cell, j) => (
                      <th key={j}>
                        <Inline parts={parseInline(cell)} />
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, ri) => (
                    <tr key={ri}>
                      {row.map((cell, ci) => (
                        <td key={ci}>
                          <Inline parts={parseInline(cell)} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }
        if (block.type === 'code') {
          return (
            <pre key={index} className="component-documentation__pre">
              <code data-lang={block.lang}>{block.value}</code>
            </pre>
          )
        }
        return null
      })}
    </article>
  )
}
