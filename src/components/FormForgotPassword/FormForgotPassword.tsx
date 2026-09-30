import { FormHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import { Button } from "../Button";
import { ButtonGroup } from "../ButtonGroup";
import { InputField } from "../InputField";

export interface FormForgotPasswordProps
  extends FormHTMLAttributes<HTMLFormElement> {
  submitLabel?: string;
}

export const FormForgotPassword = forwardRef<
  HTMLFormElement,
  FormForgotPasswordProps
>(
  ({ submitLabel = "Reset password", className, children, ...props }, ref) => (
    <form
      ref={ref}
      className={clsx("flex w-full max-w-sm flex-col gap-4", className)}
      {...props}
    >
      <InputField label="Email" type="email" name="email" />
      <ButtonGroup align="stack">
        <Button label={submitLabel} type="submit" />
      </ButtonGroup>
      {children}
    </form>
  ),
);

FormForgotPassword.displayName = "FormForgotPassword";
