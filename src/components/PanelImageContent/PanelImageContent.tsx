import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export type PanelImageContentPlatform = "desktop" | "mobile";

export interface PanelImageContentProps
  extends Omit<HTMLAttributes<HTMLElement>, "content"> {
  image?: string;
  platform?: PanelImageContentPlatform;
  content?: ReactNode;
}

export const PanelImageContent = forwardRef<
  HTMLElement,
  PanelImageContentProps
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
    {image && (
      <img src={image} alt="" className="w-full rounded-lg object-cover" />
    )}
    <div className="flex flex-col gap-4">{content}</div>
  </section>
));

PanelImageContent.displayName = "PanelImageContent";
