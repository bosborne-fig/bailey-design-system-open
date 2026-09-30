import figma from "@figma/code-connect";
import { Calendar } from "./Calendar";

figma.connect(
  Calendar,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=4333-9262",
  {
    example: () => <Calendar month="March" year="2026" selectedDay={15} />,
  },
);
