import figma from "@figma/code-connect";
import { NavigationButton } from "../NavigationButton";
import { NavigationButtonList } from "./NavigationButtonList";

figma.connect(
  NavigationButtonList,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=524-503",
  {
    props: {
      direction: figma.enum("Direction", {
        Row: "row",
        Column: "column",
      }),
    },
    example: (props) => (
      <NavigationButtonList {...props}>
        <NavigationButton label="Item 1" />
        <NavigationButton label="Item 2" />
        <NavigationButton label="Item 3" />
      </NavigationButtonList>
    ),
  },
);
