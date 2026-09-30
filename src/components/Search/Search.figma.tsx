import figma from "@figma/code-connect";
import { Search } from "./Search";

figma.connect(
  Search,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=2236-14989",
  {
    props: {
      value: figma.string("Value"),
      state: figma.enum("State", {
        Default: "default",
        Disabled: "disabled",
      }),
      valueType: figma.enum("Value Type", {
        Filled: "filled",
        Placeholder: "placeholder",
      }),
    },
    example: (props) => <Search {...props} />,
  },
);
