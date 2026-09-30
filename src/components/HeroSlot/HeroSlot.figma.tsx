import figma from "@figma/code-connect";
import { HeroSlot } from "./HeroSlot";

figma.connect(
  HeroSlot,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=6062-12592",
  {
    props: {
      platform: figma.enum("Platform", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <HeroSlot {...props}>{/* slot content */}</HeroSlot>,
  },
);
