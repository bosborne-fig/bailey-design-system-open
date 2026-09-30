import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export type NotificationVariant = "message" | "alert";

export interface NotificationProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  body?: string;
  icon?: ReactNode;
  dismissible?: boolean;
  hasIcon?: boolean;
  hasButton?: boolean;
  variant?: NotificationVariant;
  onDismiss?: () => void;
  action?: ReactNode;
}

const variantClasses: Record<NotificationVariant, string> = {
  message: "border-brand-200 bg-brand-50 text-brand-900",
  alert: "border-red-200 bg-red-50 text-red-900",
};

export const Notification = forwardRef<HTMLDivElement, NotificationProps>(
  (
    {
      title,
      body,
      icon,
      dismissible = false,
      hasIcon = false,
      hasButton = false,
      variant = "message",
      onDismiss,
      action,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        role="status"
        className={clsx(
          "flex items-start gap-3 rounded-md border p-3 text-sm",
          variantClasses[variant],
          className,
        )}
        {...props}
      >
        {hasIcon && icon && <span className="mt-0.5 shrink-0">{icon}</span>}
        <div className="flex-1">
          {title && <div className="font-medium">{title}</div>}
          {body && <div className="text-sm opacity-90">{body}</div>}
        </div>
        {hasButton && action && <div className="shrink-0">{action}</div>}
        {dismissible && (
          <button
            type="button"
            aria-label="Dismiss"
            onClick={onDismiss}
            className="shrink-0 opacity-60 hover:opacity-100"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    );
  },
);

Notification.displayName = "Notification";
