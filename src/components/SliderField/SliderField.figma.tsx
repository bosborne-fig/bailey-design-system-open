import figma from "@figma/code-connect";
import { SliderField } from "./SliderField";

figma.connect(
  SliderField,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=589-17676",
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
    },
    example: (props) => <SliderField {...props} />,
  },
);
