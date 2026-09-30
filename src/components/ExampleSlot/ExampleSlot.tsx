import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";
import { Footer } from "../Footer";
import { Header } from "../Header";

export type ExampleSlotPlatform = "desktop" | "mobile";

export interface ExampleSlotProps extends HTMLAttributes<HTMLDivElement> {
  platform?: ExampleSlotPlatform;
  children?: ReactNode;
}

export const ExampleSlot = forwardRef<HTMLDivElement, ExampleSlotProps>(
  ({ platform = "desktop", className, children, ...props }, ref) => (
    <div ref={ref} className={clsx("flex flex-col", className)} {...props}>
      <Header platform={platform} />
      <main className="flex-1">{children}</main>
      <Footer platform={platform} />
    </div>
  ),
);

ExampleSlot.displayName = "ExampleSlot";
