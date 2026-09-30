import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export interface TextSubheadingProps extends HTMLAttributes<HTMLHeadingElement> {
  text?: string;
}

export const TextSubheading = forwardRef<
  HTMLHeadingElement,
  TextSubheadingProps
>(({ text, className, children, ...props }, ref) => (
  <h3
    ref={ref}
    className={clsx("text-base font-medium text-gray-900", className)}
    {...props}
  >
    {children ?? text}
  </h3>
));

TextSubheading.displayName = "TextSubheading";
