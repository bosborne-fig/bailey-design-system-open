import { InputHTMLAttributes, forwardRef, useId } from "react";
import clsx from "clsx";

export type SwitchFieldState = "default" | "disabled";
export type SwitchFieldValueType = "unchecked" | "checked";

export interface SwitchFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "checked"> {
  label?: string;
  description?: string;
  hasLabel?: boolean;
  hasDescription?: boolean;
  state?: SwitchFieldState;
  valueType?: SwitchFieldValueType;
}

export const SwitchField = forwardRef<HTMLInputElement, SwitchFieldProps>(
  (
    {
      label,
      description,
      hasLabel = true,
      hasDescription = false,
      state = "default",
      valueType = "unchecked",
      className,
      id,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const isDisabled = state === "disabled";
    const isOn = valueType === "checked";
    return (
      <label
        htmlFor={inputId}
        className={clsx(
          "flex items-start gap-3 text-sm text-gray-900",
          isDisabled && "cursor-not-allowed opacity-50",
          className,
        )}
      >
        <span
          className={clsx(
            "relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors",
            isOn ? "bg-brand-600" : "bg-gray-300",
          )}
        >
          <input
            ref={ref}
            id={inputId}
            type="checkbox"
            role="switch"
            checked={isOn}
            readOnly
            disabled={isDisabled}
            className="peer sr-only"
            {...props}
          />
          <span
            className={clsx(
              "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
              isOn ? "translate-x-4" : "translate-x-0.5",
            )}
          />
        </span>
        {(hasLabel || hasDescription) && (
          <span className="flex flex-col">
            {hasLabel && label && <span className="font-medium">{label}</span>}
            {hasDescription && description && (
              <span className="text-xs text-gray-500">{description}</span>
            )}
          </span>
        )}
      </label>
    );
  },
);

SwitchField.displayName = "SwitchField";
