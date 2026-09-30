import figma from "@figma/code-connect";
import { Button } from "./Button";

figma.connect(
  Button,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=4185-3778",
  {
    props: {
      label: figma.string("Label"),
      hasIconStart: figma.boolean("Has Icon Start"),
      hasIconEnd: figma.boolean("Has Icon End"),
      iconStart: figma.instance("Icon Start"),
      iconEnd: figma.instance("Icon End"),
      variant: figma.enum("Variant", {
        Primary: "primary",
        Neutral: "neutral",
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
    example: (props) => <Button {...props} />,
  },
);
