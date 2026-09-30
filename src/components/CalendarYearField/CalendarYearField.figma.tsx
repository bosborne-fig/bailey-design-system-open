import figma from "@figma/code-connect";
import { CalendarYearField } from "./CalendarYearField";

figma.connect(
  CalendarYearField,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=4333-12221",
  {
    props: {
      value: figma.string("Value"),
    },
    example: (props) => <CalendarYearField {...props} />,
  },
);
