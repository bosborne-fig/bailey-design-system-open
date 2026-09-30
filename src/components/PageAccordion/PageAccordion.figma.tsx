import figma from "@figma/code-connect";
import { PageAccordion } from "./PageAccordion";

figma.connect(
  PageAccordion,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=348-13173",
  {
    props: {
      platform: figma.enum("Platform", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <PageAccordion {...props} heading="FAQ" />,
  },
);
