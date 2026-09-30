import figma from "@figma/code-connect";
import { CardGridPricing } from "./CardGridPricing";

figma.connect(
  CardGridPricing,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=348-14983",
  {
    props: {
      platform: figma.enum("Platform", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <CardGridPricing {...props} />,
  },
);
