import figma from "@figma/code-connect";
import { MenuItem } from "./MenuItem";

figma.connect(
  MenuItem,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=9762-743",
  {
    props: {
      label: figma.string("Label"),
      description: figma.string("Description"),
      icon: figma.instance("Icon"),
      hasIcon: figma.boolean("Has Icon"),
      hasDescription: figma.boolean("Has Description"),
      hasShortcut: figma.boolean("Has Shortcut"),
      state: figma.enum("State", {
        Default: "default",
        Hover: "hover",
        Disabled: "disabled",
      }),
    },
    example: (props) => <MenuItem {...props} />,
  },
);
