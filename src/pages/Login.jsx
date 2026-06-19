import { FarcoLogo } from '../components/ui/logo'
import { Button, Input, InputPassword } from '../components'
import { LoginMediaPanel } from './LoginMediaPanel'
import { GoogleLogo } from '@phosphor-icons/react'

/**
 * @param {{
 *   media?: 'gradient' | 'image' | 'video' | 'none'
 *   layout?: 'split' | 'stack'
 *   imageSrc?: string
 *   videoSrc?: string
 * }} props
 */
export default function LoginPage({
  media = 'gradient',
  layout = 'split',
  imageSrc,
  videoSrc,
}) {
  const isSplit = layout === 'split' && media !== 'none'

  return (
    <div
      className={
        isSplit
          ? 'grid min-h-screen grid-cols-2'
          : 'min-h-screen'
      }
    >
      <div className="relative flex min-h-screen min-w-0 flex-col bg-[var(--ds-color-background-surface-page)] px-[var(--ds-spacing-32)] py-[var(--ds-spacing-32)] md:px-[var(--ds-spacing-40)]">
        <div className="shrink-0">
          <FarcoLogo className="text-[var(--ds-color-foreground-text-primary)]" />
        </div>

        <div className="flex flex-1 items-center justify-center py-[var(--ds-spacing-32)]">
          <div className="w-full max-w-[360px]">
            <h1 className="m-0 mb-[var(--ds-spacing-8)] font-[var(--ds-font-family-body)] text-[var(--ds-font-size-xl)] font-bold leading-tight tracking-[-0.01em] text-[var(--ds-color-foreground-text-primary)]">
              Welcome back
            </h1>
            <p className="m-0 mb-[var(--ds-spacing-32)] font-[var(--ds-font-family-body)] text-[var(--ds-font-size-md)] leading-normal text-[var(--ds-color-foreground-text-secondary)]">
              Welcome back! Please enter your details.
            </p>

            <form
              className="flex flex-col gap-[var(--ds-spacing-24)]"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
              />
              <InputPassword
                label="Password"
                placeholder="Enter your password"
                autoComplete="current-password"
                footer={
                  <Button
                    type="button"
                    link
                    size="sm"
                    className="-mx-[6px] w-full justify-start"
                  >
                    Forgot password
                  </Button>
                }
              />

              <div className="flex flex-col gap-[var(--ds-spacing-12)]">
                <Button variant="primary" className="w-full">
                  Sign in
                </Button>
                <Button
                  variant="secondary"
                  className="w-full"
                  iconLeft={<GoogleLogo weight="bold" />}
                >
                  Sign in with Google
                </Button>
              </div>
            </form>
          </div>
        </div>

        <footer className="shrink-0 font-[var(--ds-font-family-body)] text-[var(--ds-font-size-sm)] text-[var(--ds-color-foreground-text-secondary)]">
          © Farco 2026
        </footer>
      </div>

      {isSplit ? (
        <LoginMediaPanel
          media={media}
          imageSrc={imageSrc}
          videoSrc={videoSrc}
        />
      ) : null}
    </div>
  )
}
