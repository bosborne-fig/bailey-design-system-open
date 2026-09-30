import figma from "@figma/code-connect";
import { TextCode } from "./TextCode";

figma.connect(
  TextCode,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=2104-22325",
  {
    props: { text: figma.string("Text") },
    example: (props) => <TextCode {...props} />,
  },
);
