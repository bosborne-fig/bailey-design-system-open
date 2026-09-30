import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export interface CalendarMonthFieldProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  value?: string;
  hasLabel?: boolean;
  open?: boolean;
}

export const CalendarMonthField = forwardRef<
  HTMLDivElement,
  CalendarMonthFieldProps
>(({ label, value, hasLabel = false, open = false, className, ...props }, ref) => (
  <div ref={ref} className={clsx("flex flex-col gap-1", className)} {...props}>
    {hasLabel && label && (
      <span className="text-xs text-gray-600">{label}</span>
    )}
    <button
      type="button"
      aria-expanded={open}
      className="inline-flex items-center gap-1 rounded border border-gray-300 bg-white px-2 py-1 text-sm text-gray-900"
    >
      {value}
      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>
  </div>
));

CalendarMonthField.displayName = "CalendarMonthField";
