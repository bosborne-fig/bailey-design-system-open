import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import { CardGridReviews } from "../CardGridReviews";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { PageNewsletter } from "../PageNewsletter";
import { PageProduct } from "../PageProduct";

export type ExampleProductDetailPagePlatform = "desktop" | "mobile";

export interface ExampleProductDetailPageProps
  extends HTMLAttributes<HTMLDivElement> {
  platform?: ExampleProductDetailPagePlatform;
}

export const ExampleProductDetailPage = forwardRef<
  HTMLDivElement,
  ExampleProductDetailPageProps
>(({ platform = "desktop", className, ...props }, ref) => (
  <div ref={ref} className={clsx("flex flex-col", className)} {...props}>
    <Header platform={platform} />
    <PageProduct platform={platform} />
    <CardGridReviews platform={platform} heading="Reviews" />
    <PageNewsletter platform={platform} heading="Get updates" />
    <Footer platform={platform} />
  </div>
));

ExampleProductDetailPage.displayName = "ExampleProductDetailPage";
