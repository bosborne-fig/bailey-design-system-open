import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export interface TextSmallProps extends HTMLAttributes<HTMLSpanElement> {
  text?: string;
}

export const TextSmall = forwardRef<HTMLSpanElement, TextSmallProps>(
  ({ text, className, children, ...props }, ref) => (
    <span
      ref={ref}
      className={clsx("text-xs text-gray-700", className)}
      {...props}
    >
      {children ?? text}
    </span>
  ),
);

TextSmall.displayName = "TextSmall";
