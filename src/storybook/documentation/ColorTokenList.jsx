import { useEffect, useRef } from 'react'

/**
 * @param {{ token: string, role: string, sample?: 'background' | 'text' | 'border' | 'ring' }} props
 */
function ColorTokenRow({ token, role, sample = 'background' }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const value = getComputedStyle(ref.current).getPropertyValue(token).trim()
    const valueEl = ref.current.querySelector('[data-resolved]')
    if (valueEl) valueEl.textContent = value || '—'
  })

  const swatchStyle =
    sample === 'text'
      ? {
          background: 'var(--ds-color-background-surface-subtle)',
          color: `var(${token})`,
        }
      : sample === 'border'
        ? {
            background: 'var(--ds-color-background-surface-page)',
            border: `2px solid var(${token})`,
            boxSizing: 'border-box',
          }
        : sample === 'ring'
          ? {
              background: 'var(--ds-color-background-surface-page)',
              boxShadow: `0 0 0 2px var(${token})`,
            }
          : { background: `var(${token})` }

  return (
    <div className="component-documentation__token-row" ref={ref}>
      <span
        className="component-documentation__token-swatch"
        style={swatchStyle}
        aria-hidden="true"
      />
      <div className="component-documentation__token-details">
        <code className="component-documentation__token-name">{token}</code>
        <span className="component-documentation__token-role">{role}</span>
        <span className="component-documentation__token-value" data-resolved>
          …
        </span>
      </div>
    </div>
  )
}

/**
 * @param {{ tokens: Array<{ token: string, role: string, sample?: 'background' | 'text' | 'border' | 'ring' }> }} props
 */
export function ColorTokenList({ tokens }) {
  return (
    <ul className="component-documentation__token-list">
      {tokens.map(({ token, role, sample }) => (
        <li key={token}>
          <ColorTokenRow token={token} role={role} sample={sample} />
        </li>
      ))}
    </ul>
  )
}
