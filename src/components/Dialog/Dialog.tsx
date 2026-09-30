import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export type DialogType = "card" | "sheet";

export interface DialogProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  onDismiss?: () => void;
  dismissible?: boolean;
  heading?: string;
  body?: string;
  type?: DialogType;
  footer?: ReactNode;
  children?: ReactNode;
}

export const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  (
    {
      open = false,
      onDismiss,
      dismissible = true,
      heading,
      body,
      type = "card",
      footer,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    if (!open) return null;
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
        onClick={dismissible ? onDismiss : undefined}
      >
        <div
          ref={ref}
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
          className={clsx(
            "relative bg-white shadow-lg",
            type === "card"
              ? "w-full max-w-md rounded-lg p-6"
              : "w-full max-w-lg rounded-t-lg self-end p-6",
            className,
          )}
          {...props}
        >
          {dismissible && (
            <button
              type="button"
              aria-label="Close"
              onClick={onDismiss}
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
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
          {heading && (
            <h2 className="mb-2 text-lg font-semibold text-gray-900">
              {heading}
            </h2>
          )}
          {body && <p className="text-sm text-gray-700">{body}</p>}
          {children}
          {footer && <div className="mt-4 flex justify-end gap-2">{footer}</div>}
        </div>
      </div>
    );
  },
);

Dialog.displayName = "Dialog";
