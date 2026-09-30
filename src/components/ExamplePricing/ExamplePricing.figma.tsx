import figma from "@figma/code-connect";
import { ExamplePricing } from "./ExamplePricing";

figma.connect(
  ExamplePricing,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=562-9558",
  {
    props: {
      platform: figma.enum("Platform", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <ExamplePricing {...props} />,
  },
);
