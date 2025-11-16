import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button/Button';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-96">
      <Card.Header>
        <h3 className="text-xl font-bold">Card Title</h3>
        <p className="text-sm text-neutral-500">Subtitle text</p>
      </Card.Header>
      <Card.Content>
        <p className="text-neutral-700 dark:text-neutral-300">
          This is the main content of the card. It can contain any content you want.
        </p>
      </Card.Content>
    </Card>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6">
      <Card variant="default" className="w-80">
        <Card.Content>
          <h4 className="font-semibold mb-2">Default</h4>
          <p className="text-sm text-neutral-600">Card with default styling</p>
        </Card.Content>
      </Card>
      
      <Card variant="outlined" className="w-80">
        <Card.Content>
          <h4 className="font-semibold mb-2">Outlined</h4>
          <p className="text-sm text-neutral-600">Card with thicker border</p>
        </Card.Content>
      </Card>
      
      <Card variant="elevated" className="w-80">
        <Card.Content>
          <h4 className="font-semibold mb-2">Elevated</h4>
          <p className="text-sm text-neutral-600">Card with shadow elevation</p>
        </Card.Content>
      </Card>
    </div>
  ),
};

export const WithDividers: Story = {
  render: () => (
    <Card className="w-96">
      <Card.Header divider>
        <h3 className="text-xl font-bold">Profile Settings</h3>
        <p className="text-sm text-neutral-500 mt-1">Manage your account</p>
      </Card.Header>
      <Card.Content>
        <div className="space-y-4">
          <div>
            <p className="font-medium mb-1">Email</p>
            <p className="text-sm text-neutral-600">john@example.com</p>
          </div>
          <div>
            <p className="font-medium mb-1">Role</p>
            <p className="text-sm text-neutral-600">Administrator</p>
          </div>
        </div>
      </Card.Content>
      <Card.Footer divider>
        <div className="flex justify-end gap-2">
          <Button variant="ghost">Cancel</Button>
          <Button>Save Changes</Button>
        </div>
      </Card.Footer>
    </Card>
  ),
};

export const Hoverable: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6">
      <Card variant="elevated" hoverable className="w-80">
        <Card.Content>
          <h4 className="font-semibold mb-2">Hoverable Card</h4>
          <p className="text-sm text-neutral-600">
            Hover over me to see the effect
          </p>
        </Card.Content>
      </Card>
      
      <Card variant="default" hoverable clickable className="w-80">
        <Card.Content>
          <h4 className="font-semibold mb-2">Clickable Card</h4>
          <p className="text-sm text-neutral-600">
            I'm also clickable with keyboard support
          </p>
        </Card.Content>
      </Card>
    </div>
  ),
};

export const ProductCard: Story = {
  render: () => (
    <Card variant="elevated" hoverable className="w-80">
      <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <Card.Content>
        <h3 className="text-lg font-bold mb-2">Premium Product</h3>
        <p className="text-sm text-neutral-600 mb-4">
          High quality product with amazing features
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary-600">$99.99</span>
          <Button size="sm">Add to Cart</Button>
        </div>
      </Card.Content>
    </Card>
  ),
};

export const UserCard: Story = {
  render: () => (
    <Card className="w-80">
      <Card.Content>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
            JD
          </div>
          <div className="flex-1">
            <h4 className="font-semibold">John Doe</h4>
            <p className="text-sm text-neutral-500">Software Engineer</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-neutral-600">
          Full-stack developer passionate about building great user experiences
        </p>
      </Card.Content>
      <Card.Footer divider>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" fullWidth>Message</Button>
          <Button size="sm" fullWidth>Follow</Button>
        </div>
      </Card.Footer>
    </Card>
  ),
};

export const StatCard: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-6">
      <Card>
        <Card.Content>
          <div className="text-sm text-neutral-500 mb-1">Total Users</div>
          <div className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">1,234</div>
          <div className="text-sm text-green-600 mt-2">↑ 12% from last month</div>
        </Card.Content>
      </Card>
      
      <Card>
        <Card.Content>
          <div className="text-sm text-neutral-500 mb-1">Revenue</div>
          <div className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">$45.2K</div>
          <div className="text-sm text-green-600 mt-2">↑ 8% from last month</div>
        </Card.Content>
      </Card>
      
      <Card>
        <Card.Content>
          <div className="text-sm text-neutral-500 mb-1">Active Now</div>
          <div className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">573</div>
          <div className="text-sm text-red-600 mt-2">↓ 3% from last hour</div>
        </Card.Content>
      </Card>
    </div>
  ),
};

export const PaddingVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <Card padding="none" className="w-80">
        <div className="p-4 bg-primary-600 text-white">
          <h4 className="font-semibold">No Padding</h4>
        </div>
        <div className="p-4">
          Custom padding control with padding="none"
        </div>
      </Card>
      
      <Card padding="sm" className="w-80">
        <h4 className="font-semibold mb-2">Small Padding</h4>
        <p className="text-sm text-neutral-600">padding="sm"</p>
      </Card>
      
      <Card padding="md" className="w-80">
        <h4 className="font-semibold mb-2">Medium Padding (default)</h4>
        <p className="text-sm text-neutral-600">padding="md"</p>
      </Card>
      
      <Card padding="lg" className="w-80">
        <h4 className="font-semibold mb-2">Large Padding</h4>
        <p className="text-sm text-neutral-600">padding="lg"</p>
      </Card>
    </div>
  ),
};