import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export type NavigationButtonState = "default" | "hover" | "active";
export type NavigationButtonDirection = "column" | "row";
export type NavigationButtonType = "small" | "medium";

export interface NavigationButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  label?: string;
  icon?: ReactNode;
  hasIcon?: boolean;
  hasLabel?: boolean;
  state?: NavigationButtonState;
  direction?: NavigationButtonDirection;
  type?: NavigationButtonType;
}

const stateClasses: Record<NavigationButtonState, string> = {
  default: "text-gray-700 bg-transparent",
  hover: "text-gray-900 bg-gray-100",
  active: "text-brand-700 bg-brand-50",
};

const directionClasses: Record<NavigationButtonDirection, string> = {
  column: "flex-col gap-1",
  row: "flex-row gap-2",
};

const typeClasses: Record<NavigationButtonType, string> = {
  small: "text-xs px-2 py-1",
  medium: "text-sm px-3 py-2",
};

export const NavigationButton = forwardRef<
  HTMLButtonElement,
  NavigationButtonProps
>(
  (
    {
      label,
      icon,
      hasIcon = true,
      hasLabel = true,
      state = "default",
      direction = "column",
      type: navType = "small",
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500",
          directionClasses[direction],
          typeClasses[navType],
          stateClasses[state],
          className,
        )}
        {...props}
      >
        {hasIcon && icon}
        {hasLabel && label && <span>{label}</span>}
      </button>
    );
  },
);

NavigationButton.displayName = "NavigationButton";
