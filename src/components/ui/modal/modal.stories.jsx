import { useState } from 'react'
import { Modal } from './modal'
import { Button } from '../button'
import { Input } from '../input'
import { createDocumentationStory } from '../../../storybook/createDocumentationStory'
import { DocSection } from '../../../storybook/documentation/DocSection'
import modalGuidelines from '../../../../docs/components/Modal.md?raw'

function ModalDemo({
  triggerLabel = 'Open modal',
  defaultOpen = false,
  footer,
  children,
  ...modalProps
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: defaultOpen ? '100vh' : 'auto',
        padding: 'var(--ds-spacing-24)',
      }}
    >
      {!defaultOpen && (
        <Button variant="secondary" onClick={() => setOpen(true)}>
          {triggerLabel}
        </Button>
      )}
      <Modal {...modalProps} open={open} onClose={() => setOpen(false)}>
        {children}
        {footer}
      </Modal>
    </div>
  )
}

function ModalDocumentationVisuals() {
  return (
    <div className="component-documentation__visuals">
      <DocSection
        title="Sizes"
        description="Panel width scales with size: sm (320px), md (480px), lg (560px) via spacing tokens."
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--ds-spacing-24)',
          }}
        >
          <Modal
            open
            size="sm"
            title="Small modal"
            description="Compact confirmations and short messages."
            onClose={() => {}}
          >
            <p
              style={{
                margin: 0,
                fontSize: 'var(--ds-font-size-sm)',
                color: 'var(--ds-color-foreground-text-secondary)',
              }}
            >
              Body content for the small size.
            </p>
          </Modal>
        </div>
      </DocSection>
      <DocSection
        title="Form with actions"
        description="Use Input and Button in the body and footer for short forms."
      >
        <Modal
          open
          size="md"
          title="Edit profile"
          description="Update your account details."
          onClose={() => {}}
        >
          <Input label="Full name" placeholder="Jane Doe" defaultValue="Jane Doe" />
          <Input label="Email" placeholder="you@example.com" defaultValue="jane@example.com" />
          <div
            style={{
              display: 'flex',
              gap: 'var(--ds-spacing-8)',
              justifyContent: 'flex-end',
              marginTop: 'var(--ds-spacing-8)',
            }}
          >
            <Button variant="secondary" size="sm">
              Cancel
            </Button>
            <Button size="sm">Save</Button>
          </div>
        </Modal>
      </DocSection>
    </div>
  )
}

export default {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Width of the modal panel',
    },
    title: {
      control: 'text',
      description: 'Title shown in the header',
    },
    description: {
      control: 'text',
      description: 'Optional supporting text below the title',
    },
    bodyText: {
      control: 'text',
      description: 'Sample body copy for the Playground story',
    },
  },
}

export const Playground = {
  render: (args) => (
    <ModalDemo
      title={args.title}
      description={args.description}
      size={args.size}
      triggerLabel="Open modal"
    >
      <p
        style={{
          margin: 0,
          fontSize: 'var(--ds-font-size-sm)',
          color: 'var(--ds-color-foreground-text-secondary)',
        }}
      >
        {args.bodyText}
      </p>
    </ModalDemo>
  ),
  args: {
    title: 'Modal title',
    description: 'Optional description that explains the purpose of this dialog.',
    size: 'md',
    bodyText: 'Modal body content goes here. Add forms, lists, or action rows as children.',
  },
}

export const SizeSm = {
  name: 'Size — sm',
  render: () => (
    <ModalDemo
      defaultOpen
      size="sm"
      title="Small modal"
      description="Compact confirmations and short messages."
    >
      <p
        style={{
          margin: 0,
          fontSize: 'var(--ds-font-size-sm)',
          color: 'var(--ds-color-foreground-text-secondary)',
        }}
      >
        Body content for the small size.
      </p>
    </ModalDemo>
  ),
}

export const SizeMd = {
  name: 'Size — md',
  render: () => (
    <ModalDemo
      defaultOpen
      size="md"
      title="Medium modal"
      description="Default size for most dialogs and forms."
    >
      <p
        style={{
          margin: 0,
          fontSize: 'var(--ds-font-size-sm)',
          color: 'var(--ds-color-foreground-text-secondary)',
        }}
      >
        Body content for the medium size.
      </p>
    </ModalDemo>
  ),
}

export const SizeLg = {
  name: 'Size — lg',
  render: () => (
    <ModalDemo
      defaultOpen
      size="lg"
      title="Large modal"
      description="Wider panel for richer content or multi-field forms."
    >
      <p
        style={{
          margin: 0,
          fontSize: 'var(--ds-font-size-sm)',
          color: 'var(--ds-color-foreground-text-secondary)',
        }}
      >
        Body content for the large size.
      </p>
    </ModalDemo>
  ),
}

export const WithForm = {
  name: 'With form',
  render: () => (
    <ModalDemo
      defaultOpen
      size="md"
      title="Edit profile"
      description="Update your account details."
    >
      <Input label="Full name" placeholder="Jane Doe" defaultValue="Jane Doe" />
      <Input label="Email" placeholder="you@example.com" defaultValue="jane@example.com" />
      <div
        style={{
          display: 'flex',
          gap: 'var(--ds-spacing-8)',
          justifyContent: 'flex-end',
          marginTop: 'var(--ds-spacing-8)',
        }}
      >
        <Button variant="secondary" size="sm">
          Cancel
        </Button>
        <Button size="sm">Save</Button>
      </div>
    </ModalDemo>
  ),
}

export const Documentation = createDocumentationStory({
  guidelines: modalGuidelines,
  customVisuals: ModalDocumentationVisuals,
})
