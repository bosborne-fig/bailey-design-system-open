import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export type AvatarGroupSpacing = "overlap" | "spaced";

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  spacing?: AvatarGroupSpacing;
  showOverflow?: boolean;
  number?: string | number;
  children?: ReactNode;
}

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    {
      spacing = "overlap",
      showOverflow = false,
      number,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "inline-flex items-center",
          spacing === "overlap" ? "-space-x-2" : "gap-2",
          className,
        )}
        {...props}
      >
        {children}
        {showOverflow && number != null && (
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-700 ring-2 ring-white">
            +{number}
          </span>
        )}
      </div>
    );
  },
);

AvatarGroup.displayName = "AvatarGroup";
