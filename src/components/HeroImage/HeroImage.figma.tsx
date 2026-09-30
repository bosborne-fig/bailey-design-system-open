import figma from "@figma/code-connect";
import { HeroImage } from "./HeroImage";

figma.connect(
  HeroImage,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=348-15970",
  {
    props: {
      platform: figma.enum("Platform", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <HeroImage {...props} title="Welcome" subtitle="Build beautifully." />,
  },
);
