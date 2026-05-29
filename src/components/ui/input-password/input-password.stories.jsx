import { useState } from 'react'
import { InputPassword } from './input-password'
import { Input } from '../input'
import { Button } from '../button'

export default {
  title: 'Components/InputPassword',
  component: InputPassword,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label displayed above the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown inside the input',
    },
    helperText: {
      control: 'text',
      description: 'Supplementary text shown below the input',
    },
    error: {
      control: 'text',
      description: 'Error message — replaces helperText and applies error styles',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input and the visibility toggle',
    },
    defaultVisible: {
      control: 'boolean',
      description: 'Initial visibility state (uncontrolled). Ignored when `visible` is provided.',
    },
    visible: {
      control: 'boolean',
      description: 'Controlled visibility state. When provided the component delegates state management to the parent.',
    },
    onVisibleChange: {
      action: 'onVisibleChange',
      description: 'Callback fired when the visibility toggle is clicked. Receives the next boolean value.',
    },
  },
}

// ── Playground ───────────────────────────────────────────────────────────────

export const Playground = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    helperText: 'At least 8 characters.',
    disabled: false,
    defaultVisible: false,
  },
}

// ── Individual states ─────────────────────────────────────────────────────────

export const Default = {
  render: () => (
    <div style={{ maxWidth: 320 }}>
      <InputPassword placeholder="Enter your password" />
    </div>
  ),
}

export const WithLabel = {
  render: () => (
    <div style={{ maxWidth: 320 }}>
      <InputPassword label="Password" placeholder="Enter your password" />
    </div>
  ),
}

export const WithHelperText = {
  render: () => (
    <div style={{ maxWidth: 320 }}>
      <InputPassword
        label="Password"
        placeholder="Enter your password"
        helperText="At least 8 characters, one uppercase letter and one number."
      />
    </div>
  ),
}

export const WithError = {
  render: () => (
    <div style={{ maxWidth: 320 }}>
      <InputPassword
        label="Password"
        placeholder="Enter your password"
        defaultValue="short"
        error="Password must be at least 8 characters."
      />
    </div>
  ),
}

export const Disabled = {
  render: () => (
    <div style={{ maxWidth: 320 }}>
      <InputPassword
        label="Password"
        placeholder="Enter your password"
        defaultValue="supersecret"
        helperText="This field cannot be changed."
        disabled
      />
    </div>
  ),
}

// ── Controlled visibility ─────────────────────────────────────────────────────

export const ControlledVisibility = {
  name: 'Controlled visibility',
  render: () => {
    const [visible, setVisible] = useState(false)

    return (
      <div style={{ maxWidth: 320, display: 'flex', flexDirection: 'column', gap: 'var(--ds-spacing-12)' }}>
        <InputPassword
          label="Password"
          placeholder="Enter your password"
          defaultValue="my-secret-password"
          visible={visible}
          onVisibleChange={setVisible}
        />
        <p
          style={{
            fontSize: 'var(--ds-font-size-xs)',
            color: 'var(--ds-color-foreground-text-secondary)',
            fontFamily: 'var(--ds-font-family-body)',
          }}
        >
          External state:{' '}
          <strong style={{ color: 'var(--ds-color-foreground-text-primary)' }}>
            {visible ? 'visible' : 'hidden'}
          </strong>
        </p>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setVisible((v) => !v)}
        >
          Toggle from outside
        </Button>
      </div>
    )
  },
}

// ── Login form ────────────────────────────────────────────────────────────────

export const LoginForm = {
  name: 'Inside a login form',
  render: () => (
    <div
      style={{
        maxWidth: 360,
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--ds-spacing-16)',
      }}
    >
      <Input
        label="Email"
        type="email"
        placeholder="you@example.com"
      />
      <InputPassword
        label="Password"
        placeholder="Enter your password"
        helperText="Forgot your password?"
      />
      <Button style={{ width: '100%' }}>Sign in</Button>
    </div>
  ),
}
