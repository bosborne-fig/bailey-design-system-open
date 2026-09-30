import { InputHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export type SearchState = "default" | "disabled";
export type SearchValueType = "filled" | "placeholder";

export interface SearchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "value"> {
  value?: string;
  state?: SearchState;
  valueType?: SearchValueType;
  onClear?: () => void;
}

export const Search = forwardRef<HTMLInputElement, SearchProps>(
  (
    {
      value,
      state = "default",
      valueType = "placeholder",
      onClear,
      className,
      placeholder = "Search",
      ...props
    },
    ref,
  ) => {
    const isDisabled = state === "disabled";
    const shownValue = valueType === "placeholder" ? "" : value;

    return (
      <div
        className={clsx(
          "flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2",
          isDisabled && "opacity-50",
          className,
        )}
      >
        <svg
          aria-hidden
          className="h-4 w-4 text-gray-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          ref={ref}
          type="search"
          value={shownValue}
          disabled={isDisabled}
          placeholder={placeholder}
          className="flex-1 border-0 bg-transparent p-0 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0"
          {...props}
        />
        {shownValue && onClear && (
          <button
            type="button"
            aria-label="Clear search"
            onClick={onClear}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    );
  },
);

Search.displayName = "Search";
