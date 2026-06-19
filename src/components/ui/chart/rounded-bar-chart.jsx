import { useState } from 'react'
import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  XAxis,
  YAxis,
} from 'recharts'
import { ChartContainer } from './chart-container'
import {
  barChartActiveFill,
  barChartInactiveFill,
  formatBarValue,
  minimalBarXAxisProps,
  roundedBarChartMargin,
  roundedBarLabelHeight,
  roundedBarLabelOffset,
  roundedBarRadius,
} from './chart-theme'

const DEFAULT_ACTIVE_BAR = 3

function ActiveBarLabel({ x, y, width, value, index, activeIndex }) {
  if (index !== activeIndex || x == null || y == null || width == null) return null

  const label = formatBarValue(value)
  const pillWidth = Math.max(52, label.length * 9 + 20)
  const centerX = x + width / 2
  const pillTop = y - roundedBarLabelHeight - roundedBarLabelOffset

  return (
    <g>
      <rect
        x={centerX - pillWidth / 2}
        y={pillTop}
        width={pillWidth}
        height={roundedBarLabelHeight}
        rx={roundedBarLabelHeight / 2}
        fill="var(--ds-color-background-action-primary)"
      />
      <text
        x={centerX}
        y={pillTop + roundedBarLabelHeight / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="var(--ds-color-foreground-action-on-primary)"
        fontSize={12}
        fontWeight={600}
        fontFamily="var(--ds-font-family-body)"
      >
        {label}
      </text>
    </g>
  )
}

function DayAxisTick({ x, y, payload, index, activeIndex }) {
  const active = index === activeIndex

  return (
    <text
      x={x}
      y={y}
      dy={16}
      textAnchor="middle"
      fill={active ? barChartActiveFill : 'var(--ds-color-foreground-text-secondary)'}
      fontSize={12}
      fontFamily="var(--ds-font-family-body)"
    >
      {payload.value}
    </text>
  )
}

/**
 * @param {{
 *   data: Array<{ day: string, value: number }>
 *   height?: number
 *   defaultActiveIndex?: number
 *   className?: string
 * }} props
 */
export function RoundedBarChart({
  data,
  height = 260,
  defaultActiveIndex = DEFAULT_ACTIVE_BAR,
  className,
}) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex)

  return (
    <ChartContainer height={height} className={className}>
      <BarChart
        data={data}
        margin={roundedBarChartMargin}
        barCategoryGap="28%"
        onMouseLeave={() => setActiveIndex(defaultActiveIndex)}
      >
        <YAxis
          hide
          width={0}
          domain={[0, 'dataMax']}
          padding={{ top: roundedBarLabelHeight + roundedBarLabelOffset }}
        />
        <XAxis
          dataKey="day"
          {...minimalBarXAxisProps}
          tick={(props) => <DayAxisTick {...props} activeIndex={activeIndex} />}
        />
        <Bar
          dataKey="value"
          radius={roundedBarRadius}
          maxBarSize={44}
          onMouseEnter={(_, index) => setActiveIndex(index)}
        >
          {data.map((entry, index) => (
            <Cell
              key={entry.day}
              fill={index === activeIndex ? barChartActiveFill : barChartInactiveFill}
            />
          ))}
          <LabelList
            dataKey="value"
            content={(props) => (
              <ActiveBarLabel {...props} activeIndex={activeIndex} />
            )}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  )
}

export default RoundedBarChart
