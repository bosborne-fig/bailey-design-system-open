import figma from "@figma/code-connect";
import { TextListItem } from "./TextListItem";

figma.connect(
  TextListItem,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=2077-11663",
  {
    props: { text: figma.string("Text") },
    example: (props) => <TextListItem {...props} />,
  },
);
