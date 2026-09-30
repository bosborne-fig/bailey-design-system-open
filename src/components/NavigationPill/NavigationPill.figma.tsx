import figma from "@figma/code-connect";
import { NavigationPill } from "./NavigationPill";

figma.connect(
  NavigationPill,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=7768-19970",
  {
    props: {
      label: figma.string("Label"),
      state: figma.enum("State", {
        Default: "default",
        Active: "active",
        Hover: "hover",
      }),
    },
    example: (props) => <NavigationPill {...props} />,
  },
);
