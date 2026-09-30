import figma from "@figma/code-connect";
import { TextList } from "./TextList";
import { TextListItem } from "../TextListItem";

figma.connect(
  TextList,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=480-6149",
  {
    props: {
      hasTitle: figma.boolean("Has Title"),
      density: figma.enum("Density", { Default: "default", Tight: "tight" }),
    },
    example: (props) => (
      <TextList {...props} title="Items">
        <TextListItem text="Item 1" />
        <TextListItem text="Item 2" />
      </TextList>
    ),
  },
);
