import { Card } from './card'
import { Button } from '../button'
import { Badge } from '../badge'
import { createDocumentationStory } from '../../../storybook/createDocumentationStory'
import { DocSection } from '../../../storybook/documentation/DocSection'
import cardGuidelines from '../../../../docs/components/Card.md?raw'

function CardDocumentationVisuals() {
  return (
    <div className="component-documentation__visuals">
      <DocSection
        title="Structure"
        description="Header, body, and footer slots for grouped content and actions."
      >
        <Card style={{ maxWidth: 420 }}>
          <Card.Header>
            <h3 style={{ margin: 0, fontSize: 'var(--ds-font-size-md)' }}>Notifications</h3>
          </Card.Header>
          <Card.Body>
            <p style={{ margin: 0, color: 'var(--ds-color-foreground-text-secondary)' }}>
              Manage email and push preferences.
            </p>
          </Card.Body>
          <Card.Footer>
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
              <Button variant="secondary" size="sm">
                Cancel
              </Button>
              <Button size="sm">Save</Button>
            </div>
          </Card.Footer>
        </Card>
      </DocSection>
    </div>
  )
}

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional classes for the card root',
    },
  },
}

export const Playground = {
  render: () => (
    <div style={{ width: 360 }}>
      <Card>
        <Card.Header>
          <h3 style={{ margin: 0, fontSize: 'var(--farco-font-size-md)', fontWeight: 'var(--farco-font-weight-medium)' }}>
            Card title
          </h3>
          <p style={{ margin: '4px 0 0', fontSize: 'var(--farco-font-size-sm)', color: 'var(--farco-color-text-secondary)' }}>
            Supporting subtitle text
          </p>
        </Card.Header>
        <Card.Body>
          <p style={{ margin: 0, fontSize: 'var(--farco-font-size-sm)', lineHeight: 'var(--farco-line-height-base)' }}>
            This is the card body. Place any content here — text, images, forms, or other components.
          </p>
        </Card.Body>
        <Card.Footer>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
            <Button variant="ghost" size="sm">Cancel</Button>
            <Button size="sm">Confirm</Button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  ),
}

export const BodyOnly = {
  name: 'Minimal (body only)',
  render: () => (
    <div style={{ width: 360 }}>
      <Card>
        <Card.Body>
          <p style={{ margin: 0, fontSize: 'var(--farco-font-size-sm)', lineHeight: 'var(--farco-line-height-base)' }}>
            A minimal card with only a body section. Clean and simple.
          </p>
        </Card.Body>
      </Card>
    </div>
  ),
}

export const WithHeader = {
  render: () => (
    <div style={{ width: 360 }}>
      <Card>
        <Card.Header>
          <h3 style={{ margin: 0, fontSize: 'var(--farco-font-size-md)', fontWeight: 'var(--farco-font-weight-medium)' }}>
            Settings
          </h3>
        </Card.Header>
        <Card.Body>
          <p style={{ margin: 0, fontSize: 'var(--farco-font-size-sm)', lineHeight: 'var(--farco-line-height-base)' }}>
            Manage your account preferences and notification settings.
          </p>
        </Card.Body>
      </Card>
    </div>
  ),
}

export const WithFooter = {
  render: () => (
    <div style={{ width: 360 }}>
      <Card>
        <Card.Body>
          <p style={{ margin: 0, fontSize: 'var(--farco-font-size-sm)', lineHeight: 'var(--farco-line-height-base)' }}>
            Are you sure you want to delete this item? This action cannot be undone.
          </p>
        </Card.Body>
        <Card.Footer>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
            <Button variant="secondary" size="sm">Cancel</Button>
            <Button intent="danger" size="sm">Delete</Button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  ),
}

export const RichContent = {
  name: 'With rich content',
  render: () => (
    <div style={{ width: 360 }}>
      <Card>
        <Card.Header>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h3 style={{ margin: 0, fontSize: 'var(--farco-font-size-md)', fontWeight: 'var(--farco-font-weight-medium)' }}>
                Project Alpha
              </h3>
              <p style={{ margin: '4px 0 0', fontSize: 'var(--farco-font-size-xs)', color: 'var(--farco-color-text-secondary)' }}>
                Last updated 2 hours ago
              </p>
            </div>
            <Badge variant="success">Active</Badge>
          </div>
        </Card.Header>
        <Card.Body>
          <p style={{ margin: 0, fontSize: 'var(--farco-font-size-sm)', lineHeight: 'var(--farco-line-height-base)' }}>
            A cross-functional initiative to improve user onboarding and reduce time-to-value for new customers.
          </p>
        </Card.Body>
        <Card.Footer>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Button variant="secondary" size="sm">View details</Button>
            <Button size="sm">Open project</Button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  ),
}

export const Documentation = createDocumentationStory({
  guidelines: cardGuidelines,
  customVisuals: CardDocumentationVisuals,
})
