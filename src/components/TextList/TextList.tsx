import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export type TextListDensity = "default" | "tight";

export interface TextListProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  hasTitle?: boolean;
  density?: TextListDensity;
  children?: ReactNode;
}

export const TextList = forwardRef<HTMLDivElement, TextListProps>(
  (
    { title, hasTitle = false, density = "default", className, children, ...props },
    ref,
  ) => (
    <div
      ref={ref}
      className={clsx("flex flex-col", className)}
      {...props}
    >
      {hasTitle && title && (
        <span className="mb-2 text-sm font-semibold text-gray-900">
          {title}
        </span>
      )}
      <ul
        className={clsx(
          "flex list-disc flex-col pl-5",
          density === "tight" ? "gap-0.5" : "gap-1.5",
        )}
      >
        {children}
      </ul>
    </div>
  ),
);

TextList.displayName = "TextList";
