import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export type PageProductPlatform = "desktop" | "mobile";

export interface PageProductProps extends HTMLAttributes<HTMLElement> {
  platform?: PageProductPlatform;
  gallery?: ReactNode;
  details?: ReactNode;
}

export const PageProduct = forwardRef<HTMLElement, PageProductProps>(
  ({ platform = "desktop", gallery, details, className, ...props }, ref) => (
    <section
      ref={ref}
      className={clsx(
        "mx-auto grid w-full max-w-6xl gap-10 px-6 py-16",
        platform === "mobile"
          ? "grid-cols-1"
          : "grid-cols-1 md:grid-cols-2",
        className,
      )}
      {...props}
    >
      <div>{gallery}</div>
      <div className="flex flex-col gap-6">{details}</div>
    </section>
  ),
);

PageProduct.displayName = "PageProduct";
