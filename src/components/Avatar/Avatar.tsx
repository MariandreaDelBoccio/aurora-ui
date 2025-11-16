import React, { forwardRef, useState } from 'react';
import { cn } from '../../utils/cn';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  shape?: 'circle' | 'square';
  status?: 'online' | 'offline' | 'away' | 'busy';
  bordered?: boolean;
  fallback?: React.ReactNode;
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      alt,
      name,
      size = 'md',
      shape = 'circle',
      status,
      bordered = false,
      fallback,
      className,
      ...props
    },
    ref
  ) => {
    const [imageError, setImageError] = useState(false);

    const sizes = {
      xs: 'w-6 h-6 text-xs',
      sm: 'w-8 h-8 text-sm',
      md: 'w-10 h-10 text-base',
      lg: 'w-12 h-12 text-lg',
      xl: 'w-16 h-16 text-xl',
      '2xl': 'w-20 h-20 text-2xl',
    };

    const statusSizes = {
      xs: 'w-1.5 h-1.5',
      sm: 'w-2 h-2',
      md: 'w-2.5 h-2.5',
      lg: 'w-3 h-3',
      xl: 'w-3.5 h-3.5',
      '2xl': 'w-4 h-4',
    };

    const statusColors = {
      online: 'bg-green-500',
      offline: 'bg-neutral-400',
      away: 'bg-yellow-500',
      busy: 'bg-red-500',
    };

    const getInitials = (name: string) => {
      return name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
    };

    const getBackgroundColor = (name: string) => {
      const colors = [
        'bg-red-500',
        'bg-orange-500',
        'bg-amber-500',
        'bg-yellow-500',
        'bg-lime-500',
        'bg-green-500',
        'bg-emerald-500',
        'bg-teal-500',
        'bg-cyan-500',
        'bg-sky-500',
        'bg-blue-500',
        'bg-indigo-500',
        'bg-violet-500',
        'bg-purple-500',
        'bg-fuchsia-500',
        'bg-pink-500',
        'bg-rose-500',
      ];
      const index = name.charCodeAt(0) % colors.length;
      return colors[index];
    };

    const showImage = src && !imageError;
    const showInitials = !showImage && name;
    const showFallback = !showImage && !showInitials;

    return (
      <div
        ref={ref}
        className={cn(
          'relative inline-flex items-center justify-center',
          // allow overflow so status indicator and its ring can be visible outside the image
          'overflow-visible flex-shrink-0',
          sizes[size],
          shape === 'circle' ? 'rounded-full' : 'rounded-lg',
          bordered && 'ring-2 ring-white dark:ring-neutral-900 ring-offset-2',
          !showImage && 'bg-neutral-200 dark:bg-neutral-800',
          showInitials && name && getBackgroundColor(name),
          className
        )}
        {...props}
      >
        <div className={cn('w-full h-full overflow-hidden flex items-center justify-center', shape === 'circle' ? 'rounded-full' : 'rounded-lg')}>
          {/* Image */}
          {showImage && (
            <img
              src={src}
              alt={alt || name || 'Avatar'}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          )}

          {/* Initials */}
          {showInitials && (
            <span className="font-medium text-white select-none">
              {getInitials(name)}
            </span>
          )}

          {/* Fallback */}
          {showFallback && (
            <span className="text-neutral-400">
              {fallback || (
                <svg
                  className="w-2/3 h-2/3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </span>
          )}
        </div>

        {/* Status indicator */}
        {status && (
          <span
            className={cn(
              'absolute bottom-0 right-0 block rounded-full z-10',
              'ring-2 ring-white dark:ring-neutral-900',
              statusSizes[size],
              statusColors[status]
            )}
            aria-label={status}
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: number;
  size?: AvatarProps['size'];
  shape?: AvatarProps['shape'];
}

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ children, max = 5, size = 'md', shape = 'circle', className, ...props }, ref) => {
    const childrenArray = React.Children.toArray(children);
    const displayedChildren = childrenArray.slice(0, max);
    const remaining = childrenArray.length - max;

    const spacing = {
      xs: '-space-x-1',
      sm: '-space-x-1.5',
      md: '-space-x-2',
      lg: '-space-x-2.5',
      xl: '-space-x-3',
      '2xl': '-space-x-4',
    };

    return (
      <div
        ref={ref}
        className={cn('flex items-center', spacing[size], className)}
        {...props}
      >
        {displayedChildren.map((child, index) => (
          <div
            key={index}
            className="relative ring-2 ring-white dark:ring-neutral-900 rounded-full"
          >
            {React.isValidElement(child)
              ? React.cloneElement(child as React.ReactElement<AvatarProps>, {
                  size,
                  shape,
                })
              : child}
          </div>
        ))}
        
        {remaining > 0 && (
          <Avatar
            name={`+${remaining}`}
            size={size}
            shape={shape}
            className="bg-neutral-300 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 ring-2 ring-white dark:ring-neutral-900"
          />
        )}
      </div>
    );
  }
);

AvatarGroup.displayName = 'AvatarGroup';