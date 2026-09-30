import figma from "@figma/code-connect";
import { TextSmall } from "./TextSmall";

figma.connect(
  TextSmall,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=2087-8484",
  {
    props: { text: figma.string("Text") },
    example: (props) => <TextSmall {...props} />,
  },
);
