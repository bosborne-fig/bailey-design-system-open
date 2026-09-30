import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export type TextContentHeadingAlign = "start" | "center";

export interface TextContentHeadingProps
  extends HTMLAttributes<HTMLDivElement> {
  heading?: string;
  subheading?: string;
  hasSubheading?: boolean;
  align?: TextContentHeadingAlign;
}

export const TextContentHeading = forwardRef<
  HTMLDivElement,
  TextContentHeadingProps
>(
  (
    {
      heading,
      subheading,
      hasSubheading = false,
      align = "start",
      className,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={clsx(
        "flex flex-col gap-1",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
      {...props}
    >
      {heading && (
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
          {heading}
        </h2>
      )}
      {hasSubheading && subheading && (
        <p className="text-base text-gray-600">{subheading}</p>
      )}
    </div>
  ),
);

TextContentHeading.displayName = "TextContentHeading";
