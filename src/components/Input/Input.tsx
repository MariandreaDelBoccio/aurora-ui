import React, { forwardRef, useId } from 'react';
import { cn } from '../../utils/cn';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: string;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      size = 'md',
      fullWidth = false,
      leftIcon,
      rightIcon,
      className,
      id: providedId,
      disabled,
      required,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    const helperId = `${id}-helper`;
    const errorId = `${id}-error`;

    const sizeClasses = {
      sm: 'h-8 text-sm',
      md: 'h-10 text-base',
      lg: 'h-12 text-lg',
    };

    const inputClasses = cn(
      'w-full rounded-aurora-md border bg-white dark:bg-neutral-900',
      'px-3 py-2',
      'transition-colors duration-200',
      'placeholder:text-neutral-400',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      error
        ? 'border-red-500 focus-visible:ring-red-500 text-red-900 dark:text-red-100'
        : 'border-neutral-300 focus-visible:ring-primary-500 dark:border-neutral-700',
      disabled && 'opacity-50 cursor-not-allowed bg-neutral-50 dark:bg-neutral-800',
      sizeClasses[size],
      leftIcon && 'pl-10',
      rightIcon && 'pr-10',
      className
    );

    return (
      <div className={cn('flex flex-col gap-1', fullWidth && 'w-full')}>
        {/* Label */}
        {label && (
          <label
            htmlFor={id}
            className={cn(
              'text-sm font-medium text-neutral-700 dark:text-neutral-300',
              disabled && 'opacity-50 cursor-not-allowed'
            )}
          >
            {label}
            {required && (
              <span className="text-red-500 ml-1" aria-label="obligatorio">
                *
              </span>
            )}
          </label>
        )}

        {/* Input wrapper (for icons) */}
        <div className="relative">
          {/* Left icon */}
          {leftIcon && (
            <div
              className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
              aria-hidden="true"
            >
              {leftIcon}
            </div>
          )}

          {/* Input */}
          <input
            ref={ref}
            id={id}
            disabled={disabled}
            required={required}
            className={inputClasses}
            aria-invalid={!!error}
            aria-describedby={
              error ? errorId : helperText ? helperId : undefined
            }
            {...props}
          />

          {/* Right icon */}
          {rightIcon && (
            <div
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400"
              aria-hidden="true"
            >
              {rightIcon}
            </div>
          )}
        </div>

        {/* Helper text or error */}
        {error ? (
          <p
            id={errorId}
            className="text-sm text-red-600 dark:text-red-400"
            role="alert"
          >
            {error}
          </p>
        ) : helperText ? (
          <p
            id={helperId}
            className="text-sm text-neutral-500 dark:text-neutral-400"
          >
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';