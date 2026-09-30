import figma from "@figma/code-connect";
import { ExampleWaitlist } from "./ExampleWaitlist";

figma.connect(
  ExampleWaitlist,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=562-9701",
  {
    props: {
      platform: figma.enum("Platform", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <ExampleWaitlist {...props} />,
  },
);
