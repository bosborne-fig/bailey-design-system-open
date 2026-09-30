import figma from "@figma/code-connect";
import { TextContentHeading } from "./TextContentHeading";

figma.connect(
  TextContentHeading,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=2153-7834",
  {
    props: {
      heading: figma.string("Heading"),
      subheading: figma.string("Subheading"),
      hasSubheading: figma.boolean("Has Subheading"),
      align: figma.enum("Align", { Start: "start", Center: "center" }),
    },
    example: (props) => <TextContentHeading {...props} />,
  },
);
