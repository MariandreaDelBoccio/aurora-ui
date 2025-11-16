import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('applies solid appearance classes for variant', () => {
    render(
      <Badge variant="primary" appearance="solid">P</Badge>
    );

    const el = screen.getByText('P').closest('span') as HTMLElement;
    expect(el).toBeTruthy();
    expect(el).toHaveClass('bg-primary-600');
    expect(el).toHaveClass('text-white');
  });

  it('applies outline appearance classes for variant', () => {
    render(
      <Badge variant="success" appearance="outline">O</Badge>
    );

    const el = screen.getByText('O').closest('span') as HTMLElement;
    expect(el).toHaveClass('border-2');
    expect(el).toHaveClass('text-green-600');
  });

  it('applies soft appearance classes for variant', () => {
    render(
      <Badge variant="info" appearance="soft">S</Badge>
    );

    const el = screen.getByText('S').closest('span') as HTMLElement;
    expect(el).toHaveClass('bg-blue-100');
    expect(el).toHaveClass('text-blue-700');
  });

  it('applies size classes', () => {
    const { rerender } = render(<Badge size="sm">small</Badge>);
    let el = screen.getByText('small').closest('span') as HTMLElement;
    expect(el).toHaveClass('text-xs');

    rerender(<Badge size="md">medium</Badge>);
    el = screen.getByText('medium').closest('span') as HTMLElement;
    expect(el).toHaveClass('text-sm');

    rerender(<Badge size="lg">large</Badge>);
    el = screen.getByText('large').closest('span') as HTMLElement;
    expect(el).toHaveClass('text-base');
  });

  it('renders dot with correct color for variant', () => {
    render(
      <Badge variant="danger" dot>Offline</Badge>
    );

    const badge = screen.getByText('Offline').closest('span') as HTMLElement;
    const dot = badge?.querySelector('span');
    expect(dot).toBeTruthy();
    expect(dot).toHaveClass('w-1.5');
    expect(dot).toHaveClass('h-1.5');
    expect(dot).toHaveClass('rounded-full');
    expect(dot).toHaveClass('bg-red-600');
  });

  it('applies pill styles when `pill` prop is true', () => {
    render(<Badge pill>5</Badge>);
    const el = screen.getByText('5').closest('span') as HTMLElement;
    expect(el).toHaveClass('rounded-full');
  });

  it('forwards ref to the span element', () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(<Badge ref={ref}>R</Badge>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    expect(ref.current).toHaveTextContent('R');
  });

  it('passes through className and aria attributes', () => {
    render(
      <Badge className="custom-class" aria-label="status">X</Badge>
    );

    const el = screen.getByText('X').closest('span') as HTMLElement;
    expect(el).toHaveClass('custom-class');
    expect(screen.getByLabelText('status')).toBeInTheDocument();
  });

  it('works with user interactions (no-op but consistent API)', async () => {
    const user = userEvent.setup();
    render(<Badge>Click</Badge>);
    const el = screen.getByText('Click');
    await user.hover(el);
    expect(el).toBeInTheDocument();
  });
});
