import figma from "@figma/code-connect";
import { PanelImageDouble } from "./PanelImageDouble";

figma.connect(
  PanelImageDouble,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=348-13470",
  {
    props: {
      platform: figma.enum("Platform", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <PanelImageDouble {...props} />,
  },
);
