import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export type CardGridPricingPlatform = "desktop" | "mobile";

export interface CardGridPricingProps extends HTMLAttributes<HTMLElement> {
  platform?: CardGridPricingPlatform;
  tabs?: ReactNode;
  cards?: ReactNode;
}

export const CardGridPricing = forwardRef<HTMLElement, CardGridPricingProps>(
  (
    { platform = "desktop", tabs, cards, className, ...props },
    ref,
  ) => (
    <section
      ref={ref}
      className={clsx(
        "flex w-full flex-col items-center gap-8 px-6 py-16",
        className,
      )}
      {...props}
    >
      {tabs}
      <div
        className={clsx(
          "grid w-full gap-6",
          platform === "mobile"
            ? "grid-cols-1"
            : "grid-cols-1 md:grid-cols-3",
        )}
      >
        {cards}
      </div>
    </section>
  ),
);

CardGridPricing.displayName = "CardGridPricing";
