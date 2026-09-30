import { FormHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import { Button } from "../Button";
import { ButtonGroup } from "../ButtonGroup";
import { InputField } from "../InputField";
import { TextareaField } from "../TextareaField";

export interface FormContactProps extends FormHTMLAttributes<HTMLFormElement> {
  submitLabel?: string;
}

export const FormContact = forwardRef<HTMLFormElement, FormContactProps>(
  ({ submitLabel = "Send message", className, children, ...props }, ref) => (
    <form
      ref={ref}
      className={clsx("flex w-full max-w-lg flex-col gap-4", className)}
      {...props}
    >
      <InputField label="Name" name="name" />
      <InputField label="Email" type="email" name="email" />
      <TextareaField label="Message" name="message" />
      <ButtonGroup align="end">
        <Button label={submitLabel} type="submit" />
      </ButtonGroup>
      {children}
    </form>
  ),
);

FormContact.displayName = "FormContact";
