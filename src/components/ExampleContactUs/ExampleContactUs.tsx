import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { HeroForm } from "../HeroForm";

export type ExampleContactUsPlatform = "desktop" | "mobile";

export interface ExampleContactUsProps extends HTMLAttributes<HTMLDivElement> {
  platform?: ExampleContactUsPlatform;
}

export const ExampleContactUs = forwardRef<
  HTMLDivElement,
  ExampleContactUsProps
>(({ platform = "desktop", className, ...props }, ref) => (
  <div ref={ref} className={clsx("flex flex-col", className)} {...props}>
    <Header platform={platform} />
    <HeroForm platform={platform} title="Contact us" subtitle="We'd love to hear from you." />
    <Footer platform={platform} />
  </div>
));

ExampleContactUs.displayName = "ExampleContactUs";
