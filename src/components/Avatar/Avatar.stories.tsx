import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarGroup } from './Avatar';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'John Doe',
  },
};

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'User avatar',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar name="JD" size="xs" />
      <Avatar name="JD" size="sm" />
      <Avatar name="JD" size="md" />
      <Avatar name="JD" size="lg" />
      <Avatar name="JD" size="xl" />
      <Avatar name="JD" size="2xl" />
    </div>
  ),
};

export const WithStatus: Story = {
  render: () => (
    <div className="flex gap-6">
      <Avatar 
        src="https://i.pravatar.cc/150?img=2" 
        status="online"
      />
      <Avatar 
        src="https://i.pravatar.cc/150?img=3" 
        status="away"
      />
      <Avatar 
        src="https://i.pravatar.cc/150?img=4" 
        status="busy"
      />
      <Avatar 
        src="https://i.pravatar.cc/150?img=5" 
        status="offline"
      />
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div className="flex gap-4">
      <Avatar name="John Doe" shape="circle" size="lg" />
      <Avatar name="Jane Smith" shape="square" size="lg" />
      <Avatar 
        src="https://i.pravatar.cc/150?img=6" 
        shape="circle" 
        size="lg"
      />
      <Avatar 
        src="https://i.pravatar.cc/150?img=7" 
        shape="square" 
        size="lg"
      />
    </div>
  ),
};

export const Bordered: Story = {
  render: () => (
    <div className="flex gap-4 bg-neutral-100 dark:bg-neutral-900 p-8 rounded-lg">
      <Avatar 
        src="https://i.pravatar.cc/150?img=8" 
        bordered 
        size="lg"
      />
      <Avatar 
        name="John Doe" 
        bordered 
        size="lg"
      />
      <Avatar 
        src="https://i.pravatar.cc/150?img=9" 
        bordered 
        status="online"
        size="lg"
      />
    </div>
  ),
};

export const WithInitials: Story = {
  render: () => (
    <div className="flex gap-4">
      <Avatar name="John Doe" size="lg" />
      <Avatar name="Jane Smith" size="lg" />
      <Avatar name="Bob Johnson" size="lg" />
      <Avatar name="Alice Williams" size="lg" />
      <Avatar name="Charlie Brown" size="lg" />
    </div>
  ),
};

export const Fallback: Story = {
  render: () => (
    <div className="flex gap-4">
      <Avatar size="lg" />
      <Avatar 
        size="lg" 
        fallback={
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
          </svg>
        }
      />
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-neutral-600 mb-2">Default group</p>
        <AvatarGroup>
          <Avatar src="https://i.pravatar.cc/150?img=10" />
          <Avatar src="https://i.pravatar.cc/150?img=11" />
          <Avatar src="https://i.pravatar.cc/150?img=12" />
          <Avatar name="John Doe" />
          <Avatar name="Jane Smith" />
        </AvatarGroup>
      </div>
      
      <div>
        <p className="text-sm text-neutral-600 mb-2">Large group with max</p>
        <AvatarGroup max={4} size="lg">
          <Avatar src="https://i.pravatar.cc/150?img=13" />
          <Avatar src="https://i.pravatar.cc/150?img=14" />
          <Avatar src="https://i.pravatar.cc/150?img=15" />
          <Avatar name="Alice" />
          <Avatar name="Bob" />
          <Avatar name="Charlie" />
          <Avatar name="David" />
          <Avatar name="Eve" />
        </AvatarGroup>
      </div>
      
      <div>
        <p className="text-sm text-neutral-600 mb-2">Small group</p>
        <AvatarGroup size="sm">
          <Avatar name="A" />
          <Avatar name="B" />
          <Avatar name="C" />
          <Avatar name="D" />
        </AvatarGroup>
      </div>
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <div className="w-80 bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-3 mb-4">
        <Avatar 
          src="https://i.pravatar.cc/150?img=16" 
          status="online"
          size="lg"
        />
        <div>
          <h4 className="font-semibold">Sarah Connor</h4>
          <p className="text-sm text-neutral-500">Product Designer</p>
        </div>
      </div>
      
      <p className="text-sm text-neutral-600 mb-4">
        Passionate about creating intuitive and beautiful user experiences.
      </p>
      
      <div className="flex gap-2">
        <button className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700">
          Follow
        </button>
        <button className="flex-1 px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-50 dark:hover:bg-neutral-800">
          Message
        </button>
      </div>
    </div>
  ),
};

export const InList: Story = {
  render: () => (
    <div className="w-96 bg-white dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 border-b border-neutral-200 dark:border-neutral-800">
        <h3 className="font-semibold">Team Members</h3>
      </div>
      
      <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
        {[
          { name: 'John Doe', role: 'Admin', status: 'online' as const, img: 17 },
          { name: 'Jane Smith', role: 'Editor', status: 'away' as const, img: 18 },
          { name: 'Bob Johnson', role: 'Viewer', status: 'offline' as const, img: 19 },
          { name: 'Alice Williams', role: 'Editor', status: 'online' as const, img: 20 },
        ].map((user) => (
          <div key={user.name} className="flex items-center gap-3 p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800 cursor-pointer">
            <Avatar 
              src={`https://i.pravatar.cc/150?img=${user.img}`}
              status={user.status}
            />
            <div className="flex-1">
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-neutral-500">{user.role}</p>
            </div>
            <button className="text-sm text-primary-600 hover:text-primary-700">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const WithStatusLarge: Story = {
  render: () => (
    <div className="flex gap-8">
      <div className="text-center">
        <Avatar 
          src="https://i.pravatar.cc/300?img=21"
          status="online"
          size="2xl"
          bordered
        />
        <p className="mt-2 font-medium">Online</p>
      </div>
      
      <div className="text-center">
        <Avatar 
          src="https://i.pravatar.cc/300?img=22"
          status="away"
          size="2xl"
          bordered
        />
        <p className="mt-2 font-medium">Away</p>
      </div>
      
      <div className="text-center">
        <Avatar 
          src="https://i.pravatar.cc/300?img=23"
          status="busy"
          size="2xl"
          bordered
        />
        <p className="mt-2 font-medium">Busy</p>
      </div>
    </div>
  ),
};