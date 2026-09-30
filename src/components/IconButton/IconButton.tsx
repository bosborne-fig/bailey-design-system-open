import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export type IconButtonVariant = "primary" | "neutral" | "subtle";
export type IconButtonSize = "medium" | "small";
export type IconButtonState = "default" | "hover" | "disabled";

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  state?: IconButtonState;
  "aria-label": string;
}

const variantClasses: Record<IconButtonVariant, string> = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 focus-visible:ring-brand-500",
  neutral:
    "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 focus-visible:ring-gray-400",
  subtle:
    "bg-transparent text-gray-900 hover:bg-gray-100 focus-visible:ring-gray-400",
};

const sizeClasses: Record<IconButtonSize, string> = {
  small: "h-8 w-8",
  medium: "h-10 w-10",
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      variant = "neutral",
      size = "medium",
      state,
      disabled,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled ?? state === "disabled"}
        className={clsx(
          "inline-flex items-center justify-center rounded-md transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      >
        {icon}
      </button>
    );
  },
);

IconButton.displayName = "IconButton";
