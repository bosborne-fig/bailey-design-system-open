import { ButtonHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export type TabState = "default" | "hover";
export type TabActive = "off" | "on";

export interface TabProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  label?: string;
  state?: TabState;
  active?: TabActive;
}

export const Tab = forwardRef<HTMLButtonElement, TabProps>(
  ({ label, active = "off", className, children, ...props }, ref) => {
    const isActive = active === "on";
    return (
      <button
        ref={ref}
        type="button"
        role="tab"
        aria-selected={isActive}
        className={clsx(
          "border-b-2 px-3 py-2 text-sm font-medium transition-colors",
          isActive
            ? "border-brand-600 text-brand-700"
            : "border-transparent text-gray-600 hover:text-gray-900",
          className,
        )}
        {...props}
      >
        {children ?? label}
      </button>
    );
  },
);

Tab.displayName = "Tab";
