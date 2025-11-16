import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
  appearance?: 'solid' | 'outline' | 'soft';
  status?: 'online' | 'offline' | 'away' | 'busy';
  dot?: boolean;
  pill?: boolean;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
    (
    {
      children,
      variant = 'default',
      size = 'md',
      appearance = 'solid',
      status,
      dot = false,
      pill = false,
      className,
      ...props
    },
    ref
  ) => {
    const variants = {
      default: {
        solid: 'bg-neutral-600 text-white',
        outline: 'border-2 border-neutral-600 text-neutral-600',
        soft: 'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300',
      },
      primary: {
        solid: 'bg-primary-600 text-white',
        outline: 'border-2 border-primary-600 text-primary-600',
        soft: 'bg-primary-100 text-primary-700 dark:bg-primary-950 dark:text-primary-300',
      },
      success: {
        solid: 'bg-green-600 text-white',
        outline: 'border-2 border-green-600 text-green-600',
        soft: 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300',
      },
      warning: {
        solid: 'bg-yellow-600 text-white',
        outline: 'border-2 border-yellow-600 text-yellow-600',
        soft: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300',
      },
      danger: {
        solid: 'bg-red-600 text-white',
        outline: 'border-2 border-red-600 text-red-600',
        soft: 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300',
      },
      info: {
        solid: 'bg-blue-600 text-white',
        outline: 'border-2 border-blue-600 text-blue-600',
        soft: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
      },
    };

    const sizes = {
      sm: 'text-xs px-2 py-0.5',
      md: 'text-sm px-2.5 py-0.5',
      lg: 'text-base px-3 py-1',
    };

    const variantDotColors = {
      default: 'bg-neutral-600',
      primary: 'bg-primary-600',
      success: 'bg-green-600',
      warning: 'bg-yellow-600',
      danger: 'bg-red-600',
      info: 'bg-blue-600',
    };

    const statusColors = {
      online: 'bg-green-500',
      offline: 'bg-neutral-400',
      away: 'bg-yellow-500',
      busy: 'bg-red-500',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center gap-1.5 font-medium',
          pill ? 'rounded-full' : 'rounded',
          variants[variant][appearance],
          sizes[size],
          className
        )}
        {...props}
      >
        {dot && (
          <span
            className={cn(
              'w-1.5 h-1.5 rounded-full',
              (status ? statusColors[status as keyof typeof statusColors] : variantDotColors[variant as keyof typeof variantDotColors])
            )}
            aria-hidden="true"
          />
        )}
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';