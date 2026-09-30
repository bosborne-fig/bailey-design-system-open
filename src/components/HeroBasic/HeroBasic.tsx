import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";
import { TextContentTitle } from "../TextContentTitle";

export type HeroBasicPlatform = "desktop" | "mobile";

export interface HeroBasicProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  platform?: HeroBasicPlatform;
  children?: ReactNode;
}

export const HeroBasic = forwardRef<HTMLElement, HeroBasicProps>(
  (
    { title, subtitle, platform = "desktop", className, children, ...props },
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
      {children}
    </section>
  ),
);

HeroBasic.displayName = "HeroBasic";
