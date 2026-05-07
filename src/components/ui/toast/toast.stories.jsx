import { userEvent, within, waitFor } from 'storybook/test'
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
      duration={Infinity}
      label="Show toast"
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: /show toast/i }))
    await waitFor(() => canvas.getByText('Changes saved'))
  },
}

export const Variants = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <ToastTrigger title="Default" description="A neutral notification." variant="default" label="Default" duration={Infinity} />
      <ToastTrigger title="Success" description="Operation completed." variant="success" label="Success" duration={Infinity} />
      <ToastTrigger title="Warning" description="Proceed with caution." variant="warning" label="Warning" duration={Infinity} />
      <ToastTrigger title="Error" description="Something went wrong." variant="danger" label="Danger" duration={Infinity} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    for (const label of ['Default', 'Success', 'Warning', 'Danger']) {
      await userEvent.click(canvas.getByRole('button', { name: label }))
    }
    await waitFor(() => canvas.getByText('Default'))
    await waitFor(() => canvas.getByText('Success'))
    await waitFor(() => canvas.getByText('Warning'))
    await waitFor(() => canvas.getByText('Error'))
  },
}

export const TitleOnly = {
  name: 'Title only (no description)',
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <ToastTrigger title="Saved" variant="default" label="Default" duration={Infinity} />
      <ToastTrigger title="Uploaded!" variant="success" label="Success" duration={Infinity} />
      <ToastTrigger title="Deleted" variant="danger" label="Danger" duration={Infinity} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    for (const label of ['Default', 'Success', 'Danger']) {
      await userEvent.click(canvas.getByRole('button', { name: label }))
    }
    await waitFor(() => canvas.getByText('Saved'))
    await waitFor(() => canvas.getByText('Uploaded!'))
    await waitFor(() => canvas.getByText('Deleted'))
  },
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: /show permanent toast/i }))
    await waitFor(() => canvas.getByText('Action required'))
  },
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
            toast({ title: 'First notification', variant: 'default', duration: Infinity })
            setTimeout(() => toast({ title: 'Second notification', variant: 'success', description: 'All done.', duration: Infinity }), 300)
            setTimeout(() => toast({ title: 'Third notification', variant: 'warning', description: 'Check this out.', duration: Infinity }), 600)
          }}
        >
          Fire 3 toasts
        </Button>
      )
    }
    return <MultiTrigger />
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: /fire 3 toasts/i }))
    await waitFor(() => canvas.getByText('First notification'))
    await waitFor(() => canvas.getByText('Second notification'))
    await waitFor(() => canvas.getByText('Third notification'))
  },
}
