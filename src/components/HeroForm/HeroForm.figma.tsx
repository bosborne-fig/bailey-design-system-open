import figma from "@figma/code-connect";
import { HeroForm } from "./HeroForm";

figma.connect(
  HeroForm,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=348-15933",
  {
    props: {
      platform: figma.enum("Platform", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <HeroForm {...props} title="Contact us" subtitle="We'll get back to you." />,
  },
);
