import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { HeroBasic } from "../HeroBasic";
import { PanelImageDouble } from "../PanelImageDouble";

export type ExampleArticlePlatform = "desktop" | "mobile";

export interface ExampleArticleProps extends HTMLAttributes<HTMLDivElement> {
  platform?: ExampleArticlePlatform;
}

export const ExampleArticle = forwardRef<HTMLDivElement, ExampleArticleProps>(
  ({ platform = "desktop", className, ...props }, ref) => (
    <div ref={ref} className={clsx("flex flex-col", className)} {...props}>
      <Header platform={platform} />
      <HeroBasic
        platform={platform}
        title="Article title"
        subtitle="By Author • March 2026"
      />
      <PanelImageDouble platform={platform} />
      <Footer platform={platform} />
    </div>
  ),
);

ExampleArticle.displayName = "ExampleArticle";
