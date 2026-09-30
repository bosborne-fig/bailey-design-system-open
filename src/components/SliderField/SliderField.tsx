import { InputHTMLAttributes, forwardRef, useId } from "react";
import clsx from "clsx";

export type SliderFieldState = "default" | "disabled";

export interface SliderFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  description?: string;
  hasLabel?: boolean;
  hasDescription?: boolean;
  state?: SliderFieldState;
}

export const SliderField = forwardRef<HTMLInputElement, SliderFieldProps>(
  (
    {
      label,
      description,
      hasLabel = true,
      hasDescription = false,
      state = "default",
      className,
      id,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const isDisabled = state === "disabled";
    return (
      <div className={clsx("w-full", isDisabled && "opacity-50", className)}>
        {hasLabel && label && (
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
          type="range"
          disabled={isDisabled}
          className="w-full accent-brand-600"
          {...props}
        />
        {hasDescription && description && (
          <p className="mt-1 text-xs text-gray-500">{description}</p>
        )}
      </div>
    );
  },
);

SliderField.displayName = "SliderField";
