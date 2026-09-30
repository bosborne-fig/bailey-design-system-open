import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export type TextContentTitleAlign = "start" | "center";

export interface TextContentTitleProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  hasSubtitle?: boolean;
  align?: TextContentTitleAlign;
}

export const TextContentTitle = forwardRef<
  HTMLDivElement,
  TextContentTitleProps
>(
  (
    { title, subtitle, hasSubtitle = false, align = "start", className, ...props },
    ref,
  ) => (
    <div
      ref={ref}
      className={clsx(
        "flex flex-col gap-2",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
      {...props}
    >
      {title && (
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          {title}
        </h1>
      )}
      {hasSubtitle && subtitle && (
        <p className="text-lg text-gray-600">{subtitle}</p>
      )}
    </div>
  ),
);

TextContentTitle.displayName = "TextContentTitle";
