import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export type ButtonDangerVariant = "primary" | "subtle";
export type ButtonDangerSize = "medium" | "small";
export type ButtonDangerState = "default" | "hover" | "disabled";

export interface ButtonDangerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  hasIconStart?: boolean;
  hasIconEnd?: boolean;
  variant?: ButtonDangerVariant;
  size?: ButtonDangerSize;
  state?: ButtonDangerState;
}

const variantClasses: Record<ButtonDangerVariant, string> = {
  primary: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
  subtle:
    "bg-transparent text-red-700 hover:bg-red-50 focus-visible:ring-red-400",
};

const sizeClasses: Record<ButtonDangerSize, string> = {
  small: "h-8 px-3 text-sm gap-1.5",
  medium: "h-10 px-4 text-sm gap-2",
};

export const ButtonDanger = forwardRef<HTMLButtonElement, ButtonDangerProps>(
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
    return (
      <button
        ref={ref}
        disabled={disabled ?? state === "disabled"}
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

ButtonDanger.displayName = "ButtonDanger";
