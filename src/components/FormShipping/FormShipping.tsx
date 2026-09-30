import { FormHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import { Button } from "../Button";
import { ButtonGroup } from "../ButtonGroup";
import { CheckboxField } from "../CheckboxField";
import { InputField } from "../InputField";
import { SelectField } from "../SelectField";
import { TextareaField } from "../TextareaField";

export interface FormShippingProps extends FormHTMLAttributes<HTMLFormElement> {
  submitLabel?: string;
}

export const FormShipping = forwardRef<HTMLFormElement, FormShippingProps>(
  ({ submitLabel = "Continue", className, children, ...props }, ref) => (
    <form
      ref={ref}
      className={clsx("flex w-full max-w-2xl flex-col gap-4", className)}
      {...props}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <InputField label="First name" name="firstName" />
        <InputField label="Last name" name="lastName" />
      </div>
      <InputField label="Address line 1" name="address1" />
      <TextareaField label="Address notes" name="notes" hasDescription />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <InputField label="City" name="city" />
        <InputField label="ZIP" name="zip" />
        <SelectField label="Country" name="country">
          <option>United States</option>
          <option>Canada</option>
        </SelectField>
      </div>
      <CheckboxField label="Save this address for next time" name="save" />
      <ButtonGroup align="end">
        <Button label={submitLabel} type="submit" />
      </ButtonGroup>
      {children}
    </form>
  ),
);

FormShipping.displayName = "FormShipping";
