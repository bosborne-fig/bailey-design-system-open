import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export type PanelImageDoublePlatform = "desktop" | "mobile";

export interface PanelImageDoubleProps extends HTMLAttributes<HTMLElement> {
  imageLeft?: string;
  imageRight?: string;
  platform?: PanelImageDoublePlatform;
}

export const PanelImageDouble = forwardRef<HTMLElement, PanelImageDoubleProps>(
  ({ imageLeft, imageRight, platform = "desktop", className, ...props }, ref) => (
    <section
      ref={ref}
      className={clsx(
        "grid w-full gap-4 px-6 py-16",
        platform === "mobile" ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2",
        className,
      )}
      {...props}
    >
      {imageLeft && (
        <img src={imageLeft} alt="" className="w-full rounded-lg object-cover" />
      )}
      {imageRight && (
        <img src={imageRight} alt="" className="w-full rounded-lg object-cover" />
      )}
    </section>
  ),
);

PanelImageDouble.displayName = "PanelImageDouble";
