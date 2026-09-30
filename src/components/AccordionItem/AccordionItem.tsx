import { HTMLAttributes, ReactNode, forwardRef, useState } from "react";
import clsx from "clsx";

export type AccordionItemState = "closed" | "open";

export interface AccordionItemProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title" | "content"> {
  title?: string;
  content?: ReactNode;
  state?: AccordionItemState;
  defaultOpen?: boolean;
}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ title, content, state, defaultOpen, className, ...props }, ref) => {
    const controlled = state !== undefined;
    const [internalOpen, setInternalOpen] = useState(
      defaultOpen ?? state === "open",
    );
    const isOpen = controlled ? state === "open" : internalOpen;

    return (
      <div
        ref={ref}
        className={clsx("border-b border-gray-200", className)}
        {...props}
      >
        <button
          type="button"
          onClick={() => !controlled && setInternalOpen((v) => !v)}
          aria-expanded={isOpen}
          className="flex w-full items-center justify-between py-3 text-left text-sm font-medium text-gray-900"
        >
          {title}
          <svg
            className={clsx(
              "h-4 w-4 transition-transform",
              isOpen && "rotate-180",
            )}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
        {isOpen && (
          <div className="pb-3 text-sm text-gray-700">{content}</div>
        )}
      </div>
    );
  },
);

AccordionItem.displayName = "AccordionItem";
