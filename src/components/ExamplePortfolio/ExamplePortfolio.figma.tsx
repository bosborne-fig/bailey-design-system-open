import figma from "@figma/code-connect";
import { ExamplePortfolio } from "./ExamplePortfolio";

figma.connect(
  ExamplePortfolio,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=562-11665",
  {
    props: {
      platform: figma.enum("Platform", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <ExamplePortfolio {...props} />,
  },
);
