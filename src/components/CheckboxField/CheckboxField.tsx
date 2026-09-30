import { InputHTMLAttributes, forwardRef, useId } from "react";
import clsx from "clsx";

export type CheckboxFieldState = "default" | "disabled";
export type CheckboxFieldValueType = "unchecked" | "checked" | "indeterminate";

export interface CheckboxFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "checked"> {
  label?: string;
  description?: string;
  hasDescription?: boolean;
  state?: CheckboxFieldState;
  valueType?: CheckboxFieldValueType;
}

export const CheckboxField = forwardRef<HTMLInputElement, CheckboxFieldProps>(
  (
    {
      label,
      description,
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
    return (
      <label
        htmlFor={inputId}
        className={clsx(
          "flex items-start gap-2 text-sm text-gray-900",
          isDisabled && "cursor-not-allowed opacity-50",
          className,
        )}
      >
        <input
          ref={(el) => {
            if (typeof ref === "function") ref(el);
            else if (ref) ref.current = el;
            if (el) el.indeterminate = valueType === "indeterminate";
          }}
          id={inputId}
          type="checkbox"
          checked={valueType === "checked"}
          readOnly
          disabled={isDisabled}
          className="mt-0.5 h-4 w-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
          {...props}
        />
        <span className="flex flex-col">
          {label && <span className="font-medium">{label}</span>}
          {hasDescription && description && (
            <span className="text-xs text-gray-500">{description}</span>
          )}
        </span>
      </label>
    );
  },
);

CheckboxField.displayName = "CheckboxField";
