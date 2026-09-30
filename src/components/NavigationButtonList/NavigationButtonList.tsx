import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export type NavigationButtonListDirection = "row" | "column";

export interface NavigationButtonListProps
  extends HTMLAttributes<HTMLElement> {
  direction?: NavigationButtonListDirection;
  children?: ReactNode;
}

export const NavigationButtonList = forwardRef<
  HTMLElement,
  NavigationButtonListProps
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

NavigationButtonList.displayName = "NavigationButtonList";
