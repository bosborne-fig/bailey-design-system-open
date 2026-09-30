import figma from "@figma/code-connect";
import { DateInputField } from "./DateInputField";

figma.connect(
  DateInputField,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=4302-7505",
  {
    props: {
      label: figma.string("Label"),
      description: figma.string("Description"),
      error: figma.string("Error"),
      day: figma.string("Day"),
      month: figma.string("Month"),
      year: figma.string("Year"),
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
    example: (props) => <DateInputField {...props} />,
  },
);
