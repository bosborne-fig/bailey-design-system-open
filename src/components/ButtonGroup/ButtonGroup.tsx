import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export type ButtonGroupAlign =
  | "justify"
  | "start"
  | "end"
  | "center"
  | "stack";

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  align?: ButtonGroupAlign;
  buttonStart?: boolean;
  buttonEnd?: boolean;
  children?: ReactNode;
}

const alignClasses: Record<ButtonGroupAlign, string> = {
  justify: "flex-row justify-between",
  start: "flex-row justify-start",
  end: "flex-row justify-end",
  center: "flex-row justify-center",
  stack: "flex-col items-stretch",
};

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ align = "start", className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx("inline-flex gap-2", alignClasses[align], className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

ButtonGroup.displayName = "ButtonGroup";
