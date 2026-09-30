import figma from "@figma/code-connect";
import { Button } from "../Button";
import { ButtonGroup } from "./ButtonGroup";

figma.connect(
  ButtonGroup,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=2072-9432",
  {
    props: {
      align: figma.enum("Align", {
        Justify: "justify",
        Start: "start",
        End: "end",
        Center: "center",
        Stack: "stack",
      }),
      buttonStart: figma.boolean("Button Start"),
      buttonEnd: figma.boolean("Button End"),
    },
    example: (props) => (
      <ButtonGroup {...props}>
        <Button label="Cancel" variant="neutral" />
        <Button label="Confirm" />
      </ButtonGroup>
    ),
  },
);
