import figma from "@figma/code-connect";
import { Menu } from "./Menu";
import { MenuItem } from "../MenuItem";

figma.connect(
  Menu,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=9762-720",
  {
    example: () => (
      <Menu>
        <MenuItem label="Item 1" />
        <MenuItem label="Item 2" />
      </Menu>
    ),
  },
);
