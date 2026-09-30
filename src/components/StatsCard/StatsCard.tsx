import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export interface StatsCardProps extends HTMLAttributes<HTMLDivElement> {
  value?: string;
  label?: string;
  icon?: ReactNode;
}

export const StatsCard = forwardRef<HTMLDivElement, StatsCardProps>(
  ({ value, label, icon, className, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx(
        "flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4",
        className,
      )}
      {...props}
    >
      {icon && <div className="text-brand-600">{icon}</div>}
      <div className="flex flex-col">
        {value && (
          <span className="text-2xl font-semibold text-gray-900">{value}</span>
        )}
        {label && <span className="text-sm text-gray-600">{label}</span>}
      </div>
    </div>
  ),
);

StatsCard.displayName = "StatsCard";
