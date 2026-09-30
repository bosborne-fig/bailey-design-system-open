import figma from "@figma/code-connect";
import { CalendarButton } from "./CalendarButton";

figma.connect(
  CalendarButton,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=4333-9359",
  {
    props: {
      number: figma.string("Number"),
      state: figma.enum("State", {
        Default: "default",
        Hover: "hover",
        Active: "active",
        Disabled: "disabled",
        Range: "range",
        "Range Disabled": "range-disabled",
        Hidden: "hidden",
      }),
    },
    example: (props) => <CalendarButton {...props} />,
  },
);
