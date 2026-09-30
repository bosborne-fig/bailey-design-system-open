import figma from "@figma/code-connect";
import { CardGridContentList } from "./CardGridContentList";

figma.connect(
  CardGridContentList,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=348-13407",
  {
    props: {
      platform: figma.enum("Platform", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <CardGridContentList {...props} heading="Latest posts" />,
  },
);
