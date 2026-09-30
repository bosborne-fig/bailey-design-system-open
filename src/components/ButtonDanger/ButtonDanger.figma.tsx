import figma from "@figma/code-connect";
import { ButtonDanger } from "./ButtonDanger";

figma.connect(
  ButtonDanger,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=185-852",
  {
    props: {
      label: figma.string("Label"),
      hasIconStart: figma.boolean("Has Icon Start"),
      hasIconEnd: figma.boolean("Has Icon End"),
      iconStart: figma.instance("Icon Start"),
      iconEnd: figma.instance("Icon End"),
      variant: figma.enum("Variant", {
        Primary: "primary",
        Subtle: "subtle",
      }),
      state: figma.enum("State", {
        Default: "default",
        Hover: "hover",
        Disabled: "disabled",
      }),
      size: figma.enum("Size", {
        Medium: "medium",
        Small: "small",
      }),
    },
    example: (props) => <ButtonDanger {...props} />,
  },
);
