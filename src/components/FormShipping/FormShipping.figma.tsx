import figma from "@figma/code-connect";
import { FormShipping } from "./FormShipping";

figma.connect(
  FormShipping,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=197-23153",
  {
    example: () => <FormShipping />,
  },
);
