import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { HeroNewsletter } from "../HeroNewsletter";

export type ExampleWaitlistPlatform = "desktop" | "mobile";

export interface ExampleWaitlistProps extends HTMLAttributes<HTMLDivElement> {
  platform?: ExampleWaitlistPlatform;
}

export const ExampleWaitlist = forwardRef<HTMLDivElement, ExampleWaitlistProps>(
  ({ platform = "desktop", className, ...props }, ref) => (
    <div ref={ref} className={clsx("flex flex-col", className)} {...props}>
      <Header platform={platform} />
      <HeroNewsletter
        platform={platform}
        title="Join the waitlist"
        subtitle="Be first to get access."
      />
      <Footer platform={platform} />
    </div>
  ),
);

ExampleWaitlist.displayName = "ExampleWaitlist";
