import figma from "@figma/code-connect";
import { SwitchField } from "./SwitchField";

figma.connect(
  SwitchField,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=9762-1902",
  {
    props: {
      label: figma.string("Label"),
      description: figma.string("Description"),
      hasLabel: figma.boolean("Has Label"),
      hasDescription: figma.boolean("Has Description"),
      state: figma.enum("State", {
        Default: "default",
        Disabled: "disabled",
      }),
      valueType: figma.enum("Value Type", {
        Unchecked: "unchecked",
        Checked: "checked",
      }),
    },
    example: (props) => <SwitchField {...props} />,
  },
);
