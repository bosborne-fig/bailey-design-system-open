import figma from "@figma/code-connect";
import { CardGridImage } from "./CardGridImage";

figma.connect(
  CardGridImage,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=348-14431",
  {
    props: {
      platform: figma.enum("Platform", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <CardGridImage {...props} heading="Gallery" />,
  },
);
