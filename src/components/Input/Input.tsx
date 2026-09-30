import { InputHTMLAttributes, forwardRef, useId } from "react";
import clsx from "clsx";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, error, className, id, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const describedById = hint || error ? `${inputId}-desc` : undefined;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1 block text-sm font-medium text-gray-900"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedById}
          className={clsx(
            "block w-full rounded-md border bg-white px-3 py-2 text-sm text-gray-900 shadow-sm",
            "placeholder:text-gray-400",
            "focus:outline-none focus:ring-2 focus:ring-offset-0",
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:border-brand-500 focus:ring-brand-500",
            "disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500",
            className,
          )}
          {...props}
        />
        {(hint || error) && (
          <p
            id={describedById}
            className={clsx(
              "mt-1 text-xs",
              error ? "text-red-600" : "text-gray-500",
            )}
          >
            {error ?? hint}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
