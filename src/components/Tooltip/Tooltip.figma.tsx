import figma from "@figma/code-connect";
import { Tooltip } from "./Tooltip";

figma.connect(
  Tooltip,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=315-32700",
  {
    props: {
      title: figma.string("Title"),
      body: figma.string("Body"),
      hasBody: figma.boolean("Has Body"),
      placement: figma.enum("Placement", {
        Top: "top",
        Left: "left",
        Right: "right",
        Bottom: "bottom",
      }),
    },
    example: (props) => <Tooltip {...props} />,
  },
);
