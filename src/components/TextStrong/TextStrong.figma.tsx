import figma from "@figma/code-connect";
import { TextStrong } from "./TextStrong";

figma.connect(
  TextStrong,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=2087-8486",
  {
    props: { text: figma.string("Text") },
    example: (props) => <TextStrong {...props} />,
  },
);
