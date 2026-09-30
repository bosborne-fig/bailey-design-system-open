import figma from "@figma/code-connect";
import { TextLinkListItem } from "./TextLinkListItem";

figma.connect(
  TextLinkListItem,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=2153-7973",
  {
    props: { text: figma.string("Text") },
    example: (props) => <TextLinkListItem {...props} />,
  },
);
