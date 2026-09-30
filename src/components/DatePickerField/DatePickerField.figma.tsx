import figma from "@figma/code-connect";
import { DatePickerField } from "./DatePickerField";

figma.connect(
  DatePickerField,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=4300-6892",
  {
    props: {
      label: figma.string("Label"),
      description: figma.string("Description"),
      error: figma.string("Error"),
      value: figma.string("Value"),
      hasLabel: figma.boolean("Has Label"),
      hasDescription: figma.boolean("Has Description"),
      hasError: figma.boolean("Has Error"),
      state: figma.enum("State", {
        Default: "default",
        Error: "error",
        Disabled: "disabled",
      }),
      valueType: figma.enum("Value Type", {
        Default: "default",
        Placeholder: "placeholder",
      }),
    },
    example: (props) => <DatePickerField {...props} />,
  },
);
