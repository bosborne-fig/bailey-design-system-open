import figma from "@figma/code-connect";
import { TextLink } from "./TextLink";

figma.connect(
  TextLink,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=2087-8483",
  {
    props: { text: figma.string("Text") },
    example: (props) => <TextLink {...props} />,
  },
);
