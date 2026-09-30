import figma from "@figma/code-connect";
import { TextLinkList } from "./TextLinkList";
import { TextLinkListItem } from "../TextLinkListItem";

figma.connect(
  TextLinkList,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=322-9321",
  {
    props: {
      hasTitle: figma.boolean("Has Title"),
      density: figma.enum("Density", { Default: "default", Tight: "tight" }),
    },
    example: (props) => (
      <TextLinkList {...props} title="Links">
        <TextLinkListItem text="Link 1" />
        <TextLinkListItem text="Link 2" />
      </TextLinkList>
    ),
  },
);
