import { HTMLAttributes, forwardRef, useState } from "react";
import clsx from "clsx";
import { Calendar } from "../Calendar";

export type DatePickerFieldState = "default" | "error" | "disabled";
export type DatePickerFieldValueType = "default" | "placeholder";

export interface DatePickerFieldProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  description?: string;
  error?: string;
  value?: string;
  hasLabel?: boolean;
  hasDescription?: boolean;
  hasError?: boolean;
  state?: DatePickerFieldState;
  valueType?: DatePickerFieldValueType;
}

export const DatePickerField = forwardRef<HTMLDivElement, DatePickerFieldProps>(
  (
    {
      label,
      description,
      error,
      value,
      hasLabel = true,
      hasDescription = false,
      hasError = false,
      state = "default",
      valueType = "default",
      className,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    const isDisabled = state === "disabled";
    const isError = state === "error" || hasError;
    const shown = valueType === "placeholder" ? "Pick a date" : value;
    return (
      <div
        ref={ref}
        className={clsx("relative flex w-full flex-col gap-1", className)}
        {...props}
      >
        {hasLabel && label && (
          <span className="text-sm font-medium text-gray-900">{label}</span>
        )}
        <button
          type="button"
          disabled={isDisabled}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className={clsx(
            "inline-flex items-center justify-between rounded border bg-white px-3 py-2 text-left text-sm text-gray-900",
            isError ? "border-red-500" : "border-gray-300",
            isDisabled && "bg-gray-50 text-gray-500 cursor-not-allowed",
          )}
        >
          <span>{shown}</span>
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
        </button>
        {open && !isDisabled && (
          <div className="absolute top-full z-10 mt-1">
            <Calendar />
          </div>
        )}
        {hasError && error ? (
          <span className="text-xs text-red-600">{error}</span>
        ) : hasDescription && description ? (
          <span className="text-xs text-gray-500">{description}</span>
        ) : null}
      </div>
    );
  },
);

DatePickerField.displayName = "DatePickerField";
