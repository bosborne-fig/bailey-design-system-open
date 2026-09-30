import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";
import { TextContentHeading } from "../TextContentHeading";

export type CardGridContentListPlatform = "desktop" | "mobile";

export interface CardGridContentListProps extends HTMLAttributes<HTMLElement> {
  heading?: string;
  subheading?: string;
  platform?: CardGridContentListPlatform;
  cards?: ReactNode;
}

export const CardGridContentList = forwardRef<
  HTMLElement,
  CardGridContentListProps
>(
  (
    { heading, subheading, platform = "desktop", cards, className, ...props },
    ref,
  ) => (
    <section
      ref={ref}
      className={clsx(
        "flex w-full flex-col gap-8 px-6 py-16",
        className,
      )}
      {...props}
    >
      {(heading || subheading) && (
        <TextContentHeading
          heading={heading}
          subheading={subheading}
          hasSubheading={!!subheading}
        />
      )}
      <div
        className={clsx(
          "flex w-full",
          platform === "mobile" ? "flex-col gap-4" : "flex-col gap-6",
        )}
      >
        {cards}
      </div>
    </section>
  ),
);

CardGridContentList.displayName = "CardGridContentList";
