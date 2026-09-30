import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import { AIChatbot } from "../AIChatbot";
import { Footer } from "../Footer";
import { Header } from "../Header";

export type ExampleAIChatPlatform = "desktop" | "mobile";

export interface ExampleAIChatProps extends HTMLAttributes<HTMLDivElement> {
  platform?: ExampleAIChatPlatform;
}

export const ExampleAIChat = forwardRef<HTMLDivElement, ExampleAIChatProps>(
  ({ platform = "desktop", className, ...props }, ref) => (
    <div ref={ref} className={clsx("flex flex-col", className)} {...props}>
      <Header platform={platform} />
      <main className="mx-auto w-full max-w-5xl px-6 py-10">
        <AIChatbot device={platform} />
      </main>
      <Footer platform={platform} />
    </div>
  ),
);

ExampleAIChat.displayName = "ExampleAIChat";
