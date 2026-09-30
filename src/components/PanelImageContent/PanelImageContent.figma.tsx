import figma from "@figma/code-connect";
import { PanelImageContent } from "./PanelImageContent";

figma.connect(
  PanelImageContent,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=348-13474",
  {
    props: {
      platform: figma.enum("Platform", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <PanelImageContent {...props} />,
  },
);
