import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export type TextLinkListDensity = "default" | "tight";

export interface TextLinkListProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  hasTitle?: boolean;
  density?: TextLinkListDensity;
  children?: ReactNode;
}

export const TextLinkList = forwardRef<HTMLDivElement, TextLinkListProps>(
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
      <ul className={clsx("flex flex-col", density === "tight" ? "gap-1" : "gap-2")}>
        {children}
      </ul>
    </div>
  ),
);

TextLinkList.displayName = "TextLinkList";
