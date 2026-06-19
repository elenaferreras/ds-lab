import { useState } from 'react'
import {
  ArrowUpRightIcon,
  BellIcon,
  ChartPieIcon,
  ChatCircleDotsIcon,
  FolderIcon,
  GearIcon,
  HouseIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  PercentIcon,
  QuestionIcon,
  SlidersHorizontalIcon,
  SquaresFourIcon,
  UserIcon,
} from '@phosphor-icons/react'
import {
  Avatar,
  Button,
  Card,
  DateRangePicker,
  FilterSelect,
  RoundedBarChart,
  SideNav,
} from '../components'
import './dashboard.css'

const iconProps = { size: 20, weight: 'regular' }

const weekData = [
  { day: 'Mon', value: 180 },
  { day: 'Tue', value: 210 },
  { day: 'Wed', value: 195 },
  { day: 'Thu', value: 243 },
  { day: 'Fri', value: 220 },
  { day: 'Sat', value: 165 },
]

const FILTER_OPTIONS = [
  { value: 'funnel', label: 'Funnel' },
  { value: 'orders', label: 'Orders' },
  { value: 'revenue', label: 'Revenue' },
  { value: 'sessions', label: 'Sessions' },
]

const HEATMAP_TONES = {
  muted: 'var(--ds-color-border-surface-default)',
  active: 'var(--ds-color-foreground-action-on-secondary)',
  strong: 'var(--ds-color-foreground-text-secondary)',
  primary: 'var(--ds-color-background-action-primary)',
}

const ordersHeatmap = [
  { channel: 'Facebook', cells: ['muted', 'active', 'strong', 'primary'] },
  { channel: 'Instagram', cells: ['active', 'muted', 'primary', 'strong'] },
  { channel: 'Tiktok', cells: ['strong', 'primary', 'muted', 'active'] },
  { channel: 'Whatsapp', cells: ['primary', 'strong', 'active', 'muted'] },
]

const transactions = [
  { name: 'Stripe payout', date: 'Mar 12, 2026', amount: '$2,430.00', status: 'Completed' },
  { name: 'Shopify order #4821', date: 'Mar 11, 2026', amount: '$186.40', status: 'Completed' },
  { name: 'Refund — Order #4798', date: 'Mar 10, 2026', amount: '-$42.00', status: 'Refunded' },
  { name: 'Meta ads spend', date: 'Mar 9, 2026', amount: '-$320.00', status: 'Processing' },
]

const DEFAULT_DATE_RANGE = {
  from: new Date(2023, 0, 28),
  to: new Date(2023, 0, 29),
}

/**
 * @param {{ avatarSrc?: string }} props
 */
