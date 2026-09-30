import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx("divide-y divide-gray-200", className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Accordion.displayName = "Accordion";
