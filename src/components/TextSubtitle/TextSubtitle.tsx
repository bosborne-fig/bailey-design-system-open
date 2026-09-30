import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export interface TextSubtitleProps extends HTMLAttributes<HTMLParagraphElement> {
  text?: string;
}

export const TextSubtitle = forwardRef<
  HTMLParagraphElement,
  TextSubtitleProps
>(({ text, className, children, ...props }, ref) => (
  <p
    ref={ref}
    className={clsx("text-sm text-gray-600", className)}
    {...props}
  >
    {children ?? text}
  </p>
));

TextSubtitle.displayName = "TextSubtitle";
