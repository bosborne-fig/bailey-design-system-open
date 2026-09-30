import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import { CardGridTestimonials } from "../CardGridTestimonials";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { HeroActions } from "../HeroActions";

export type ExampleHomePagePlatform = "desktop" | "mobile";

export interface ExampleHomePageProps extends HTMLAttributes<HTMLDivElement> {
  platform?: ExampleHomePagePlatform;
}

export const ExampleHomePage = forwardRef<HTMLDivElement, ExampleHomePageProps>(
  ({ platform = "desktop", className, ...props }, ref) => (
    <div ref={ref} className={clsx("flex flex-col", className)} {...props}>
      <Header platform={platform} />
      <HeroActions
        platform={platform}
        title="Welcome"
        subtitle="A short description."
      />
      <CardGridTestimonials
        platform={platform}
        heading="What people say"
      />
      <Footer platform={platform} />
    </div>
  ),
);

ExampleHomePage.displayName = "ExampleHomePage";
