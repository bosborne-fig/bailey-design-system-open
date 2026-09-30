import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export interface ProductInfoCardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  price?: string;
  description?: string;
  image?: string;
  showDescription?: boolean;
  children?: ReactNode;
}

export const ProductInfoCard = forwardRef<
  HTMLDivElement,
  ProductInfoCardProps
>(
  (
    {
      title,
      price,
      description,
      image,
      showDescription = false,
      className,
      children,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={clsx(
        "flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-4",
        className,
      )}
      {...props}
    >
      {image && (
        <img
          src={image}
          alt={title ?? ""}
          className="aspect-square w-full rounded object-cover"
        />
      )}
      <div className="flex items-start justify-between gap-2">
        {title && (
          <span className="text-sm font-medium text-gray-900">{title}</span>
        )}
        {price && (
          <span className="text-sm font-semibold text-gray-900">{price}</span>
        )}
      </div>
      {showDescription && description && (
        <p className="text-xs text-gray-600">{description}</p>
      )}
      {children}
    </div>
  ),
);

ProductInfoCard.displayName = "ProductInfoCard";
