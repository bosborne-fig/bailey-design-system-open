import figma from "@figma/code-connect";
import { ExampleArticle } from "./ExampleArticle";

figma.connect(
  ExampleArticle,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=562-10260",
  {
    props: {
      platform: figma.enum("Platform", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <ExampleArticle {...props} />,
  },
);
