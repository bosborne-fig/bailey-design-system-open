import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export interface TextTitlePageProps extends HTMLAttributes<HTMLHeadingElement> {
  text?: string;
}

export const TextTitlePage = forwardRef<
  HTMLHeadingElement,
  TextTitlePageProps
>(({ text, className, children, ...props }, ref) => (
  <h1
    ref={ref}
    className={clsx(
      "text-3xl font-semibold tracking-tight text-gray-900",
      className,
    )}
    {...props}
  >
    {children ?? text}
  </h1>
));

TextTitlePage.displayName = "TextTitlePage";
