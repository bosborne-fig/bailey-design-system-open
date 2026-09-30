import figma from "@figma/code-connect";
import { CheckboxField } from "../CheckboxField";
import { CheckboxGroup } from "./CheckboxGroup";

figma.connect(
  CheckboxGroup,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=9762-1426",
  {
    example: () => (
      <CheckboxGroup>
        <CheckboxField label="Option 1" />
        <CheckboxField label="Option 2" />
      </CheckboxGroup>
    ),
  },
);
