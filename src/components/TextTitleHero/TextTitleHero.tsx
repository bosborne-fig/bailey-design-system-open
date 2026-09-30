import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export interface TextTitleHeroProps extends HTMLAttributes<HTMLHeadingElement> {
  text?: string;
}

export const TextTitleHero = forwardRef<
  HTMLHeadingElement,
  TextTitleHeroProps
>(({ text, className, children, ...props }, ref) => (
  <h1
    ref={ref}
    className={clsx(
      "text-5xl font-bold tracking-tight text-gray-900",
      className,
    )}
    {...props}
  >
    {children ?? text}
  </h1>
));

TextTitleHero.displayName = "TextTitleHero";
