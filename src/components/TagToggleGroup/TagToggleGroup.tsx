import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export interface TagToggleGroupProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const TagToggleGroup = forwardRef<HTMLDivElement, TagToggleGroupProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="group"
        className={clsx("inline-flex flex-wrap gap-1.5", className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

TagToggleGroup.displayName = "TagToggleGroup";
