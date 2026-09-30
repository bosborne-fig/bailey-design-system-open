import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export type HeroSlotPlatform = "desktop" | "mobile";

export interface HeroSlotProps extends HTMLAttributes<HTMLElement> {
  platform?: HeroSlotPlatform;
  children?: ReactNode;
}

export const HeroSlot = forwardRef<HTMLElement, HeroSlotProps>(
  ({ platform = "desktop", className, children, ...props }, ref) => (
    <section
      ref={ref}
      className={clsx(
        "flex w-full flex-col items-center gap-6 px-6",
        platform === "mobile" ? "py-12" : "py-20",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  ),
);

HeroSlot.displayName = "HeroSlot";
