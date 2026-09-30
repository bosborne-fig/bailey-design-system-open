import figma from "@figma/code-connect";
import { CalendarMonthField } from "./CalendarMonthField";

figma.connect(
  CalendarMonthField,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=4333-10557",
  {
    props: {
      label: figma.string("Label"),
      value: figma.string("Value"),
      hasLabel: figma.boolean("Has Label"),
      open: figma.boolean("Open"),
    },
    example: (props) => <CalendarMonthField {...props} />,
  },
);
