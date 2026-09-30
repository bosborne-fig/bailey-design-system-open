import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import { CalendarButton } from "../CalendarButton";
import { CalendarSelectGroup } from "../CalendarSelectGroup";

export interface CalendarProps extends HTMLAttributes<HTMLDivElement> {
  month?: string;
  year?: string;
  daysInMonth?: number;
  selectedDay?: number;
}

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  (
    {
      month = "March",
      year = "2026",
      daysInMonth = 31,
      selectedDay,
      className,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={clsx(
        "inline-flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-4",
        className,
      )}
      {...props}
    >
      <CalendarSelectGroup month={month} year={year} />
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          return (
            <CalendarButton
              key={day}
              number={day}
              state={day === selectedDay ? "active" : "default"}
            />
          );
        })}
      </div>
    </div>
  ),
);

Calendar.displayName = "Calendar";
