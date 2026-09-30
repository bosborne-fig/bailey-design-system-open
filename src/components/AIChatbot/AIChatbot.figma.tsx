import figma from "@figma/code-connect";
import { AIChatbot } from "./AIChatbot";

figma.connect(
  AIChatbot,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=4331-7191",
  {
    props: {
      device: figma.enum("Device", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <AIChatbot {...props} />,
  },
);
