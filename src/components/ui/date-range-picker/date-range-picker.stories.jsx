import { useState } from 'react'
import { DateRangePicker } from './date-range-picker'
import { FilterSelect } from '../filter-select'
import { createDocumentationStory } from '../../../storybook/createDocumentationStory'
import { DocSection } from '../../../storybook/documentation/DocSection'
import { getPresetRange } from '../../../lib/date-range'
import dateRangePickerGuidelines from '../../../../docs/components/DateRangePicker.md?raw'

const FILTER_OPTIONS = [
  { value: 'funnel', label: 'Funnel' },
  { value: 'channel', label: 'Channel' },
  { value: 'region', label: 'Region' },
  { value: 'product', label: 'Product' },
]

function DateRangePickerDemo({ initialPreset = 'last7', ...props }) {
  const [range, setRange] = useState(() => getPresetRange(initialPreset))

  return <DateRangePicker {...props} value={range} onChange={setRange} />
}

function DashboardControlsDemo() {
  const [range, setRange] = useState(() => {
    const from = new Date(2023, 0, 28)
    const to = new Date(2023, 0, 29)
    to.setHours(23, 59, 59, 999)
    return { from, to }
  })
  const [filter, setFilter] = useState('funnel')

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 'var(--ds-spacing-12)',
        padding: 'var(--ds-spacing-24)',
        background: 'var(--ds-color-background-surface-page)',
      }}
    >
      <DateRangePicker value={range} onChange={setRange} locale="en-GB" />
      <FilterSelect
        value={filter}
        onValueChange={setFilter}
        options={FILTER_OPTIONS}
      />
    </div>
  )
}

export default {
  title: 'Components/DateRangePicker',
  component: DateRangePicker,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Small label shown above the formatted date range',
    },
    locale: {
      control: 'text',
      description: 'Locale string for date formatting',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
}

export const Playground = {
  render: (args) => <DateRangePickerDemo {...args} />,
  args: {
    label: 'Date',
    locale: 'en-GB',
    disabled: false,
  },
}

export const Presets = {
  render: () => (
    <div style={{ padding: 'var(--ds-spacing-24)' }}>
      <DateRangePickerDemo label="Date" locale="en-GB" />
    </div>
  ),
}

export const Disabled = {
  render: () => (
    <div style={{ padding: 'var(--ds-spacing-24)' }}>
      <DateRangePickerDemo label="Date" locale="en-GB" disabled />
    </div>
  ),
}

export const DashboardControls = {
  name: 'With FilterSelect (dashboard toolbar)',
  render: () => <DashboardControlsDemo />,
}

export const Documentation = createDocumentationStory({
  guidelines: dateRangePickerGuidelines,
  customVisuals: function DateRangePickerDocumentationVisuals() {
    return (
      <div className="component-documentation__visuals">
        <DocSection
          title="States"
          description="Default and disabled date range picker examples."
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--ds-spacing-12)',
              padding: 'var(--ds-spacing-24)',
            }}
          >
            <DateRangePickerDemo label="Date" locale="en-GB" />
            <DateRangePickerDemo label="Date" locale="en-GB" disabled />
          </div>
        </DocSection>
      </div>
    )
  },
})
