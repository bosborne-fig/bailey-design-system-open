import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export interface TextEmphasisProps extends HTMLAttributes<HTMLElement> {
  text?: string;
}

export const TextEmphasis = forwardRef<HTMLElement, TextEmphasisProps>(
  ({ text, className, children, ...props }, ref) => (
    <em
      ref={ref}
      className={clsx("text-sm italic text-gray-900", className)}
      {...props}
    >
      {children ?? text}
    </em>
  ),
);

TextEmphasis.displayName = "TextEmphasis";
