import figma from "@figma/code-connect";
import { PanelImage } from "./PanelImage";

figma.connect(
  PanelImage,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=348-15098",
  {
    props: {
      platform: figma.enum("Platform", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <PanelImage {...props} />,
  },
);
