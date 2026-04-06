import { ToastProvider, useToast } from './toast'
import { Button } from '../button'

export default {
  title: 'Components/Toast',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
}

// ─── Interactive trigger stories ─────────────────────────────────────────────

function ToastTrigger({ title, description, variant, duration, label = 'Show toast' }) {
  const { toast } = useToast()
  return (
    <Button
      variant="secondary"
      onClick={() => toast({ title, description, variant, duration })}
    >
      {label}
    </Button>
  )
}

export const Playground = {
  render: () => (
    <ToastTrigger
      title="Changes saved"
      description="Your changes have been saved successfully."
      variant="default"
      duration={4000}
      label="Show toast"
    />
  ),
}

export const Variants = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <ToastTrigger title="Default" description="A neutral notification." variant="default" label="Default" />
      <ToastTrigger title="Success" description="Operation completed." variant="success" label="Success" />
      <ToastTrigger title="Warning" description="Proceed with caution." variant="warning" label="Warning" />
      <ToastTrigger title="Error" description="Something went wrong." variant="danger" label="Danger" />
    </div>
  ),
}

export const TitleOnly = {
  name: 'Title only (no description)',
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <ToastTrigger title="Saved" variant="default" label="Default" />
      <ToastTrigger title="Uploaded!" variant="success" label="Success" />
      <ToastTrigger title="Deleted" variant="danger" label="Danger" />
    </div>
  ),
}

export const Permanent = {
  name: 'Permanent (no auto-dismiss)',
  render: () => (
    <ToastTrigger
      title="Action required"
      description="Please review and confirm before continuing."
      variant="warning"
      duration={Infinity}
      label="Show permanent toast"
    />
  ),
}

export const ShortDuration = {
  name: 'Short duration (1.5s)',
  render: () => (
    <ToastTrigger
      title="Copied to clipboard"
      variant="default"
      duration={1500}
      label="Copy"
    />
  ),
}

export const Multiple = {
  name: 'Multiple toasts',
  render: () => {
    function MultiTrigger() {
      const { toast } = useToast()
      return (
        <Button
          variant="secondary"
          onClick={() => {
            toast({ title: 'First notification', variant: 'default', duration: 5000 })
            setTimeout(() => toast({ title: 'Second notification', variant: 'success', description: 'All done.', duration: 5000 }), 300)
            setTimeout(() => toast({ title: 'Third notification', variant: 'warning', description: 'Check this out.', duration: 5000 }), 600)
          }}
        >
          Fire 3 toasts
        </Button>
      )
    }
    return <MultiTrigger />
  },
}
