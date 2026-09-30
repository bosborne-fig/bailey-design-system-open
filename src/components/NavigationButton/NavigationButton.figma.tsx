import figma from "@figma/code-connect";
import { NavigationButton } from "./NavigationButton";

figma.connect(
  NavigationButton,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=515-5459",
  {
    props: {
      label: figma.string("Label"),
      hasIcon: figma.boolean("Has Icon"),
      hasLabel: figma.boolean("Has Label"),
      icon: figma.instance("Icon"),
      state: figma.enum("State", {
        Default: "default",
        Hover: "hover",
        Active: "active",
      }),
      direction: figma.enum("Direction", {
        Column: "column",
        Row: "row",
      }),
      type: figma.enum("Type", {
        Small: "small",
        Medium: "medium",
      }),
    },
    example: (props) => <NavigationButton {...props} />,
  },
);
