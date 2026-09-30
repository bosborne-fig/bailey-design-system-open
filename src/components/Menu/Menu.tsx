import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const Menu = forwardRef<HTMLDivElement, MenuProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="menu"
        className={clsx(
          "min-w-[180px] rounded-md border border-gray-200 bg-white p-1 shadow-md",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Menu.displayName = "Menu";
