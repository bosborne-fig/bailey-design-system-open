import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  text?: string;
}

export const Text = forwardRef<HTMLSpanElement, TextProps>(
  ({ text, className, children, ...props }, ref) => (
    <span
      ref={ref}
      className={clsx("text-sm text-gray-900", className)}
      {...props}
    >
      {children ?? text}
    </span>
  ),
);

Text.displayName = "Text";
