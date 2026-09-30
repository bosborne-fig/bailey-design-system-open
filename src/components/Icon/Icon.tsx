import { SVGAttributes, forwardRef } from "react";
import clsx from "clsx";

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  name: string;
  size?: number | string;
  title?: string;
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 16, title, className, children, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        role={title ? "img" : "presentation"}
        aria-hidden={title ? undefined : true}
        aria-label={title}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        data-icon={name}
        className={clsx("inline-block shrink-0", className)}
        {...props}
      >
        {title && <title>{title}</title>}
        {children}
      </svg>
    );
  },
);

Icon.displayName = "Icon";
