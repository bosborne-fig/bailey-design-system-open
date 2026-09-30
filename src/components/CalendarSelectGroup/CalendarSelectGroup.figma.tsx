import figma from "@figma/code-connect";
import { CalendarSelectGroup } from "./CalendarSelectGroup";

figma.connect(
  CalendarSelectGroup,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=4333-10858",
  {
    example: () => <CalendarSelectGroup month="March" year="2026" />,
  },
);
