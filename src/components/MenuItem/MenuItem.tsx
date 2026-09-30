import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export type MenuItemState = "default" | "hover" | "disabled";

export interface MenuItemProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  description?: string;
  shortcut?: string;
  icon?: ReactNode;
  hasIcon?: boolean;
  hasDescription?: boolean;
  hasShortcut?: boolean;
  state?: MenuItemState;
}

export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
  (
    {
      label,
      description,
      shortcut,
      icon,
      hasIcon = false,
      hasDescription = false,
      hasShortcut = false,
      state = "default",
      className,
      ...props
    },
    ref,
  ) => {
    const isDisabled = state === "disabled";
    return (
      <div
        ref={ref}
        role="menuitem"
        aria-disabled={isDisabled || undefined}
        className={clsx(
          "flex cursor-pointer items-start gap-2 rounded px-2 py-1.5 text-sm",
          isDisabled
            ? "cursor-not-allowed text-gray-400"
            : "text-gray-900 hover:bg-gray-100",
          className,
        )}
        {...props}
      >
        {hasIcon && <span className="mt-0.5">{icon}</span>}
        <span className="flex flex-1 flex-col">
          {label}
          {hasDescription && description && (
            <span className="text-xs text-gray-500">{description}</span>
          )}
        </span>
        {hasShortcut && shortcut && (
          <span className="text-xs text-gray-400">{shortcut}</span>
        )}
      </div>
    );
  },
);

MenuItem.displayName = "MenuItem";
