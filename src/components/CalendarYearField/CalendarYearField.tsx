import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export interface CalendarYearFieldProps extends HTMLAttributes<HTMLDivElement> {
  value?: string;
}

export const CalendarYearField = forwardRef<
  HTMLDivElement,
  CalendarYearFieldProps
>(({ value, className, ...props }, ref) => (
  <div ref={ref} className={clsx("flex flex-col", className)} {...props}>
    <button
      type="button"
      className="inline-flex items-center gap-1 rounded border border-gray-300 bg-white px-2 py-1 text-sm text-gray-900"
    >
      {value}
      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>
  </div>
));

CalendarYearField.displayName = "CalendarYearField";
