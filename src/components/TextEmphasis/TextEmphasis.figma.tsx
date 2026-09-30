import figma from "@figma/code-connect";
import { TextEmphasis } from "./TextEmphasis";

figma.connect(
  TextEmphasis,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=2087-8485",
  {
    props: { text: figma.string("Text") },
    example: (props) => <TextEmphasis {...props} />,
  },
);
