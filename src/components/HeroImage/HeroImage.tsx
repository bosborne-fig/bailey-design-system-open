import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";
import { Button } from "../Button";
import { ButtonGroup } from "../ButtonGroup";
import { TextContentTitle } from "../TextContentTitle";

export type HeroImagePlatform = "desktop" | "mobile";

export interface HeroImageProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  image?: string;
  platform?: HeroImagePlatform;
  actions?: ReactNode;
}

export const HeroImage = forwardRef<HTMLElement, HeroImageProps>(
  (
    {
      title,
      subtitle,
      image,
      platform = "desktop",
      actions,
      className,
      ...props
    },
    ref,
  ) => (
    <section
      ref={ref}
      className={clsx(
        "grid w-full grid-cols-1 items-center gap-8 px-6 py-16",
        platform === "desktop" && "md:grid-cols-2 md:py-24",
        className,
      )}
      {...props}
    >
      <div className="flex flex-col gap-6">
        <TextContentTitle
          title={title}
          subtitle={subtitle}
          hasSubtitle={!!subtitle}
        />
        {actions ?? (
          <ButtonGroup>
            <Button label="Get started" />
            <Button label="Learn more" variant="neutral" />
          </ButtonGroup>
        )}
      </div>
      {image && (
        <img
          src={image}
          alt=""
          className="w-full rounded-lg object-cover"
        />
      )}
    </section>
  ),
);

HeroImage.displayName = "HeroImage";