export default function DashboardPage({ avatarSrc = '/avatar-default.png' }) {
  const [dateRange, setDateRange] = useState(DEFAULT_DATE_RANGE)
  const [filter, setFilter] = useState('funnel')

  return (
    <div className="dashboard-shell">
      <SideNav className="dashboard__side-nav">
        <SideNav.Logo>
          <SquaresFourIcon {...iconProps} />
        </SideNav.Logo>

        <SideNav.Section>
          <SideNav.Item label="Home" icon={<HouseIcon {...iconProps} />} />
          <SideNav.Item label="Dashboard" icon={<SquaresFourIcon {...iconProps} />} active />
          <SideNav.Item label="Notifications" icon={<BellIcon {...iconProps} />} />
        </SideNav.Section>

        <SideNav.Section className="mt-[var(--ds-spacing-8)]">
          <SideNav.Item label="Profile" icon={<UserIcon {...iconProps} />} />
          <SideNav.Item label="Files" icon={<FolderIcon {...iconProps} />} />
          <SideNav.Item label="Messages" icon={<ChatCircleDotsIcon {...iconProps} />} />
          <SideNav.Item label="Promotions" icon={<PercentIcon {...iconProps} />} />
          <SideNav.Item label="Analytics" icon={<ChartPieIcon {...iconProps} />} />
        </SideNav.Section>

        <SideNav.Spacer />

        <SideNav.Section>
          <SideNav.Item label="Dark mode" icon={<MoonIcon {...iconProps} />} />
          <SideNav.Item label="Help" icon={<QuestionIcon {...iconProps} />} />
          <SideNav.Item label="Settings" icon={<GearIcon {...iconProps} />} />
        </SideNav.Section>
      </SideNav>

      <div className="dashboard-main">
        <div className="dashboard-content">
          <header className="dashboard__header">
            <h1 className="dashboard__title">
              Your Sales Analysis
            </h1>
            <div className="dashboard__header-toolbar">
              <DateRangePicker
                label="Date"
                value={dateRange}
                onChange={setDateRange}
                locale="en-GB"
              />
              <FilterSelect
                value={filter}
                onValueChange={setFilter}
                options={FILTER_OPTIONS}
              />
              <Button variant="primary" size="md" iconRight={<ArrowUpRightIcon weight="bold" />}>
                Export as CSV
              </Button>
              <Avatar src={avatarSrc} alt="Account" size="md" fallback="FC" />
            </div>
          </header>

          <section className="dashboard__metrics" aria-label="Key metrics">
            <MetricCard
              title="Available to payout"
              value="$16.4K"
              detail="Payout • $6.1K will available soon"
              emphasis
            />
            <MetricCard
              title="Today revenue"
              value="$6.4K"
              detail="Payout • $6.1K will available soon"
            />
            <MetricCard
              title="Today sessions"
              value="400"
              detail="Payout • $6.1K will available soon"
            />
          </section>

          <section className="dashboard__charts" aria-label="Charts">
            <Card>
              <Card.Header>
                <SectionHeader
                  title="Sales Funnel"
                  subtitle="Total view per month"
                  actions={<ChartActions />}
                />
              </Card.Header>
              <Card.Body>
                <RoundedBarChart data={weekData} height={260} />
              </Card.Body>
            </Card>

            <Card>
              <Card.Header>
                <SectionHeader
                  title="Orders"
                  subtitle="Based on social media"
                  actions={<ChartActions />}
                />
              </Card.Header>
              <Card.Body>
                <div className="dashboard__heatmap">
                  {ordersHeatmap.map((row) => (
                    <div key={row.channel} className="dashboard__heatmap-row">
                      <p className="dashboard__heatmap-label">{row.channel}</p>
                      {row.cells.map((tone, index) => (
                        <div
                          key={`${row.channel}-${index}`}
                          className="dashboard__heatmap-cell"
                          style={{ backgroundColor: HEATMAP_TONES[tone] }}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </section>

          <Card>
            <Card.Header>
              <SectionHeader
                title="Transactions"
                subtitle="456 Total"
                actions={
                  <>
                    <ChartActions />
                    <Button
                      variant="secondary"
                      size="sm"
                      iconLeft={<MagnifyingGlassIcon weight="bold" />}
                      aria-label="Search transactions"
                    />
                  </>
                }
              />
            </Card.Header>
            <Card.Body>
              <div className="dashboard__transactions">
                {transactions.map((item) => (
                  <div key={item.name} className="dashboard__transaction-row">
                    <div>
                      <p className="m-0 font-[var(--ds-font-family-body)] text-[var(--ds-font-size-sm)] font-medium text-[var(--ds-color-foreground-text-primary)]">
                        {item.name}
                      </p>
                      <p className="m-0 mt-[var(--ds-spacing-4)] font-[var(--ds-font-family-body)] text-[var(--ds-font-size-xs)] text-[var(--ds-color-foreground-text-secondary)]">
                        {item.date}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="m-0 font-[var(--ds-font-family-body)] text-[var(--ds-font-size-sm)] font-medium text-[var(--ds-color-foreground-text-primary)]">
                        {item.amount}
                      </p>
                      <p className="m-0 mt-[var(--ds-spacing-4)] font-[var(--ds-font-family-body)] text-[var(--ds-font-size-xs)] text-[var(--ds-color-foreground-text-secondary)]">
                        {item.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

/**
 * @param {{ title: string, subtitle: string, actions?: React.ReactNode }} props
 */
function SectionHeader({ title, subtitle, actions }) {
  return (
    <div className="dashboard__section-header">
      <div>
        <h2 className="m-0 font-[var(--ds-font-family-body)] text-[var(--ds-font-size-md)] font-medium text-[var(--ds-color-foreground-text-primary)]">
          {title}
        </h2>
        <p className="m-0 mt-[var(--ds-spacing-4)] font-[var(--ds-font-family-body)] text-[var(--ds-font-size-sm)] text-[var(--ds-color-foreground-text-secondary)]">
          {subtitle}
        </p>
      </div>
      {actions ? <div className="dashboard__section-actions">{actions}</div> : null}
    </div>
  )
}

function ChartActions() {
  return (
    <>
      <Button variant="secondary" size="sm">
        Monthly
      </Button>
      <Button
        variant="secondary"
        size="sm"
        iconLeft={<SlidersHorizontalIcon weight="bold" />}
        aria-label="Filter chart"
      />
    </>
  )
}

/**
 * @param {{
 *   title: string
 *   value: string
 *   detail: string
 *   emphasis?: boolean
 * }} props
 */
function MetricCard({ title, value, detail, emphasis = false }) {
  const iconButton = (
    <Button
      variant="secondary"
      size="sm"
      iconLeft={<ArrowUpRightIcon weight="bold" />}
      aria-label={`View ${title}`}
      className={
        emphasis
          ? '!bg-[var(--ds-color-foreground-action-on-primary)] !text-[var(--ds-color-background-action-primary)] !border-[var(--ds-color-foreground-action-on-primary)]'
          : undefined
      }
    />
  )

  if (emphasis) {
    return (
      <Card className="!bg-[var(--ds-color-background-action-primary)] !border-[var(--ds-color-background-action-primary)]">
        <Card.Body>
          <div className="flex items-start justify-between gap-[var(--ds-spacing-12)]">
            <p className="m-0 font-[var(--ds-font-family-body)] text-[var(--ds-font-size-sm)] text-[var(--ds-color-foreground-action-on-primary)] opacity-80">
              {title}
            </p>
            {iconButton}
          </div>
          <p className="m-0 mt-[var(--ds-spacing-16)] font-[var(--ds-font-family-body)] text-[length:var(--ds-font-size-xl)] font-bold leading-none text-[var(--ds-color-foreground-action-on-primary)]">
            {value}
          </p>
          <p className="m-0 mt-[var(--ds-spacing-12)] font-[var(--ds-font-family-body)] text-[var(--ds-font-size-xs)] text-[var(--ds-color-foreground-action-on-primary)] opacity-70">
            {detail}
          </p>
        </Card.Body>
      </Card>
    )
  }

  return (
    <Card>
      <Card.Body>
        <div className="flex items-start justify-between gap-[var(--ds-spacing-12)]">
          <p className="m-0 font-[var(--ds-font-family-body)] text-[var(--ds-font-size-sm)] text-[var(--ds-color-foreground-text-secondary)]">
            {title}
          </p>
          {iconButton}
        </div>
        <p className="m-0 mt-[var(--ds-spacing-16)] font-[var(--ds-font-family-body)] text-[length:var(--ds-font-size-xl)] font-bold leading-none text-[var(--ds-color-foreground-text-primary)]">
          {value}
        </p>
        <p className="m-0 mt-[var(--ds-spacing-12)] font-[var(--ds-font-family-body)] text-[var(--ds-font-size-xs)] text-[var(--ds-color-foreground-text-secondary)]">
          {detail}
        </p>
      </Card.Body>
    </Card>
  )
}
