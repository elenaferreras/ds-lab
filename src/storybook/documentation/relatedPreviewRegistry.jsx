import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'

function ToastPreview() {
  return (
    <div
      className="component-documentation__toast-preview"
      role="status"
      aria-label="Toast notification preview"
    >
      <span className="component-documentation__toast-preview-icon" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm3.28 5.28a.75.75 0 0 0-1.06-1.06L7 8.44 5.78 7.22a.75.75 0 0 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0l3.75-3.75Z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <div className="component-documentation__toast-preview-body">
        <p className="component-documentation__toast-preview-title">Changes saved</p>
        <p className="component-documentation__toast-preview-desc">
          Your changes have been saved successfully.
        </p>
      </div>
      <Button
        variant="ghost"
        size="sm"
        iconLeft={
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M3 3l10 10M13 3L3 13" />
          </svg>
        }
        aria-label="Close notification"
      >
        {null}
      </Button>
    </div>
  )
}

function TextLinkPreview() {
  return (
    <p className="component-documentation__text-link-sample">
      View details in your{' '}
      <a href="#related-text-link" onClick={(e) => e.preventDefault()}>
        account settings
      </a>
      .
    </p>
  )
}

/** @type {Record<string, React.ComponentType>} */
export const RELATED_PREVIEW_REGISTRY = {
  'badge-dismiss': () => <Badge onDismiss={() => {}}>Active</Badge>,
  'toast-close': ToastPreview,
  'text-link': TextLinkPreview,
}

/**
 * @param {string} previewType
 */
export function resolveRelatedPreview(previewType) {
  const Preview = RELATED_PREVIEW_REGISTRY[previewType]
  if (!Preview) {
    console.warn(`[documentation] Unknown related previewType: ${previewType}`)
    return null
  }
  return <Preview />
}
