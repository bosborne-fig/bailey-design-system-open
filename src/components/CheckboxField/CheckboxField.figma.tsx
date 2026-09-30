import figma from "@figma/code-connect";
import { CheckboxField } from "./CheckboxField";

figma.connect(
  CheckboxField,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=9762-1441",
  {
    props: {
      label: figma.string("Label"),
      description: figma.string("Description"),
      hasDescription: figma.boolean("Has Description"),
      state: figma.enum("State", {
        Default: "default",
        Disabled: "disabled",
      }),
      valueType: figma.enum("Value Type", {
        Unchecked: "unchecked",
        Checked: "checked",
        Indeterminate: "indeterminate",
      }),
    },
    example: (props) => <CheckboxField {...props} />,
  },
);
