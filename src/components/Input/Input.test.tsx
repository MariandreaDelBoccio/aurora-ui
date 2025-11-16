import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';

describe('Input', () => {
  describe('Rendering', () => {
    it('renders input correctly', () => {
      render(<Input placeholder="Enter text" />);
      expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    });

    it('renders with label', () => {
      render(<Input label="Username" />);
      expect(screen.getByLabelText('Username')).toBeInTheDocument();
    });

    it('renders with helper text', () => {
      render(<Input helperText="Min 3 characters" />);
      expect(screen.getByText('Min 3 characters')).toBeInTheDocument();
    });

    it('renders with error message', () => {
      render(<Input error="This field is required" />);
      expect(screen.getByText('This field is required')).toBeInTheDocument();
    });

    it('shows required indicator', () => {
      render(<Input label="Email" required />);
      expect(screen.getByText('*')).toBeInTheDocument();
    });
  });

  describe('Sizes', () => {
    it('applies small size classes', () => {
      const { container } = render(<Input size="sm" />);
      const input = container.querySelector('input');
      expect(input?.className).toContain('h-8');
    });

    it('applies medium size classes (default)', () => {
      const { container } = render(<Input size="md" />);
      const input = container.querySelector('input');
      expect(input?.className).toContain('h-10');
    });

    it('applies large size classes', () => {
      const { container } = render(<Input size="lg" />);
      const input = container.querySelector('input');
      expect(input?.className).toContain('h-12');
    });
  });

  describe('States', () => {
    it('handles disabled state', () => {
      render(<Input disabled />);
      const input = screen.getByRole('textbox');
      expect(input).toBeDisabled();
    });

    it('shows error styles when error prop is provided', () => {
      const { container } = render(<Input error="Invalid" />);
      const input = container.querySelector('input');
      expect(input?.className).toContain('border-red-500');
    });

    it('has aria-invalid when error exists', () => {
      render(<Input error="Invalid" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });
  });

  describe('Icons', () => {
    it('renders left icon', () => {
      render(<Input leftIcon={<span data-testid="left-icon">←</span>} />);
      expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    });

    it('renders right icon', () => {
      render(<Input rightIcon={<span data-testid="right-icon">→</span>} />);
      expect(screen.getByTestId('right-icon')).toBeInTheDocument();
    });

    it('applies correct padding with left icon', () => {
      const { container } = render(
        <Input leftIcon={<span>icon</span>} />
      );
      const input = container.querySelector('input');
      expect(input?.className).toContain('pl-10');
    });

    it('applies correct padding with right icon', () => {
      const { container } = render(
        <Input rightIcon={<span>icon</span>} />
      );
      const input = container.querySelector('input');
      expect(input?.className).toContain('pr-10');
    });
  });

  describe('Accessibility', () => {
    it('generates unique ID when not provided', () => {
      const { container } = render(<Input label="Test" />);
      const input = container.querySelector('input');
      const label = container.querySelector('label');
      
      expect(input?.id).toBeTruthy();
      expect(label?.htmlFor).toBe(input?.id);
    });

    it('uses provided ID', () => {
      render(<Input label="Test" id="custom-id" />);
      const input = screen.getByLabelText('Test');
      expect(input).toHaveAttribute('id', 'custom-id');
    });

    it('connects error message with aria-describedby', () => {
      render(<Input id="test-input" error="Error message" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('aria-describedby', 'test-input-error');
    });

    it('connects helper text with aria-describedby', () => {
      render(<Input id="test-input" helperText="Helper text" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('aria-describedby', 'test-input-helper');
    });

    it('error message has role="alert"', () => {
      render(<Input error="Error message" />);
      expect(screen.getByRole('alert')).toHaveTextContent('Error message');
    });

    it('label has correct for attribute', () => {
      const { container } = render(<Input label="Username" id="username" />);
      const label = container.querySelector('label');
      expect(label).toHaveAttribute('for', 'username');
    });
  });

  describe('Interactions', () => {
    it('handles onChange event', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      
      render(<Input onChange={handleChange} />);
      const input = screen.getByRole('textbox');
      
      await user.type(input, 'hello');
      
      expect(handleChange).toHaveBeenCalled();
      expect(input).toHaveValue('hello');
    });

    it('handles onFocus event', async () => {
      const handleFocus = vi.fn();
      const user = userEvent.setup();
      
      render(<Input onFocus={handleFocus} />);
      const input = screen.getByRole('textbox');
      
      await user.click(input);
      
      expect(handleFocus).toHaveBeenCalled();
    });

    it('handles onBlur event', async () => {
      const handleBlur = vi.fn();
      const user = userEvent.setup();
      
      render(<Input onBlur={handleBlur} />);
      const input = screen.getByRole('textbox');
      
      await user.click(input);
      await user.tab();
      
      expect(handleBlur).toHaveBeenCalled();
    });

    it('does not trigger onChange when disabled', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      
      render(<Input disabled onChange={handleChange} />);
      const input = screen.getByRole('textbox');
      
      await user.type(input, 'test');
      
      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('Full Width', () => {
    it('renders full width when prop is true', () => {
      const { container } = render(<Input fullWidth />);
      const wrapper = container.querySelector('div');
      expect(wrapper?.className).toContain('w-full');
    });
  });

  describe('Types', () => {
    it('renders email input', () => {
      render(<Input type="email" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('type', 'email');
    });

    it('renders password input', () => {
      const { container } = render(<Input type="password" />);
      const input = container.querySelector('input');
      expect(input).toHaveAttribute('type', 'password');
    });

    it('renders number input', () => {
      render(<Input type="number" />);
      const input = screen.getByRole('spinbutton');
      expect(input).toHaveAttribute('type', 'number');
    });
  });

  describe('Forwarding Ref', () => {
    it('forwards ref correctly', () => {
      const ref = vi.fn();
      render(<Input ref={ref} />);
      expect(ref).toHaveBeenCalledWith(expect.any(HTMLInputElement));
    });

    it('can focus input via ref', () => {
      const ref = React.createRef<HTMLInputElement>();
      render(<Input ref={ref} />);
      
      ref.current?.focus();
      
      expect(ref.current).toHaveFocus();
    });
  });
});