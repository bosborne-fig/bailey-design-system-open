import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";
import { HeaderAuth } from "../HeaderAuth";

export type HeaderPlatform = "desktop" | "mobile";
export type HeaderState = "open" | "default";

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  brand?: ReactNode;
  nav?: ReactNode;
  auth?: ReactNode;
  platform?: HeaderPlatform;
  state?: HeaderState;
}

export const Header = forwardRef<HTMLElement, HeaderProps>(
  (
    {
      brand,
      nav,
      auth = <HeaderAuth />,
      platform = "desktop",
      state = "default",
      className,
      ...props
    },
    ref,
  ) => (
    <header
      ref={ref}
      className={clsx(
        "flex w-full items-center justify-between border-b border-gray-200 bg-white px-6 py-3",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-6">
        {brand ?? <span className="text-lg font-semibold">Bailey</span>}
        {platform === "desktop" && nav}
      </div>
      <div className="flex items-center gap-4">
        {auth}
        {platform === "mobile" && (
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={state === "open"}
            className="rounded p-1 text-gray-700"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}
      </div>
    </header>
  ),
);

Header.displayName = "Header";
