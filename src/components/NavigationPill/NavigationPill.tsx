import { ButtonHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export type NavigationPillState = "default" | "active" | "hover";

export interface NavigationPillProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  label?: string;
  state?: NavigationPillState;
}

const stateClasses: Record<NavigationPillState, string> = {
  default: "bg-transparent text-gray-700 hover:bg-gray-100",
  hover: "bg-gray-100 text-gray-900",
  active: "bg-brand-50 text-brand-700",
};

export const NavigationPill = forwardRef<
  HTMLButtonElement,
  NavigationPillProps
>(({ label, state = "default", className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      type="button"
      aria-current={state === "active" ? "page" : undefined}
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
        stateClasses[state],
        className,
      )}
      {...props}
    >
      {children ?? label}
    </button>
  );
});

NavigationPill.displayName = "NavigationPill";
