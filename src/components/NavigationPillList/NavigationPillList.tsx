import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export type NavigationPillListDirection = "row" | "column";

export interface NavigationPillListProps extends HTMLAttributes<HTMLElement> {
  direction?: NavigationPillListDirection;
  children?: ReactNode;
}

export const NavigationPillList = forwardRef<
  HTMLElement,
  NavigationPillListProps
>(({ direction = "row", className, children, ...props }, ref) => {
  return (
    <nav
      ref={ref}
      className={clsx(
        "inline-flex gap-1",
        direction === "column" ? "flex-col" : "flex-row",
        className,
      )}
      {...props}
    >
      {children}
    </nav>
  );
});

NavigationPillList.displayName = "NavigationPillList";
