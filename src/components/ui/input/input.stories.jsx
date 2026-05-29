import { Input } from './input'
import { createDocumentationStory } from '../../../storybook/createDocumentationStory'
import inputGuidelines from '../../../../docs/components/Input.md?raw'

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label displayed above the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    helperText: {
      control: 'text',
      description: 'Helper text shown below the input',
    },
    error: {
      control: 'text',
      description: 'Error message — replaces helperText and sets error styles',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
}

export const Playground = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    helperText: 'We will never share your email.',
  },
}

export const Default = {
  render: () => (
    <div style={{ maxWidth: 320 }}>
      <Input placeholder="Placeholder" />
    </div>
  ),
}

export const WithLabel = {
  render: () => (
    <div style={{ maxWidth: 320 }}>
      <Input label="Email address" placeholder="you@example.com" />
    </div>
  ),
}

export const WithHelperText = {
  render: () => (
    <div style={{ maxWidth: 320 }}>
      <Input
        label="Username"
        placeholder="johndoe"
        helperText="Only letters, numbers, and underscores."
      />
    </div>
  ),
}

export const WithError = {
  render: () => (
    <div style={{ maxWidth: 320 }}>
      <Input
        label="Email address"
        placeholder="you@example.com"
        defaultValue="not-an-email"
        error="Please enter a valid email address."
      />
    </div>
  ),
}

export const Disabled = {
  render: () => (
    <div style={{ maxWidth: 320 }}>
      <Input
        label="Username"
        placeholder="johndoe"
        defaultValue="johndoe"
        helperText="This field cannot be changed."
        disabled
      />
    </div>
  ),
}

export const States = {
  name: 'All states',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: 320 }}>
      <Input label="Default" placeholder="Placeholder" />
      <Input label="With value" placeholder="Placeholder" defaultValue="Some value" />
      <Input
        label="With helper text"
        placeholder="Placeholder"
        helperText="This is a hint."
      />
      <Input
        label="Error"
        placeholder="Placeholder"
        defaultValue="bad value"
        error="This field has an error."
      />
      <Input
        label="Disabled"
        placeholder="Placeholder"
        defaultValue="Can't touch this"
        disabled
      />
    </div>
  ),
}

export const Documentation = createDocumentationStory({ guidelines: inputGuidelines })
