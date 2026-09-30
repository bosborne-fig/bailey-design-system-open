import figma from "@figma/code-connect";
import { FormContact } from "./FormContact";

figma.connect(
  FormContact,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=197-19741",
  {
    example: () => <FormContact />,
  },
);
