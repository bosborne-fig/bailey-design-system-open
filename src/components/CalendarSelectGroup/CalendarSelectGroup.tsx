import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import { CalendarMonthField } from "../CalendarMonthField";
import { CalendarYearField } from "../CalendarYearField";

export interface CalendarSelectGroupProps
  extends HTMLAttributes<HTMLDivElement> {
  month?: string;
  year?: string;
}

export const CalendarSelectGroup = forwardRef<
  HTMLDivElement,
  CalendarSelectGroupProps
>(({ month, year, className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx("flex items-center gap-2", className)}
    {...props}
  >
    <CalendarMonthField value={month} />
    <CalendarYearField value={year} />
  </div>
));

CalendarSelectGroup.displayName = "CalendarSelectGroup";
