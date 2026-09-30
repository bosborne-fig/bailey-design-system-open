import figma from "@figma/code-connect";
import { Tab } from "./Tab";

figma.connect(
  Tab,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=3729-12963",
  {
    props: {
      label: figma.string("Label"),
      state: figma.enum("State", {
        Default: "default",
        Hover: "hover",
      }),
      active: figma.enum("Active", {
        Off: "off",
        On: "on",
      }),
    },
    example: (props) => <Tab {...props} />,
  },
);
