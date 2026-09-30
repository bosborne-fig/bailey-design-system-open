import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import { FormContact } from "../FormContact";
import { TextContentTitle } from "../TextContentTitle";

export type HeroFormPlatform = "desktop" | "mobile";

export interface HeroFormProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  platform?: HeroFormPlatform;
}

export const HeroForm = forwardRef<HTMLElement, HeroFormProps>(
  ({ title, subtitle, platform = "desktop", className, ...props }, ref) => (
    <section
      ref={ref}
      className={clsx(
        "grid w-full grid-cols-1 items-center gap-8 px-6 py-16",
        platform === "desktop" && "md:grid-cols-2 md:py-24",
        className,
      )}
      {...props}
    >
      <TextContentTitle
        title={title}
        subtitle={subtitle}
        hasSubtitle={!!subtitle}
      />
      <FormContact />
    </section>
  ),
);

HeroForm.displayName = "HeroForm";
