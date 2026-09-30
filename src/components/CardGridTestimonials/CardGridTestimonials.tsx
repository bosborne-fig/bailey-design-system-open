import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";
import { TextContentHeading } from "../TextContentHeading";

export type CardGridTestimonialsPlatform = "desktop" | "mobile";

export interface CardGridTestimonialsProps extends HTMLAttributes<HTMLElement> {
  heading?: string;
  subheading?: string;
  platform?: CardGridTestimonialsPlatform;
  cards?: ReactNode;
}

export const CardGridTestimonials = forwardRef<
  HTMLElement,
  CardGridTestimonialsProps
>(
  (
    { heading, subheading, platform = "desktop", cards, className, ...props },
    ref,
  ) => (
    <section
      ref={ref}
      className={clsx(
        "flex w-full flex-col items-center gap-8 px-6 py-16",
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
      <div
        className={clsx(
          "grid w-full gap-6",
          platform === "mobile"
            ? "grid-cols-1"
            : "grid-cols-1 md:grid-cols-3",
        )}
      >
        {cards}
      </div>
    </section>
  ),
);

CardGridTestimonials.displayName = "CardGridTestimonials";
