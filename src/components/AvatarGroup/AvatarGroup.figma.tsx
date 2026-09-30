import figma from "@figma/code-connect";
import { Avatar } from "../Avatar";
import { AvatarGroup } from "./AvatarGroup";

figma.connect(
  AvatarGroup,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=56-15608",
  {
    props: {
      spacing: figma.enum("Spacing", {
        Overlap: "overlap",
        Spaced: "spaced",
      }),
      showOverflow: figma.boolean("Show Overflow"),
      number: figma.string("Number"),
    },
    example: (props) => (
      <AvatarGroup {...props}>
        <Avatar initials="AB" />
        <Avatar initials="CD" />
        <Avatar initials="EF" />
      </AvatarGroup>
    ),
  },
);
