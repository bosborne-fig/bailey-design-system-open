import figma from "@figma/code-connect";
import { HeroActions } from "./HeroActions";

figma.connect(
  HeroActions,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=348-15901",
  {
    props: {
      platform: figma.enum("Platform", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <HeroActions {...props} title="Welcome" subtitle="Start building today." />,
  },
);
