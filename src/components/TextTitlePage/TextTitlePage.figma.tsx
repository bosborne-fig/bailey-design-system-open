import figma from "@figma/code-connect";
import { TextTitlePage } from "./TextTitlePage";

figma.connect(
  TextTitlePage,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=2087-8490",
  {
    props: { text: figma.string("Text") },
    example: (props) => <TextTitlePage {...props} />,
  },
);
