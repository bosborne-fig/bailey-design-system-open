import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export type TagToggleState = "off" | "on";

export interface TagToggleProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  label?: string;
  icon?: ReactNode;
  showIcon?: boolean;
  state?: TagToggleState;
}

export const TagToggle = forwardRef<HTMLButtonElement, TagToggleProps>(
  (
    {
      label,
      icon,
      showIcon = false,
      state = "off",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const isOn = state === "on";
    return (
      <button
        ref={ref}
        type="button"
        aria-pressed={isOn}
        className={clsx(
          "inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium transition-colors",
          isOn
            ? "border-brand-600 bg-brand-50 text-brand-700"
            : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
          className,
        )}
        {...props}
      >
        {showIcon && icon}
        {children ?? label}
      </button>
    );
  },
);

TagToggle.displayName = "TagToggle";
