import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { PageProductResults } from "../PageProductResults";

export type ExampleShopPlatform = "desktop" | "mobile";

export interface ExampleShopProps extends HTMLAttributes<HTMLDivElement> {
  platform?: ExampleShopPlatform;
}

export const ExampleShop = forwardRef<HTMLDivElement, ExampleShopProps>(
  ({ platform = "desktop", className, ...props }, ref) => (
    <div ref={ref} className={clsx("flex flex-col", className)} {...props}>
      <Header platform={platform} />
      <PageProductResults platform={platform} />
      <Footer platform={platform} />
    </div>
  ),
);

ExampleShop.displayName = "ExampleShop";
