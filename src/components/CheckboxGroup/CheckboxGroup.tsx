import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export interface CheckboxGroupProps extends HTMLAttributes<HTMLDivElement> {
  legend?: string;
  children?: ReactNode;
}

export const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(
  ({ legend, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="group"
        aria-label={legend}
        className={clsx("flex flex-col gap-2", className)}
        {...props}
      >
        {legend && (
          <span className="text-sm font-medium text-gray-900">{legend}</span>
        )}
        {children}
      </div>
    );
  },
);

CheckboxGroup.displayName = "CheckboxGroup";
