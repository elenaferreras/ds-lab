import { useState } from 'react'
import { FilterSelect } from './filter-select'
import { createDocumentationStory } from '../../../storybook/createDocumentationStory'
import { DocSection } from '../../../storybook/documentation/DocSection'
import filterSelectGuidelines from '../../../../docs/components/FilterSelect.md?raw'

const FILTER_OPTIONS = [
  { value: 'funnel', label: 'Funnel' },
  { value: 'channel', label: 'Channel' },
  { value: 'region', label: 'Region' },
  { value: 'product', label: 'Product' },
]

function FilterSelectDemo({ initialValue = 'funnel', options = FILTER_OPTIONS, ...props }) {
  const [value, setValue] = useState(initialValue)

  return (
    <FilterSelect
      {...props}
      value={value}
      onValueChange={setValue}
      options={options}
    />
  )
}

export default {
  title: 'Components/FilterSelect',
  component: FilterSelect,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Text shown when no option matches the current value',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
}

export const Playground = {
  render: (args) => <FilterSelectDemo {...args} />,
  args: {
    placeholder: 'Filter',
    disabled: false,
  },
}

export const Options = {
  render: () => (
    <div style={{ padding: 'var(--ds-spacing-24)' }}>
      <FilterSelectDemo placeholder="Filter" />
    </div>
  ),
}

export const Disabled = {
  render: () => (
    <div style={{ padding: 'var(--ds-spacing-24)' }}>
      <FilterSelectDemo placeholder="Filter" disabled />
    </div>
  ),
}

export const EmptyOptions = {
  name: 'Empty options (auto-disabled)',
  render: () => (
    <div style={{ padding: 'var(--ds-spacing-24)' }}>
      <FilterSelectDemo options={[]} placeholder="Filter" />
    </div>
  ),
}

export const Documentation = createDocumentationStory({
  guidelines: filterSelectGuidelines,
  customVisuals: function FilterSelectDocumentationVisuals() {
    return (
      <div className="component-documentation__visuals">
        <DocSection
          title="States"
          description="Default and disabled filter select examples."
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--ds-spacing-12)',
              padding: 'var(--ds-spacing-24)',
            }}
          >
            <FilterSelectDemo placeholder="Filter" />
            <FilterSelectDemo placeholder="Filter" disabled />
          </div>
        </DocSection>
      </div>
    )
  },
})
