import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export interface TextStrongProps extends HTMLAttributes<HTMLElement> {
  text?: string;
}

export const TextStrong = forwardRef<HTMLElement, TextStrongProps>(
  ({ text, className, children, ...props }, ref) => (
    <strong
      ref={ref}
      className={clsx("text-sm font-semibold text-gray-900", className)}
      {...props}
    >
      {children ?? text}
    </strong>
  ),
);

TextStrong.displayName = "TextStrong";
