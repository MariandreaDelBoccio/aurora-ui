import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
};

export const AllStyles: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <Badge variant="primary" appearance="solid">Solid</Badge>
        <Badge variant="success" appearance="solid">Solid</Badge>
        <Badge variant="danger" appearance="solid">Solid</Badge>
      </div>
      
      <div className="flex flex-wrap gap-3">
        <Badge variant="primary" appearance="outline">Outline</Badge>
        <Badge variant="success" appearance="outline">Outline</Badge>
        <Badge variant="danger" appearance="outline">Outline</Badge>
      </div>
      
      <div className="flex flex-wrap gap-3">
        <Badge variant="primary" appearance="soft">Soft</Badge>
        <Badge variant="success" appearance="soft">Soft</Badge>
        <Badge variant="danger" appearance="soft">Soft</Badge>
      </div>
    </div>
  ),
};

export const WithDot: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="success" status="away" dot>Active</Badge>
      <Badge variant="warning" status="online" dot>Pending</Badge>
      <Badge variant="danger" status="online" dot>Offline</Badge>
      <Badge variant="info" status="busy" dot>In Progress</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

export const Pills: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="primary" pill>5</Badge>
      <Badge variant="success" pill>12</Badge>
      <Badge variant="danger" pill>99+</Badge>
      <Badge variant="info" pill>New</Badge>
    </div>
  ),
};

export const StatusIndicators: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-sm">Server Status:</span>
        <Badge variant="success" dot appearance="soft">Online</Badge>
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-sm">Deployment:</span>
        <Badge variant="warning" dot appearance="soft">In Progress</Badge>
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-sm">Database:</span>
        <Badge variant="danger" dot appearance="soft">Offline</Badge>
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-sm">API:</span>
        <Badge variant="info" dot appearance="soft">Maintenance</Badge>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="success">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        Verified
      </Badge>
      
      <Badge variant="warning">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        Warning
      </Badge>
      
      <Badge variant="info">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        Info
      </Badge>
    </div>
  ),
};

export const NotificationBadges: Story = {
  render: () => (
    <div className="flex gap-6">
      <button className="relative p-2 hover:bg-neutral-100 rounded-lg">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <Badge 
          variant="danger" 
          pill 
          size="sm"
          className="absolute -top-1 -right-1"
        >
          5
        </Badge>
      </button>
      
      <button className="relative p-2 hover:bg-neutral-100 rounded-lg">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <Badge 
          variant="primary" 
          pill 
          size="sm"
          className="absolute -top-1 -right-1"
        >
          12
        </Badge>
      </button>
      
      <button className="relative p-2 hover:bg-neutral-100 rounded-lg">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <Badge 
          variant="success" 
          pill 
          size="sm"
          className="absolute -top-1 -right-1"
        >
          99+
        </Badge>
      </button>
    </div>
  ),
};

export const InTable: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">User</th>
            <th className="text-left p-2">Status</th>
            <th className="text-left p-2">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-2">John Doe</td>
            <td className="p-2">
              <Badge variant="success" dot appearance="soft">Active</Badge>
            </td>
            <td className="p-2">
              <Badge variant="primary" appearance="soft">Admin</Badge>
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-2">Jane Smith</td>
            <td className="p-2">
              <Badge variant="warning" dot appearance="soft">Away</Badge>
            </td>
            <td className="p-2">
              <Badge variant="info" appearance="soft">Editor</Badge>
            </td>
          </tr>
          <tr>
            <td className="p-2">Bob Johnson</td>
            <td className="p-2">
              <Badge variant="danger" dot appearance="soft">Offline</Badge>
            </td>
            <td className="p-2">
              <Badge variant="default" appearance="soft">User</Badge>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
};