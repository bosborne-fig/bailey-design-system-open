import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export interface PaginationProps extends HTMLAttributes<HTMLElement> {
  page?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  (
    { page = 1, totalPages = 1, onPageChange, className, ...props },
    ref,
  ) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    return (
      <nav
        ref={ref}
        aria-label="Pagination"
        className={clsx("flex items-center gap-1", className)}
        {...props}
      >
        <button
          type="button"
          aria-label="Previous page"
          disabled={page <= 1}
          onClick={() => onPageChange?.(page - 1)}
          className="rounded p-2 text-gray-600 hover:bg-gray-100 disabled:opacity-40"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        {pages.map((p) => (
          <button
            key={p}
            type="button"
            aria-current={p === page ? "page" : undefined}
            onClick={() => onPageChange?.(p)}
            className={clsx(
              "h-8 min-w-[2rem] rounded px-2 text-sm",
              p === page
                ? "bg-brand-600 text-white"
                : "text-gray-700 hover:bg-gray-100",
            )}
          >
            {p}
          </button>
        ))}
        <button
          type="button"
          aria-label="Next page"
          disabled={page >= totalPages}
          onClick={() => onPageChange?.(page + 1)}
          className="rounded p-2 text-gray-600 hover:bg-gray-100 disabled:opacity-40"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </nav>
    );
  },
);

Pagination.displayName = "Pagination";
