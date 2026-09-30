import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import { FormNewsletter } from "../FormNewsletter";
import { TextContentHeading } from "../TextContentHeading";

export type PageNewsletterPlatform = "desktop" | "mobile";

export interface PageNewsletterProps extends HTMLAttributes<HTMLElement> {
  heading?: string;
  subheading?: string;
  platform?: PageNewsletterPlatform;
}

export const PageNewsletter = forwardRef<HTMLElement, PageNewsletterProps>(
  ({ heading, subheading, platform: _p, className, ...props }, ref) => (
    <section
      ref={ref}
      className={clsx(
        "mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-6 py-16 text-center",
        className,
      )}
      {...props}
    >
      {(heading || subheading) && (
        <TextContentHeading
          heading={heading}
          subheading={subheading}
          hasSubheading={!!subheading}
          align="center"
        />
      )}
      <FormNewsletter />
    </section>
  ),
);

PageNewsletter.displayName = "PageNewsletter";
