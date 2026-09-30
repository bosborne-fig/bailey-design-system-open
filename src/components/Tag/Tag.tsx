import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export type TagScheme =
  | "brand"
  | "neutral"
  | "positive"
  | "danger"
  | "warning";
export type TagState = "default" | "hover";
export type TagVariant = "primary" | "secondary";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  label?: string;
  removable?: boolean;
  scheme?: TagScheme;
  state?: TagState;
  variant?: TagVariant;
  onRemove?: () => void;
}

const schemeClasses: Record<TagVariant, Record<TagScheme, string>> = {
  primary: {
    brand: "bg-brand-600 text-white",
    neutral: "bg-gray-700 text-white",
    positive: "bg-green-600 text-white",
    danger: "bg-red-600 text-white",
    warning: "bg-amber-500 text-white",
  },
  secondary: {
    brand: "bg-brand-50 text-brand-700",
    neutral: "bg-gray-100 text-gray-800",
    positive: "bg-green-50 text-green-700",
    danger: "bg-red-50 text-red-700",
    warning: "bg-amber-50 text-amber-800",
  },
};

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      label,
      removable = false,
      scheme = "neutral",
      variant = "primary",
      state,
      className,
      onRemove,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <span
        ref={ref}
        className={clsx(
          "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",
          schemeClasses[variant][scheme],
          state === "hover" && "brightness-95",
          className,
        )}
        {...props}
      >
        {children ?? label}
        {removable && (
          <button
            type="button"
            aria-label="Remove"
            onClick={onRemove}
            className="ml-0.5 opacity-70 hover:opacity-100"
          >
            <svg
              className="h-3 w-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </span>
    );
  },
);

Tag.displayName = "Tag";
