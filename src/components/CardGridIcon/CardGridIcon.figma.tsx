import figma from "@figma/code-connect";
import { CardGridIcon } from "./CardGridIcon";

figma.connect(
  CardGridIcon,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=348-13221",
  {
    props: {
      platform: figma.enum("Platform", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <CardGridIcon {...props} heading="Features" />,
  },
);
