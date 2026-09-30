import figma from "@figma/code-connect";
import { ExampleSlot } from "./ExampleSlot";

figma.connect(
  ExampleSlot,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=6031-5160",
  {
    props: {
      platform: figma.enum("Platform", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <ExampleSlot {...props} />,
  },
);
