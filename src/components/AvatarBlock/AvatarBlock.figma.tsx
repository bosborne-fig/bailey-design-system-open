import figma from "@figma/code-connect";
import { AvatarBlock } from "./AvatarBlock";

figma.connect(
  AvatarBlock,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=2010-15581",
  {
    props: {
      title: figma.string("Title"),
      description: figma.string("Description"),
    },
    example: (props) => <AvatarBlock {...props} />,
  },
);
