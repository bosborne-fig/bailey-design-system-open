import figma from "@figma/code-connect";
import { PanelImageContentReverse } from "./PanelImageContentReverse";

figma.connect(
  PanelImageContentReverse,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=348-15101",
  {
    props: {
      platform: figma.enum("Platform", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <PanelImageContentReverse {...props} />,
  },
);
