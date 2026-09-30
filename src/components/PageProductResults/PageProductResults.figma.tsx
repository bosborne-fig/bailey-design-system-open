import figma from "@figma/code-connect";
import { PageProductResults } from "./PageProductResults";

figma.connect(
  PageProductResults,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=348-13517",
  {
    props: {
      platform: figma.enum("Platform", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <PageProductResults {...props} />,
  },
);
