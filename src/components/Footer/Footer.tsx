import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export type FooterPlatform = "desktop" | "mobile";

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  platform?: FooterPlatform;
  children?: ReactNode;
}

export const Footer = forwardRef<HTMLElement, FooterProps>(
  ({ title, platform = "desktop", className, children, ...props }, ref) => (
    <footer
      ref={ref}
      className={clsx(
        "flex w-full border-t border-gray-200 bg-white px-6 py-8",
        platform === "mobile"
          ? "flex-col gap-6"
          : "flex-row items-start justify-between gap-12",
        className,
      )}
      {...props}
    >
      {title && (
        <div className="text-lg font-semibold text-gray-900">{title}</div>
      )}
      <div className="flex flex-1 flex-wrap gap-8">{children}</div>
    </footer>
  ),
);

Footer.displayName = "Footer";
