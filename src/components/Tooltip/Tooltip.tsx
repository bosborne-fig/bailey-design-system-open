import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export type TooltipPlacement = "top" | "left" | "right" | "bottom";

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  body?: string;
  hasBody?: boolean;
  placement?: TooltipPlacement;
  children?: ReactNode;
}

const placementClasses: Record<TooltipPlacement, string> = {
  top: "bottom-full mb-2 left-1/2 -translate-x-1/2",
  bottom: "top-full mt-2 left-1/2 -translate-x-1/2",
  left: "right-full mr-2 top-1/2 -translate-y-1/2",
  right: "left-full ml-2 top-1/2 -translate-y-1/2",
};

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      title,
      body,
      hasBody = false,
      placement = "top",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="relative inline-flex group">
        {children}
        <div
          ref={ref}
          role="tooltip"
          className={clsx(
            "pointer-events-none absolute z-10 w-max max-w-xs rounded-md bg-gray-900 px-2 py-1 text-xs text-white opacity-0 shadow group-hover:opacity-100 transition-opacity",
            placementClasses[placement],
            className,
          )}
          {...props}
        >
          {title && <div className="font-medium">{title}</div>}
          {hasBody && body && <div className="text-gray-200">{body}</div>}
        </div>
      </div>
    );
  },
);

Tooltip.displayName = "Tooltip";
