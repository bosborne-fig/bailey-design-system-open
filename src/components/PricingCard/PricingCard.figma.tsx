import figma from "@figma/code-connect";
import { PricingCard } from "./PricingCard";

figma.connect(
  PricingCard,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=1444-11846",
  {
    props: {
      variant: figma.enum("Variant", { Stroke: "stroke", Brand: "brand" }),
      device: figma.enum("Device", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <PricingCard {...props} />,
  },
);
