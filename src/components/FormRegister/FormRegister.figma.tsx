import figma from "@figma/code-connect";
import { FormRegister } from "./FormRegister";

figma.connect(
  FormRegister,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=197-19742",
  {
    example: () => <FormRegister />,
  },
);
