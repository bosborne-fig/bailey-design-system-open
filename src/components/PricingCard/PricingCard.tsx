import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export type PricingCardVariant = "stroke" | "brand";
export type PricingCardDevice = "desktop" | "mobile";

export interface PricingCardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  price?: string;
  description?: string;
  features?: string[];
  action?: ReactNode;
  variant?: PricingCardVariant;
  device?: PricingCardDevice;
}

const variantClasses: Record<PricingCardVariant, string> = {
  stroke: "bg-white border border-gray-200",
  brand: "bg-brand-600 text-white",
};

export const PricingCard = forwardRef<HTMLDivElement, PricingCardProps>(
  (
    {
      title,
      price,
      description,
      features = [],
      action,
      variant = "stroke",
      device = "desktop",
      className,
      children,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={clsx(
        "flex flex-col gap-4 rounded-lg p-6",
        variantClasses[variant],
        device === "mobile" ? "w-full" : "w-72",
        className,
      )}
      {...props}
    >
      {title && <h3 className="text-lg font-semibold">{title}</h3>}
      {price && <div className="text-4xl font-bold">{price}</div>}
      {description && (
        <p className={variant === "brand" ? "text-brand-50" : "text-gray-600"}>
          {description}
        </p>
      )}
      {features.length > 0 && (
        <ul className="flex flex-col gap-2 text-sm">
          {features.map((f) => (
            <li key={f}>• {f}</li>
          ))}
        </ul>
      )}
      {children}
      {action && <div className="mt-auto">{action}</div>}
    </div>
  ),
);

PricingCard.displayName = "PricingCard";
