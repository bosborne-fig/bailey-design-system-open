import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export type PanelImagePlatform = "desktop" | "mobile";

export interface PanelImageProps extends HTMLAttributes<HTMLElement> {
  image?: string;
  alt?: string;
  platform?: PanelImagePlatform;
}

export const PanelImage = forwardRef<HTMLElement, PanelImageProps>(
  ({ image, alt = "", platform = "desktop", className, ...props }, ref) => (
    <section
      ref={ref}
      className={clsx(
        "w-full",
        platform === "mobile" ? "px-4 py-8" : "px-6 py-16",
        className,
      )}
      {...props}
    >
      {image && (
        <img
          src={image}
          alt={alt}
          className="h-full w-full rounded-lg object-cover"
        />
      )}
    </section>
  ),
);

PanelImage.displayName = "PanelImage";
