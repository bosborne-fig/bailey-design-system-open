import { FormHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import { Button } from "../Button";
import { ButtonGroup } from "../ButtonGroup";
import { CheckboxField } from "../CheckboxField";
import { InputField } from "../InputField";

export interface FormRegisterProps extends FormHTMLAttributes<HTMLFormElement> {
  submitLabel?: string;
}

export const FormRegister = forwardRef<HTMLFormElement, FormRegisterProps>(
  ({ submitLabel = "Create account", className, children, ...props }, ref) => (
    <form
      ref={ref}
      className={clsx("flex w-full max-w-sm flex-col gap-4", className)}
      {...props}
    >
      <InputField label="Full name" name="name" />
      <InputField label="Email" type="email" name="email" />
      <InputField label="Password" type="password" name="password" />
      <CheckboxField label="I agree to the terms of service" name="agree" />
      <ButtonGroup align="stack">
        <Button label={submitLabel} type="submit" />
      </ButtonGroup>
      {children}
    </form>
  ),
);

FormRegister.displayName = "FormRegister";
