import { SideNav } from './side-nav'
import {
  Bell,
  ChartPie,
  ChatCircleDots,
  Folder,
  Gear,
  House,
  Percent,
  Question,
  SquaresFour,
  Sun,
  User,
} from '@phosphor-icons/react'

export default {
  title: 'Components/SideNav',
  component: SideNav,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

const iconProps = { size: 20, weight: 'regular' }

export const Playground = {
  render: () => (
    <div style={{ display: 'flex', height: '100vh' }}>
      <SideNav>
        <SideNav.Logo>
          <Sun {...iconProps} />
        </SideNav.Logo>

        <SideNav.Section>
          <SideNav.Item label="Home" icon={<House {...iconProps} />} />
          <SideNav.Item label="Dashboard" icon={<SquaresFour {...iconProps} />} active />
          <SideNav.Item label="Notifications" icon={<Bell {...iconProps} />} />
        </SideNav.Section>

        <SideNav.Section className="mt-[var(--ds-spacing-8)]">
          <SideNav.Item label="Profile" icon={<User {...iconProps} />} />
          <SideNav.Item label="Files" icon={<Folder {...iconProps} />} />
          <SideNav.Item label="Messages" icon={<ChatCircleDots {...iconProps} />} />
          <SideNav.Item label="Promotions" icon={<Percent {...iconProps} />} />
          <SideNav.Item label="Analytics" icon={<ChartPie {...iconProps} />} />
        </SideNav.Section>

        <SideNav.Spacer />

        <SideNav.Section>
          <SideNav.Item label="Help" icon={<Question {...iconProps} />} />
          <SideNav.Item label="Settings" icon={<Gear {...iconProps} />} />
        </SideNav.Section>
      </SideNav>

      <div
        style={{
          flex: 1,
          background: 'var(--ds-color-background-surface-page)',
        }}
      />
    </div>
  ),
}

export const WithActiveItem = {
  render: () => (
    <div style={{ display: 'flex', height: 480 }}>
      <SideNav>
        <SideNav.Section>
          <SideNav.Item label="Home" icon={<House {...iconProps} />} active />
          <SideNav.Item label="Dashboard" icon={<SquaresFour {...iconProps} />} />
        </SideNav.Section>
      </SideNav>
      <div style={{ flex: 1, background: 'var(--ds-color-background-surface-page)' }} />
    </div>
  ),
}
