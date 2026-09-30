import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export type PageProductResultsPlatform = "desktop" | "mobile";

export interface PageProductResultsProps
  extends Omit<HTMLAttributes<HTMLElement>, "results"> {
  platform?: PageProductResultsPlatform;
  filters?: ReactNode;
  results?: ReactNode;
}

export const PageProductResults = forwardRef<
  HTMLElement,
  PageProductResultsProps
>(
  (
    { platform = "desktop", filters, results, className, ...props },
    ref,
  ) => (
    <section
      ref={ref}
      className={clsx(
        "mx-auto grid w-full max-w-6xl gap-8 px-6 py-16",
        platform === "mobile"
          ? "grid-cols-1"
          : "grid-cols-1 md:grid-cols-[220px_1fr]",
        className,
      )}
      {...props}
    >
      <aside className="flex flex-col gap-4">{filters}</aside>
      <div>{results}</div>
    </section>
  ),
);

PageProductResults.displayName = "PageProductResults";
