import { Avatar } from './avatar'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Image URL',
    },
    alt: {
      control: 'text',
      description: 'Alt text for the image',
    },
    fallback: {
      control: 'text',
      description: 'Initials or short text shown when image fails to load',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Size of the avatar',
    },
  },
}

export const Playground = {
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    alt: 'Jane Doe',
    fallback: 'JD',
    size: 'md',
  },
}

export const WithImage = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Avatar src="https://i.pravatar.cc/150?img=1" alt="User 1" fallback="U1" size="sm" />
      <Avatar src="https://i.pravatar.cc/150?img=2" alt="User 2" fallback="U2" size="md" />
      <Avatar src="https://i.pravatar.cc/150?img=3" alt="User 3" fallback="U3" size="lg" />
      <Avatar src="https://i.pravatar.cc/150?img=4" alt="User 4" fallback="U4" size="xl" />
    </div>
  ),
}

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Avatar size="sm" fallback="AB" />
      <Avatar size="md" fallback="AB" />
      <Avatar size="lg" fallback="AB" />
      <Avatar size="xl" fallback="AB" />
    </div>
  ),
}

export const WithFallback = {
  name: 'Fallback (no image)',
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Avatar fallback="JD" size="sm" />
      <Avatar fallback="JD" size="md" />
      <Avatar fallback="AB" size="lg" />
      <Avatar fallback="XY" size="xl" />
    </div>
  ),
}

export const BrokenImage = {
  name: 'Loading / broken image',
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Avatar src="https://broken.url/image.jpg" fallback="BR" size="sm" alt="Broken" />
      <Avatar src="https://broken.url/image.jpg" fallback="BR" size="md" alt="Broken" />
      <Avatar src="https://broken.url/image.jpg" fallback="BR" size="lg" alt="Broken" />
      <Avatar src="https://broken.url/image.jpg" fallback="BR" size="xl" alt="Broken" />
    </div>
  ),
}

export const NoFallback = {
  name: 'No fallback text',
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Avatar src="https://broken.url/image.jpg" size="sm" alt="No fallback" />
      <Avatar src="https://broken.url/image.jpg" size="md" alt="No fallback" />
      <Avatar size="lg" alt="Empty" />
    </div>
  ),
}
