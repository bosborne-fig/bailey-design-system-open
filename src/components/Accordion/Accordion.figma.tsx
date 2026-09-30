import figma from "@figma/code-connect";
import { AccordionItem } from "../AccordionItem";
import { Accordion } from "./Accordion";

figma.connect(
  Accordion,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=7753-4779",
  {
    example: () => (
      <Accordion>
        <AccordionItem title="Section 1" content="Content 1" />
        <AccordionItem title="Section 2" content="Content 2" />
      </Accordion>
    ),
  },
);
