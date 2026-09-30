import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";
import { TextContentHeading } from "../TextContentHeading";

export type PageAccordionPlatform = "desktop" | "mobile";

export interface PageAccordionProps extends HTMLAttributes<HTMLElement> {
  heading?: string;
  subheading?: string;
  platform?: PageAccordionPlatform;
  children?: ReactNode;
}

export const PageAccordion = forwardRef<HTMLElement, PageAccordionProps>(
  (
    { heading, subheading, platform: _p, className, children, ...props },
    ref,
  ) => (
    <section
      ref={ref}
      className={clsx(
        "mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-16",
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
      {children}
    </section>
  ),
);

PageAccordion.displayName = "PageAccordion";
