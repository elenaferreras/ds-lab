import { Card } from '../card'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ChartContainer,
  Legend,
  Line,
  LineChart,
  RoundedBarChart,
  ChartTooltip,
  XAxis,
  YAxis,
  axisProps,
  chartColor,
  gridProps,
  tooltipProps,
} from './index'

const monthlyData = [
  { month: 'Jan', revenue: 4200, users: 240 },
  { month: 'Feb', revenue: 3800, users: 198 },
  { month: 'Mar', revenue: 5100, users: 320 },
  { month: 'Apr', revenue: 4700, users: 278 },
  { month: 'May', revenue: 5900, users: 389 },
  { month: 'Jun', revenue: 6200, users: 430 },
]

const weekData = [
  { day: 'Mon', value: 180 },
  { day: 'Tue', value: 210 },
  { day: 'Wed', value: 195 },
  { day: 'Thu', value: 243 },
  { day: 'Fri', value: 220 },
  { day: 'Sat', value: 165 },
]

const categoryData = [
  { name: 'Product', value: 42 },
  { name: 'Services', value: 28 },
  { name: 'Support', value: 18 },
  { name: 'Other', value: 12 },
]

export default {
  title: 'Components/Chart',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
}

export const LineChartExample = {
  name: 'Line chart',
  render: () => (
    <Card style={{ maxWidth: 640 }}>
      <Card.Header>
        <h3 style={{ margin: 0, fontSize: 'var(--ds-font-size-md)', fontWeight: 500 }}>
          Revenue trend
        </h3>
      </Card.Header>
      <Card.Body>
        <ChartContainer height={280}>
          <LineChart data={monthlyData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid {...gridProps} />
            <XAxis dataKey="month" {...axisProps} />
            <YAxis {...axisProps} />
            <ChartTooltip {...tooltipProps} />
            <Legend />
            <Line
              type="monotone"
              dataKey="revenue"
              name="Revenue"
              stroke={chartColor(0)}
              strokeWidth={2}
              dot={{ fill: chartColor(0), r: 3 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ChartContainer>
      </Card.Body>
    </Card>
  ),
}

export const BarChartExample = {
  name: 'Bar chart',
  render: () => (
    <Card style={{ maxWidth: 520 }}>
      <Card.Body>
        <RoundedBarChart data={weekData} height={300} />
      </Card.Body>
    </Card>
  ),
}

export const MultiSeries = {
  name: 'Multi-series',
  render: () => (
    <Card style={{ maxWidth: 640 }}>
      <Card.Header>
        <h3 style={{ margin: 0, fontSize: 'var(--ds-font-size-md)', fontWeight: 500 }}>
          Revenue & users
        </h3>
      </Card.Header>
      <Card.Body>
        <ChartContainer height={280}>
          <AreaChart data={monthlyData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid {...gridProps} />
            <XAxis dataKey="month" {...axisProps} />
            <YAxis yAxisId="left" {...axisProps} />
            <YAxis yAxisId="right" orientation="right" {...axisProps} />
            <ChartTooltip {...tooltipProps} />
            <Legend />
            <Area
              yAxisId="left"
              type="monotone"
              dataKey="revenue"
              name="Revenue"
              stroke={chartColor(0)}
              fill={chartColor(0)}
              fillOpacity={0.15}
              strokeWidth={2}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="users"
              name="Users"
              stroke={chartColor(1)}
              strokeWidth={2}
              dot={false}
            />
          </AreaChart>
        </ChartContainer>
      </Card.Body>
    </Card>
  ),
}

export const CategoryBars = {
  name: 'Category breakdown',
  render: () => (
    <Card style={{ maxWidth: 480 }}>
      <Card.Header>
        <h3 style={{ margin: 0, fontSize: 'var(--ds-font-size-md)', fontWeight: 500 }}>
          Share by category
        </h3>
      </Card.Header>
      <Card.Body>
        <ChartContainer height={240}>
          <BarChart
            data={categoryData}
            layout="vertical"
            margin={{ top: 8, right: 24, left: 8, bottom: 0 }}
          >
            <CartesianGrid {...gridProps} horizontal={false} vertical />
            <XAxis type="number" {...axisProps} />
            <YAxis type="category" dataKey="name" width={72} {...axisProps} />
            <ChartTooltip {...tooltipProps} />
            <Bar dataKey="value" name="Share %" fill={chartColor(2)} radius={[0, 4, 4, 0]} />
          </BarChart>
        </ChartContainer>
      </Card.Body>
    </Card>
  ),
}
