import figma from "@figma/code-connect";
import { HeroBasic } from "./HeroBasic";

figma.connect(
  HeroBasic,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=348-15896",
  {
    props: {
      platform: figma.enum("Platform", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <HeroBasic {...props} title="Welcome" subtitle="A short description." />,
  },
);
