import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import { CardGridIcon } from "../CardGridIcon";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { HeroImage } from "../HeroImage";
import { PanelImageDouble } from "../PanelImageDouble";

export type ExampleLandingPagePlatform = "desktop" | "mobile";

export interface ExampleLandingPageProps
  extends HTMLAttributes<HTMLDivElement> {
  platform?: ExampleLandingPagePlatform;
}

export const ExampleLandingPage = forwardRef<
  HTMLDivElement,
  ExampleLandingPageProps
>(({ platform = "desktop", className, ...props }, ref) => (
  <div ref={ref} className={clsx("flex flex-col", className)} {...props}>
    <Header platform={platform} />
    <HeroImage
      platform={platform}
      title="Build faster"
      subtitle="A modern toolkit for teams."
    />
    <CardGridIcon platform={platform} heading="Features" />
    <PanelImageDouble platform={platform} />
    <Footer platform={platform} />
  </div>
));

ExampleLandingPage.displayName = "ExampleLandingPage";
