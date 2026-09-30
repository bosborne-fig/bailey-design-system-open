import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export interface TextCodeProps extends HTMLAttributes<HTMLElement> {
  text?: string;
}

export const TextCode = forwardRef<HTMLElement, TextCodeProps>(
  ({ text, className, children, ...props }, ref) => (
    <code
      ref={ref}
      className={clsx(
        "rounded bg-gray-100 px-1 py-0.5 font-mono text-xs text-gray-900",
        className,
      )}
      {...props}
    >
      {children ?? text}
    </code>
  ),
);

TextCode.displayName = "TextCode";
