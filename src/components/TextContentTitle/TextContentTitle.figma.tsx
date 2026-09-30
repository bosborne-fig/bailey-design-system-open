import figma from "@figma/code-connect";
import { TextContentTitle } from "./TextContentTitle";

figma.connect(
  TextContentTitle,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=2153-7838",
  {
    props: {
      title: figma.string("Title"),
      subtitle: figma.string("Subtitle"),
      hasSubtitle: figma.boolean("Has Subtitle"),
      align: figma.enum("Align", { Start: "start", Center: "center" }),
    },
    example: (props) => <TextContentTitle {...props} />,
  },
);
