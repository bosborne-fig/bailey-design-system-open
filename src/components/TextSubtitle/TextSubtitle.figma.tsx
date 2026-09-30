import figma from "@figma/code-connect";
import { TextSubtitle } from "./TextSubtitle";

figma.connect(
  TextSubtitle,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=2103-22298",
  {
    props: { text: figma.string("Text") },
    example: (props) => <TextSubtitle {...props} />,
  },
);
