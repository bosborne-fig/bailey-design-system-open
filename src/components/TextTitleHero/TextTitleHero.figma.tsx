import figma from "@figma/code-connect";
import { TextTitleHero } from "./TextTitleHero";

figma.connect(
  TextTitleHero,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=2087-8491",
  {
    props: { text: figma.string("Text") },
    example: (props) => <TextTitleHero {...props} />,
  },
);
