import figma from "@figma/code-connect";
import { AccordionItem } from "./AccordionItem";

figma.connect(
  AccordionItem,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=7753-4634",
  {
    props: {
      title: figma.string("Title"),
      content: figma.string("Content"),
      state: figma.enum("State", {
        Closed: "closed",
        Open: "open",
      }),
    },
    example: (props) => <AccordionItem {...props} />,
  },
);
