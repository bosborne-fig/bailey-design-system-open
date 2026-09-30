import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import { Avatar, AvatarProps } from "../Avatar";

export interface AvatarBlockProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  avatar?: AvatarProps;
}

export const AvatarBlock = forwardRef<HTMLDivElement, AvatarBlockProps>(
  ({ title, description, avatar, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx("flex items-center gap-3", className)}
        {...props}
      >
        <Avatar {...avatar} />
        <div className="flex flex-col">
          {title && (
            <span className="text-sm font-medium text-gray-900">{title}</span>
          )}
          {description && (
            <span className="text-xs text-gray-500">{description}</span>
          )}
        </div>
      </div>
    );
  },
);

AvatarBlock.displayName = "AvatarBlock";
