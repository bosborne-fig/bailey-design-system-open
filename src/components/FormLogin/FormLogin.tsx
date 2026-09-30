import { FormHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import { Button } from "../Button";
import { ButtonGroup } from "../ButtonGroup";
import { InputField } from "../InputField";
import { TextLink } from "../TextLink";

export interface FormLoginProps extends FormHTMLAttributes<HTMLFormElement> {
  submitLabel?: string;
  forgotHref?: string;
}

export const FormLogin = forwardRef<HTMLFormElement, FormLoginProps>(
  (
    { submitLabel = "Log in", forgotHref = "#", className, children, ...props },
    ref,
  ) => (
    <form
      ref={ref}
      className={clsx("flex w-full max-w-sm flex-col gap-4", className)}
      {...props}
    >
      <InputField label="Email" type="email" name="email" />
      <InputField label="Password" type="password" name="password" />
      <TextLink href={forgotHref} text="Forgot password?" />
      <ButtonGroup align="stack">
        <Button label={submitLabel} type="submit" />
      </ButtonGroup>
      {children}
    </form>
  ),
);

FormLogin.displayName = "FormLogin";
