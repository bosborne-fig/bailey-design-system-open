import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export interface TextHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  text?: string;
}

export const TextHeading = forwardRef<HTMLHeadingElement, TextHeadingProps>(
  ({ text, className, children, ...props }, ref) => (
    <h2
      ref={ref}
      className={clsx(
        "text-lg font-semibold text-gray-900 tracking-tight",
        className,
      )}
      {...props}
    >
      {children ?? text}
    </h2>
  ),
);

TextHeading.displayName = "TextHeading";
