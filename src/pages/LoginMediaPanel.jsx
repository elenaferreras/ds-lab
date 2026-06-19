/**
 * Right-hand media slot for the login layout.
 *
 * @param {{
 *   media?: 'gradient' | 'image' | 'video'
 *   imageSrc?: string
 *   videoSrc?: string
 *   imageAlt?: string
 *   className?: string
 * }} props
 */
import './login.css'

const DEMO_IMAGE = '/login-demo.png'

export function LoginMediaPanel({
  media = 'gradient',
  imageSrc,
  videoSrc,
  imageAlt = 'Login illustration',
  className = '',
}) {
  const showGradient = media === 'gradient'
  const showImage = media === 'image'
  const showVideo = media === 'video'
  const resolvedImageSrc = imageSrc ?? (showImage ? DEMO_IMAGE : undefined)
  const resolvedVideoSrc = videoSrc

  return (
    <aside
      className={`login-media-panel relative h-full min-h-screen w-full overflow-hidden ${className}`}
      aria-hidden={showGradient}
    >
      {showGradient ? (
        <div className="login-media-panel__gradient absolute inset-0" aria-hidden />
      ) : null}

      {showVideo && resolvedVideoSrc ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={resolvedVideoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : null}

      {showImage && resolvedImageSrc ? (
        <img
          src={resolvedImageSrc}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}

      {(showImage || showVideo) && (
        <div
          className="pointer-events-none absolute inset-0 bg-[color-mix(in_oklab,var(--ds-color-foreground-text-primary)_12%,transparent)]"
          aria-hidden
        />
      )}
    </aside>
  )
}
