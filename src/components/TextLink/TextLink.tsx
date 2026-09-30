import { AnchorHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export interface TextLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text?: string;
}

export const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(
  ({ text, className, children, href = "#", ...props }, ref) => (
    <a
      ref={ref}
      href={href}
      className={clsx(
        "text-sm text-brand-600 underline hover:text-brand-700",
        className,
      )}
      {...props}
    >
      {children ?? text}
    </a>
  ),
);

TextLink.displayName = "TextLink";
