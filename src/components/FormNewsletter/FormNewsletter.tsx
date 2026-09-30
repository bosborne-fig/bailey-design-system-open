import { FormHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import { Button } from "../Button";
import { InputField } from "../InputField";

export interface FormNewsletterProps
  extends FormHTMLAttributes<HTMLFormElement> {
  submitLabel?: string;
  placeholder?: string;
}

export const FormNewsletter = forwardRef<HTMLFormElement, FormNewsletterProps>(
  (
    {
      submitLabel = "Subscribe",
      placeholder = "you@example.com",
      className,
      children,
      ...props
    },
    ref,
  ) => (
    <form
      ref={ref}
      className={clsx("flex w-full max-w-md items-end gap-2", className)}
      {...props}
    >
      <div className="flex-1">
        <InputField
          label="Email"
          type="email"
          name="email"
          placeholder={placeholder}
        />
      </div>
      <Button label={submitLabel} type="submit" />
      {children}
    </form>
  ),
);

FormNewsletter.displayName = "FormNewsletter";
