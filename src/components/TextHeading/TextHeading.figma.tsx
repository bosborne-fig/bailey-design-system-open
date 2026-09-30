import figma from "@figma/code-connect";
import { TextHeading } from "./TextHeading";

figma.connect(
  TextHeading,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=2087-8488",
  {
    props: { text: figma.string("Text") },
    example: (props) => <TextHeading {...props} />,
  },
);
