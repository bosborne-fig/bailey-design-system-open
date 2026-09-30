import { LiHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export interface TextListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  text?: string;
}

export const TextListItem = forwardRef<HTMLLIElement, TextListItemProps>(
  ({ text, className, children, ...props }, ref) => (
    <li
      ref={ref}
      className={clsx("text-sm text-gray-900", className)}
      {...props}
    >
      {children ?? text}
    </li>
  ),
);

TextListItem.displayName = "TextListItem";
