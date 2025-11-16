import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Content</Card>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('applies variant classes: default / outlined / elevated', () => {
    const { rerender } = render(<Card variant="default">D</Card>);
    let el = screen.getByText('D').closest('div') as HTMLElement;
    expect(el).toHaveClass('bg-white');

    rerender(<Card variant="outlined">O</Card>);
    el = screen.getByText('O').closest('div') as HTMLElement;
    expect(el).toHaveClass('border-2');

    rerender(<Card variant="elevated">E</Card>);
    el = screen.getByText('E').closest('div') as HTMLElement;
    expect(el).toHaveClass('shadow-lg');
  });

  it('applies padding classes', () => {
    const { rerender } = render(<Card padding="none">N</Card>);
    let el = screen.getByText('N').closest('div') as HTMLElement;
    expect(el).toHaveClass('p-0');

    rerender(<Card padding="sm">S</Card>);
    el = screen.getByText('S').closest('div') as HTMLElement;
    expect(el).toHaveClass('p-4');

    rerender(<Card padding="md">M</Card>);
    el = screen.getByText('M').closest('div') as HTMLElement;
    expect(el).toHaveClass('p-6');

    rerender(<Card padding="lg">L</Card>);
    el = screen.getByText('L').closest('div') as HTMLElement;
    expect(el).toHaveClass('p-8');
  });

  it('adds hoverable and clickable behaviors', () => {
    const { rerender } = render(<Card hoverable>H</Card>);
    let el = screen.getByText('H').closest('div') as HTMLElement;
    expect(el).toHaveClass('hover:shadow-xl');

    rerender(<Card clickable>Click</Card>);
    el = screen.getByText('Click').closest('div') as HTMLElement;
    expect(el).toHaveClass('cursor-pointer');
    expect(el).toHaveAttribute('role', 'button');
    expect(el).toHaveAttribute('tabindex', '0');
  });

  it('renders Header, Content and Footer subcomponents and divider behavior', () => {
    render(
      <Card>
        <Card.Header divider>Header</Card.Header>
        <Card.Content>Body</Card.Content>
        <Card.Footer divider>Footer</Card.Footer>
      </Card>
    );

    const header = screen.getByText('Header').closest('div') as HTMLElement;
    const content = screen.getByText('Body').closest('div') as HTMLElement;
    const footer = screen.getByText('Footer').closest('div') as HTMLElement;

    expect(header).toBeTruthy();
    expect(header).toHaveClass('border-b');
    expect(content).toHaveClass('card-content');
    expect(footer).toHaveClass('border-t');
  });

  it('forwards ref to the container div', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Card ref={ref}>R</Card>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current).toHaveTextContent('R');
  });
});
