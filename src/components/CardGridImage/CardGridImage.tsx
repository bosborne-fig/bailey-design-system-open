import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";
import { TextContentHeading } from "../TextContentHeading";

export type CardGridImagePlatform = "desktop" | "mobile";

export interface CardGridImageProps extends HTMLAttributes<HTMLElement> {
  heading?: string;
  subheading?: string;
  platform?: CardGridImagePlatform;
  children?: ReactNode;
}

export const CardGridImage = forwardRef<HTMLElement, CardGridImageProps>(
  (
    { heading, subheading, platform = "desktop", className, children, ...props },
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
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {children}
      </div>
    </section>
  ),
);

CardGridImage.displayName = "CardGridImage";
