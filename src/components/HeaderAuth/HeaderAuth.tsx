import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import { Avatar } from "../Avatar";
import { Button } from "../Button";

export type HeaderAuthState = "logged-in" | "logged-out" | "logged-in-hover";

export interface HeaderAuthProps extends HTMLAttributes<HTMLDivElement> {
  state?: HeaderAuthState;
  userName?: string;
  userInitials?: string;
}

export const HeaderAuth = forwardRef<HTMLDivElement, HeaderAuthProps>(
  (
    {
      state = "logged-out",
      userName = "You",
      userInitials = "Y",
      className,
      ...props
    },
    ref,
  ) => {
    const loggedIn = state === "logged-in" || state === "logged-in-hover";
    return (
      <div
        ref={ref}
        className={clsx("flex items-center gap-3", className)}
        {...props}
      >
        {loggedIn ? (
          <button
            type="button"
            className={clsx(
              "inline-flex items-center gap-2 rounded-md px-2 py-1",
              state === "logged-in-hover" && "bg-gray-100",
            )}
          >
            <Avatar initials={userInitials} size="small" />
            <span className="text-sm text-gray-900">{userName}</span>
            <svg
              className="h-3 w-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        ) : (
          <>
            <Button label="Log in" variant="subtle" size="small" />
            <Button label="Sign up" size="small" />
          </>
        )}
      </div>
    );
  },
);

HeaderAuth.displayName = "HeaderAuth";
