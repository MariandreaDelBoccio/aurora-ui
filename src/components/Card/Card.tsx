import React, { forwardRef } from "react";
import { cn } from "../../utils/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outlined" | "elevated";
  padding?: "none" | "sm" | "md" | "lg";
  hoverable?: boolean;
  clickable?: boolean;
}

type CardComponent = React.ForwardRefExoticComponent<
  CardProps & React.RefAttributes<HTMLDivElement>
> & {
  Header: React.ForwardRefExoticComponent<
    CardHeaderProps & React.RefAttributes<HTMLDivElement>
  >;
  Content: React.ForwardRefExoticComponent<
    CardContentProps & React.RefAttributes<HTMLDivElement>
  >;
  Footer: React.ForwardRefExoticComponent<
    CardFooterProps & React.RefAttributes<HTMLDivElement>
  >;
};

const CardInner = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = "default",
      padding = "md",
      hoverable = false,
      clickable = false,
      className,
      ...props
    },
    ref
  ) => {
    const variants = {
      default:
        "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800",
      outlined:
        "bg-transparent border-2 border-neutral-300 dark:border-neutral-700",
      elevated:
        "bg-white dark:bg-neutral-900 shadow-lg border border-neutral-200 dark:border-neutral-800",
    };

    const paddings = {
      none: "p-0",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg overflow-hidden transition-all duration-200",
          variants[variant],
          paddings[padding],
          hoverable &&
            "hover:shadow-xl hover:scale-[1.02] hover:border-primary-200 dark:hover:border-primary-800",
          clickable && "cursor-pointer active:scale-[0.98]",
          className
        )}
        role={clickable ? "button" : undefined}
        tabIndex={clickable ? 0 : undefined}
        {...props}
      >
        {children}
      </div>
    );
  }
);

const Card = CardInner as unknown as CardComponent;
Card.displayName = "Card";

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  divider?: boolean;
}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, divider = false, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "card-header",
          divider &&
            "border-b border-neutral-200 dark:border-neutral-800 pb-4 mb-4",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardHeader.displayName = "Card.Header";

export interface CardContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("card-content", className)} {...props}>
        {children}
      </div>
    );
  }
);

CardContent.displayName = "Card.Content";

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  divider?: boolean;
}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, divider = false, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "card-footer",
          divider &&
            "border-t border-neutral-200 dark:border-neutral-800 pt-4 mt-4",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = "Card.Footer";

// Attach subcomponents
Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

export { Card };
