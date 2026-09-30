import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export type AvatarType = "initial" | "image";
export type AvatarSize = "large" | "small" | "medium";
export type AvatarShape = "circle" | "square";

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  initials?: string;
  src?: string;
  alt?: string;
  type?: AvatarType;
  size?: AvatarSize;
  shape?: AvatarShape;
}

const sizeClasses: Record<AvatarSize, string> = {
  small: "h-6 w-6 text-xs",
  medium: "h-8 w-8 text-sm",
  large: "h-10 w-10 text-base",
};

const shapeClasses: Record<AvatarShape, string> = {
  circle: "rounded-full",
  square: "rounded-md",
};

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  (
    {
      initials,
      src,
      alt,
      type = "initial",
      size = "medium",
      shape = "circle",
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <span
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center overflow-hidden bg-gray-200 text-gray-700 font-medium",
          sizeClasses[size],
          shapeClasses[shape],
          className,
        )}
        {...props}
      >
        {type === "image" && src ? (
          <img
            src={src}
            alt={alt ?? initials ?? ""}
            className="h-full w-full object-cover"
          />
        ) : (
          initials
        )}
      </span>
    );
  },
);

Avatar.displayName = "Avatar";
