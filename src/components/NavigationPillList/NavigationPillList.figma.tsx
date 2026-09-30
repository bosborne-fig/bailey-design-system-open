import figma from "@figma/code-connect";
import { NavigationPill } from "../NavigationPill";
import { NavigationPillList } from "./NavigationPillList";

figma.connect(
  NavigationPillList,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=2194-14984",
  {
    props: {
      direction: figma.enum("Direction", {
        Row: "row",
        Column: "column",
      }),
    },
    example: (props) => (
      <NavigationPillList {...props}>
        <NavigationPill label="All" state="active" />
        <NavigationPill label="Active" />
        <NavigationPill label="Archived" />
      </NavigationPillList>
    ),
  },
);
