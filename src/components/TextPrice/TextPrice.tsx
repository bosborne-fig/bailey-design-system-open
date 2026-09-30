import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export type TextPriceSize = "large" | "small";

export interface TextPriceProps extends HTMLAttributes<HTMLDivElement> {
  price?: string;
  label?: string;
  currency?: string;
  hasLabel?: boolean;
  size?: TextPriceSize;
}

const priceSize: Record<TextPriceSize, string> = {
  large: "text-4xl",
  small: "text-2xl",
};

export const TextPrice = forwardRef<HTMLDivElement, TextPriceProps>(
  (
    {
      price,
      label,
      currency = "$",
      hasLabel = false,
      size = "large",
      className,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={clsx("flex items-baseline gap-1", className)}
      {...props}
    >
      <span className="text-lg text-gray-600">{currency}</span>
      <span className={clsx(priceSize[size], "font-bold text-gray-900")}>
        {price}
      </span>
      {hasLabel && label && (
        <span className="ml-1 text-sm text-gray-500">{label}</span>
      )}
    </div>
  ),
);

TextPrice.displayName = "TextPrice";
