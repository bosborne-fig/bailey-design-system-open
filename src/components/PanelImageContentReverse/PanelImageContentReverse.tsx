import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export type PanelImageContentReversePlatform = "desktop" | "mobile";

export interface PanelImageContentReverseProps
  extends Omit<HTMLAttributes<HTMLElement>, "content"> {
  image?: string;
  platform?: PanelImageContentReversePlatform;
  content?: ReactNode;
}

export const PanelImageContentReverse = forwardRef<
  HTMLElement,
  PanelImageContentReverseProps
>(({ image, platform = "desktop", content, className, ...props }, ref) => (
  <section
    ref={ref}
    className={clsx(
      "grid w-full items-center gap-8 px-6 py-16",
      platform === "mobile"
        ? "grid-cols-1"
        : "grid-cols-1 md:grid-cols-2",
      className,
    )}
    {...props}
  >
    <div className="flex flex-col gap-4 md:order-1">{content}</div>
    {image && (
      <img
        src={image}
        alt=""
        className="w-full rounded-lg object-cover md:order-2"
      />
    )}
  </section>
));

PanelImageContentReverse.displayName = "PanelImageContentReverse";
