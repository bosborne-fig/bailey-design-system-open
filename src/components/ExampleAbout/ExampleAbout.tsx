import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import { CardGridContentList } from "../CardGridContentList";
import { CardGridImage } from "../CardGridImage";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { HeroBasic } from "../HeroBasic";
import { PanelImageDouble } from "../PanelImageDouble";

export type ExampleAboutPlatform = "desktop" | "mobile";

export interface ExampleAboutProps extends HTMLAttributes<HTMLDivElement> {
  platform?: ExampleAboutPlatform;
}

export const ExampleAbout = forwardRef<HTMLDivElement, ExampleAboutProps>(
  ({ platform = "desktop", className, ...props }, ref) => (
    <div ref={ref} className={clsx("flex flex-col", className)} {...props}>
      <Header platform={platform} />
      <HeroBasic platform={platform} title="About us" subtitle="Our story." />
      <CardGridContentList platform={platform} heading="Our values" />
      <CardGridImage platform={platform} heading="Team" />
      <PanelImageDouble platform={platform} />
      <Footer platform={platform} />
    </div>
  ),
);

ExampleAbout.displayName = "ExampleAbout";
