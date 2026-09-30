import { SelectHTMLAttributes, ReactNode, forwardRef, useId } from "react";
import clsx from "clsx";

export type SelectFieldState = "default" | "error" | "disabled";
export type SelectFieldValueType = "default" | "placeholder";

export interface SelectFieldProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "value"> {
  label?: string;
  description?: string;
  error?: string;
  value?: string;
  hasLabel?: boolean;
  hasDescription?: boolean;
  hasError?: boolean;
  open?: boolean;
  state?: SelectFieldState;
  valueType?: SelectFieldValueType;
  children?: ReactNode;
}

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
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
      id,
      children,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const isError = state === "error" || hasError;
    const isDisabled = state === "disabled";
    const shownValue = valueType === "placeholder" ? "" : value;

    return (
      <div className="w-full">
        {hasLabel && label && (
          <label
            htmlFor={inputId}
            className="mb-1 block text-sm font-medium text-gray-900"
          >
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={inputId}
          value={shownValue}
          disabled={isDisabled}
          aria-invalid={isError || undefined}
          className={clsx(
            "block w-full rounded-md border bg-white px-3 py-2 text-sm text-gray-900 shadow-sm",
            "focus:outline-none focus:ring-2",
            isError
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:border-brand-500 focus:ring-brand-500",
            "disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500",
            className,
          )}
          {...props}
        >
          {children}
        </select>
        {hasError && error ? (
          <p className="mt-1 text-xs text-red-600">{error}</p>
        ) : hasDescription && description ? (
          <p className="mt-1 text-xs text-gray-500">{description}</p>
        ) : null}
      </div>
    );
  },
);

SelectField.displayName = "SelectField";
