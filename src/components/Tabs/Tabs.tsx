import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="tablist"
        className={clsx(
          "flex items-center gap-2 border-b border-gray-200",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Tabs.displayName = "Tabs";
