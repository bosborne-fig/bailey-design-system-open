import figma from "@figma/code-connect";
import { TagToggle } from "../TagToggle";
import { TagToggleGroup } from "./TagToggleGroup";

figma.connect(
  TagToggleGroup,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=157-10352",
  {
    example: () => (
      <TagToggleGroup>
        <TagToggle label="Option 1" state="on" />
        <TagToggle label="Option 2" />
      </TagToggleGroup>
    ),
  },
);
