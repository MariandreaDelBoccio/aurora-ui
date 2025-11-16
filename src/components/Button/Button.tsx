import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { VariantProps } from '../../utils/variants';

const buttonVariants = {
  variant: {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500',
    secondary: 'bg-neutral-200 text-neutral-900 hover:bg-neutral-300 focus-visible:ring-neutral-500 dark:bg-neutral-700 dark:text-neutral-100',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus-visible:ring-primary-500',
    ghost: 'text-primary-600 hover:bg-primary-50 focus-visible:ring-primary-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500',
  },
  size: {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-base',
    lg: 'h-12 px-6 text-lg',
  },
  fullWidth: {
    true: 'w-full',
    false: 'w-auto',
  },
  disabled: {
    true: 'opacity-50 cursor-not-allowed pointer-events-none',
    false: '',
  },
};

const defaultVariants = {
  variant: 'primary' as const,
  size: 'md' as const,
  fullWidth: false,
  disabled: false,
  loading: false,
};

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<Pick<typeof buttonVariants, 'variant' | 'size'>> {
  children: React.ReactNode;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = defaultVariants.variant,
      size = defaultVariants.size,
      fullWidth = defaultVariants.fullWidth,
      disabled = defaultVariants.disabled,
      loading = defaultVariants.loading,
      leftIcon,
      rightIcon,
      className,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const isDisabled = Boolean(disabled) || loading;

    const fwClass = fullWidth ? buttonVariants.fullWidth.true : buttonVariants.fullWidth.false;
    const disabledClass = isDisabled ? buttonVariants.disabled.true : buttonVariants.disabled.false;

    const baseClasses = cn(
      'inline-flex items-center justify-center gap-2',
      'rounded-aurora-md font-medium',
      'transition-all duration-200',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      buttonVariants.variant[variant],
      buttonVariants.size[size],
      fwClass,
      disabledClass,
      className
    );

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        className={baseClasses}
        aria-busy={loading}
        aria-disabled={isDisabled}
        {...props}
      >
        {loading && (
          <LoadingSpinner
            className="animate-spin"
            aria-label="Cargando"
          />
        )}
        {!loading && leftIcon && (
          <span className="inline-flex" aria-hidden="true">
            {leftIcon}
          </span>
        )}
        <span>{children}</span>
        {!loading && rightIcon && (
          <span className="inline-flex" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

const LoadingSpinner = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);