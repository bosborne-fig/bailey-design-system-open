import figma from "@figma/code-connect";
import { TagToggle } from "./TagToggle";

figma.connect(
  TagToggle,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=157-10316",
  {
    props: {
      label: figma.string("Label"),
      icon: figma.instance("Icon"),
      showIcon: figma.boolean("Show Icon"),
      state: figma.enum("State", {
        Off: "off",
        On: "on",
      }),
    },
    example: (props) => <TagToggle {...props} />,
  },
);
