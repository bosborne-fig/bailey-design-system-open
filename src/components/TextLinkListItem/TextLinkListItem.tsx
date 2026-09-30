import { LiHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export interface TextLinkListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  text?: string;
  href?: string;
}

export const TextLinkListItem = forwardRef<
  HTMLLIElement,
  TextLinkListItemProps
>(({ text, href = "#", className, children, ...props }, ref) => (
  <li ref={ref} className={clsx("text-sm", className)} {...props}>
    <a href={href} className="text-brand-600 hover:text-brand-700">
      {children ?? text}
    </a>
  </li>
));

TextLinkListItem.displayName = "TextLinkListItem";
