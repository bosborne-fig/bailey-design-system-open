import { HTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export type AIChatbotDevice = "desktop" | "mobile";

export interface AIChatbotProps extends HTMLAttributes<HTMLDivElement> {
  device?: AIChatbotDevice;
  sidebar?: ReactNode;
  conversation?: ReactNode;
  input?: ReactNode;
}

export const AIChatbot = forwardRef<HTMLDivElement, AIChatbotProps>(
  (
    { device = "desktop", sidebar, conversation, input, className, ...props },
    ref,
  ) => (
    <div
      ref={ref}
      className={clsx(
        "flex w-full overflow-hidden rounded-lg border border-gray-200 bg-white",
        device === "mobile" ? "flex-col h-[70vh]" : "flex-row h-[80vh]",
        className,
      )}
      {...props}
    >
      {device === "desktop" && sidebar && (
        <aside className="w-64 border-r border-gray-200 bg-gray-50">
          {sidebar}
        </aside>
      )}
      <div className="flex flex-1 flex-col">
        <div className="flex-1 overflow-y-auto p-4">{conversation}</div>
        <div className="border-t border-gray-200 p-4">{input}</div>
      </div>
    </div>
  ),
);

AIChatbot.displayName = "AIChatbot";
