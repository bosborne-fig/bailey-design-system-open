import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export type ButtonVariant = "primary" | "neutral" | "subtle";
export type ButtonSize = "medium" | "small";
export type ButtonState = "default" | "hover" | "disabled";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  hasIconStart?: boolean;
  hasIconEnd?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  state?: ButtonState;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 focus-visible:ring-brand-500",
  neutral:
    "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 focus-visible:ring-gray-400",
  subtle:
    "bg-transparent text-gray-900 hover:bg-gray-100 focus-visible:ring-gray-400",
};

const sizeClasses: Record<ButtonSize, string> = {
  small: "h-8 px-3 text-sm gap-1.5",
  medium: "h-10 px-4 text-sm gap-2",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      iconStart,
      iconEnd,
      hasIconStart = false,
      hasIconEnd = false,
      variant = "primary",
      size = "medium",
      state,
      className,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled ?? state === "disabled";
    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={clsx(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      >
        {hasIconStart && iconStart}
        {children ?? label}
        {hasIconEnd && iconEnd}
      </button>
    );
  },
);

Button.displayName = "Button";
