import { ButtonHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export type CalendarButtonState =
  | "default"
  | "hover"
  | "active"
  | "disabled"
  | "range"
  | "range-disabled"
  | "hidden";

export interface CalendarButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  number?: string | number;
  state?: CalendarButtonState;
}

const stateClasses: Record<CalendarButtonState, string> = {
  default: "text-gray-900 hover:bg-gray-100",
  hover: "bg-gray-100 text-gray-900",
  active: "bg-brand-600 text-white",
  disabled: "text-gray-300 cursor-not-allowed",
  range: "bg-brand-50 text-brand-700",
  "range-disabled": "bg-brand-50 text-brand-300",
  hidden: "invisible",
};

export const CalendarButton = forwardRef<
  HTMLButtonElement,
  CalendarButtonProps
>(({ number, state = "default", className, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    disabled={state === "disabled" || state === "range-disabled"}
    className={clsx(
      "inline-flex h-8 w-8 items-center justify-center rounded text-sm",
      stateClasses[state],
      className,
    )}
    {...props}
  >
    {number}
  </button>
));

CalendarButton.displayName = "CalendarButton";
