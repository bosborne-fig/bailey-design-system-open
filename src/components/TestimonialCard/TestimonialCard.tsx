import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import { AvatarBlock } from "../AvatarBlock";

export interface TestimonialCardProps extends HTMLAttributes<HTMLDivElement> {
  quote?: string;
  authorName?: string;
  authorTitle?: string;
  authorInitials?: string;
}

export const TestimonialCard = forwardRef<
  HTMLDivElement,
  TestimonialCardProps
>(
  (
    { quote, authorName, authorTitle, authorInitials, className, children, ...props },
    ref,
  ) => (
    <div
      ref={ref}
      className={clsx(
        "flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-6",
        className,
      )}
      {...props}
    >
      {quote && (
        <blockquote className="text-base leading-relaxed text-gray-900">
          “{quote}”
        </blockquote>
      )}
      {children}
      {(authorName || authorTitle) && (
        <AvatarBlock
          title={authorName}
          description={authorTitle}
          avatar={{ initials: authorInitials }}
        />
      )}
    </div>
  ),
);

TestimonialCard.displayName = "TestimonialCard";
