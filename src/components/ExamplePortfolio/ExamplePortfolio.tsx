import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import { CardGridImage } from "../CardGridImage";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { HeroBasic } from "../HeroBasic";

export type ExamplePortfolioPlatform = "desktop" | "mobile";

export interface ExamplePortfolioProps extends HTMLAttributes<HTMLDivElement> {
  platform?: ExamplePortfolioPlatform;
}

export const ExamplePortfolio = forwardRef<
  HTMLDivElement,
  ExamplePortfolioProps
>(({ platform = "desktop", className, ...props }, ref) => (
  <div ref={ref} className={clsx("flex flex-col", className)} {...props}>
    <Header platform={platform} />
    <HeroBasic
      platform={platform}
      title="Portfolio"
      subtitle="A selection of recent work."
    />
    <CardGridImage platform={platform} heading="Projects" />
    <Footer platform={platform} />
  </div>
));

ExamplePortfolio.displayName = "ExamplePortfolio";
