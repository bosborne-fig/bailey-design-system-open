import figma from "@figma/code-connect";
import { RadioField } from "../RadioField";
import { RadioGroup } from "./RadioGroup";

figma.connect(
  RadioGroup,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=624-23642",
  {
    example: () => (
      <RadioGroup name="options">
        <RadioField label="Option 1" name="options" />
        <RadioField label="Option 2" name="options" />
      </RadioGroup>
    ),
  },
);
