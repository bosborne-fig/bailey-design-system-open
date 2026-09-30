import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import { CardGridPricing } from "../CardGridPricing";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { HeroBasic } from "../HeroBasic";
import { PageAccordion } from "../PageAccordion";

export type ExamplePricingPlatform = "desktop" | "mobile";

export interface ExamplePricingProps extends HTMLAttributes<HTMLDivElement> {
  platform?: ExamplePricingPlatform;
}

export const ExamplePricing = forwardRef<HTMLDivElement, ExamplePricingProps>(
  ({ platform = "desktop", className, ...props }, ref) => (
    <div ref={ref} className={clsx("flex flex-col", className)} {...props}>
      <Header platform={platform} />
      <HeroBasic
        platform={platform}
        title="Pricing"
        subtitle="Pick a plan that fits your team."
      />
      <CardGridPricing platform={platform} />
      <PageAccordion platform={platform} heading="FAQ" />
      <Footer platform={platform} />
    </div>
  ),
);

ExamplePricing.displayName = "ExamplePricing";
