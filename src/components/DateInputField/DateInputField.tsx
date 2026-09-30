import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export type DateInputFieldState = "default" | "error" | "disabled";
export type DateInputFieldValueType = "default" | "placeholder";

export interface DateInputFieldProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  description?: string;
  error?: string;
  day?: string;
  month?: string;
  year?: string;
  hasLabel?: boolean;
  hasDescription?: boolean;
  hasError?: boolean;
  state?: DateInputFieldState;
  valueType?: DateInputFieldValueType;
}

export const DateInputField = forwardRef<HTMLDivElement, DateInputFieldProps>(
  (
    {
      label,
      description,
      error,
      day,
      month,
      year,
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
    const isDisabled = state === "disabled";
    const isError = state === "error" || hasError;
    const showValues = valueType !== "placeholder";
    const cellClass = clsx(
      "w-16 rounded border px-2 py-1 text-center text-sm text-gray-900",
      isError ? "border-red-500" : "border-gray-300",
      isDisabled && "bg-gray-50 text-gray-500",
    );
    return (
      <div
        ref={ref}
        className={clsx("flex w-full flex-col gap-1", className)}
        {...props}
      >
        {hasLabel && label && (
          <span className="text-sm font-medium text-gray-900">{label}</span>
        )}
        <div className="flex items-center gap-2">
          <input aria-label="Day" placeholder="DD" defaultValue={showValues ? day : ""} disabled={isDisabled} className={cellClass} />
          <input aria-label="Month" placeholder="MM" defaultValue={showValues ? month : ""} disabled={isDisabled} className={cellClass} />
          <input aria-label="Year" placeholder="YYYY" defaultValue={showValues ? year : ""} disabled={isDisabled} className={clsx(cellClass, "w-24")} />
        </div>
        {hasError && error ? (
          <span className="text-xs text-red-600">{error}</span>
        ) : hasDescription && description ? (
          <span className="text-xs text-gray-500">{description}</span>
        ) : null}
      </div>
    );
  },
);

DateInputField.displayName = "DateInputField";
