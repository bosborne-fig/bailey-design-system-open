import figma from "@figma/code-connect";
import { IconButton } from "./IconButton";

figma.connect(
  IconButton,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=11-11508",
  {
    props: {
      icon: figma.instance("Icon"),
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
    example: (props) => <IconButton aria-label="Action" {...props} />,
  },
);
