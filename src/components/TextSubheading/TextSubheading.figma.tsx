import figma from "@figma/code-connect";
import { TextSubheading } from "./TextSubheading";

figma.connect(
  TextSubheading,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=2103-22303",
  {
    props: { text: figma.string("Text") },
    example: (props) => <TextSubheading {...props} />,
  },
);
