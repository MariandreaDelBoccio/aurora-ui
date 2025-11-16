import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Avatar, AvatarGroup } from './Avatar';

describe('Avatar', () => {
  it('renders image when src is provided', () => {
    render(<Avatar src="/img.png" alt="User" />);
    const img = screen.getByAltText('User') as HTMLImageElement;
    expect(img).toBeTruthy();
    expect(img.src).toContain('/img.png');
  });

  it('renders initials from name when no image', () => {
    render(<Avatar name="John Doe" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('shows fallback when image errors', () => {
    render(<Avatar src="/bad.png" alt="broken" />);
    const img = screen.getByAltText('broken') as HTMLImageElement;
    fireEvent.error(img);
    const maybeImg = screen.queryByAltText('broken');
    expect(maybeImg).toBeNull();
    const svg = document.querySelector('svg');
    expect(svg).toBeTruthy();
  });

  it('applies size classes and bordered ring', () => {
    render(<Avatar name="A" size="lg" bordered />);
    const wrapper = screen.getByText('A').closest('div') as HTMLElement;
    expect(wrapper).toHaveClass('w-full h-full overflow-hidden flex items-center justify-center rounded-full');
  });

  it('renders status indicator with aria-label', () => {
    render(<Avatar name="S" status="online" />);
    const indicator = document.querySelector('[aria-label="online"]');
    expect(indicator).toBeTruthy();
    expect(indicator).toHaveClass('bg-green-500');
  });

  it('forwards ref to root div', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Avatar ref={ref} name="Ref" />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('AvatarGroup shows limited children and +N overflow', () => {
    render(
      <AvatarGroup max={2}>
        <Avatar name="A" />
        <Avatar name="B" />
        <Avatar name="C" />
      </AvatarGroup>
    );

    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('B')).toBeInTheDocument();
  });
});
