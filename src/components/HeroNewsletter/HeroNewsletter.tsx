import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import { FormNewsletter } from "../FormNewsletter";
import { TextContentTitle } from "../TextContentTitle";

export type HeroNewsletterPlatform = "desktop" | "mobile";

export interface HeroNewsletterProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  platform?: HeroNewsletterPlatform;
}

export const HeroNewsletter = forwardRef<HTMLElement, HeroNewsletterProps>(
  (
    { title, subtitle, platform = "desktop", className, ...props },
    ref,
  ) => (
    <section
      ref={ref}
      className={clsx(
        "flex w-full flex-col items-center gap-6 px-6",
        platform === "mobile" ? "py-12" : "py-20",
        className,
      )}
      {...props}
    >
      <TextContentTitle
        title={title}
        subtitle={subtitle}
        hasSubtitle={!!subtitle}
        align="center"
      />
      <FormNewsletter />
    </section>
  ),
);

HeroNewsletter.displayName = "HeroNewsletter";
