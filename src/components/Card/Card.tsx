import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export type CardVariant = "stroke" | "default";
export type CardDirection = "horizontal" | "vertical";
export type CardAssetType = "icon" | "image";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  heading?: string;
  body?: string;
  icon?: ReactNode;
  image?: string;
  asset?: boolean;
  button?: boolean;
  assetType?: CardAssetType;
  variant?: CardVariant;
  direction?: CardDirection;
  actions?: ReactNode;
}

const variantClasses: Record<CardVariant, string> = {
  default: "bg-white shadow-sm",
  stroke: "bg-white border border-gray-200",
};

const directionClasses: Record<CardDirection, string> = {
  vertical: "flex-col",
  horizontal: "flex-row items-center",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      heading,
      body,
      icon,
      image,
      asset = false,
      button = false,
      assetType = "icon",
      variant = "default",
      direction = "vertical",
      actions,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "flex overflow-hidden rounded-lg p-4 gap-4",
          variantClasses[variant],
          directionClasses[direction],
          className,
        )}
        {...props}
      >
        {asset && (
          <div className="shrink-0">
            {assetType === "image" && image ? (
              <img
                src={image}
                alt=""
                className="h-24 w-24 rounded object-cover"
              />
            ) : (
              icon
            )}
          </div>
        )}
        <div className="flex flex-1 flex-col gap-2">
          {heading && (
            <h3 className="text-base font-semibold text-gray-900">{heading}</h3>
          )}
          {body && <p className="text-sm text-gray-600">{body}</p>}
          {children}
          {button && actions && <div className="mt-2">{actions}</div>}
        </div>
      </div>
    );
  },
);

Card.displayName = "Card";
