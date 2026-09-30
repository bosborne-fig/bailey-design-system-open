import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export interface RadioGroupProps extends HTMLAttributes<HTMLDivElement> {
  legend?: string;
  name?: string;
  children?: ReactNode;
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ legend, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="radiogroup"
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

RadioGroup.displayName = "RadioGroup";
