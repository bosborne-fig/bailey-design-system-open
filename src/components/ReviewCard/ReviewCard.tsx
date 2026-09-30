import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import { AvatarBlock } from "../AvatarBlock";

export interface ReviewCardProps extends HTMLAttributes<HTMLDivElement> {
  rating?: number;
  title?: string;
  body?: string;
  authorName?: string;
  authorTitle?: string;
  authorInitials?: string;
}

export const ReviewCard = forwardRef<HTMLDivElement, ReviewCardProps>(
  (
    {
      rating = 5,
      title,
      body,
      authorName,
      authorTitle,
      authorInitials,
      className,
      children,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={clsx(
        "flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-6",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-0.5 text-amber-500" aria-label={`${rating} out of 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill={i < rating ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      {title && (
        <h4 className="text-base font-semibold text-gray-900">{title}</h4>
      )}
      {body && <p className="text-sm text-gray-700">{body}</p>}
      {children}
      {(authorName || authorTitle) && (
        <AvatarBlock
          title={authorName}
          description={authorTitle}
          avatar={{ initials: authorInitials, size: "small" }}
        />
      )}
    </div>
  ),
);

ReviewCard.displayName = "ReviewCard";
