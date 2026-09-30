import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";
import { TextHeading } from "../TextHeading";

export type CardGridReviewsPlatform = "desktop" | "mobile";

export interface CardGridReviewsProps extends HTMLAttributes<HTMLElement> {
  heading?: string;
  platform?: CardGridReviewsPlatform;
  children?: ReactNode;
}

export const CardGridReviews = forwardRef<HTMLElement, CardGridReviewsProps>(
  (
    { heading, platform = "desktop", className, children, ...props },
    ref,
  ) => (
    <section
      ref={ref}
      className={clsx("flex w-full flex-col gap-6 px-6 py-16", className)}
      {...props}
    >
      {heading && <TextHeading text={heading} />}
      <div
        className={clsx(
          "grid w-full gap-6",
          platform === "mobile"
            ? "grid-cols-1"
            : "grid-cols-1 md:grid-cols-2",
        )}
      >
        {children}
      </div>
    </section>
  ),
);

CardGridReviews.displayName = "CardGridReviews";
