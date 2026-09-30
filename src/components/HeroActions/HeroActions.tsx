import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";
import { Button } from "../Button";
import { ButtonGroup } from "../ButtonGroup";
import { TextContentTitle } from "../TextContentTitle";

export type HeroActionsPlatform = "desktop" | "mobile";

export interface HeroActionsProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  platform?: HeroActionsPlatform;
  actions?: ReactNode;
}

export const HeroActions = forwardRef<HTMLElement, HeroActionsProps>(
  (
    { title, subtitle, platform = "desktop", actions, className, ...props },
    ref,
  ) => (
    <section
      ref={ref}
      className={clsx(
        "flex w-full flex-col items-center gap-6 px-6",
        platform === "mobile" ? "py-12" : "py-20",
        className,
      )}
      {...props}
    >
      <TextContentTitle
        title={title}
        subtitle={subtitle}
        hasSubtitle={!!subtitle}
        align="center"
      />
      {actions ?? (
        <ButtonGroup align="center">
          <Button label="Get started" />
          <Button label="Learn more" variant="neutral" />
        </ButtonGroup>
      )}
    </section>
  ),
);

HeroActions.displayName = "HeroActions";
