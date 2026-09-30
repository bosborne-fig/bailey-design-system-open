import figma from "@figma/code-connect";
import { Avatar } from "./Avatar";

figma.connect(
  Avatar,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=9762-1103",
  {
    props: {
      initials: figma.string("Initials"),
      type: figma.enum("Type", {
        Initial: "initial",
        Image: "image",
      }),
      size: figma.enum("Size", {
        Large: "large",
        Small: "small",
        Medium: "medium",
      }),
      shape: figma.enum("Shape", {
        Circle: "circle",
        Square: "square",
      }),
    },
    example: (props) => <Avatar {...props} />,
  },
);
