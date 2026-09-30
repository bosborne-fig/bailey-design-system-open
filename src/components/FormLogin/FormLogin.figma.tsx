import figma from "@figma/code-connect";
import { FormLogin } from "./FormLogin";

figma.connect(
  FormLogin,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=197-19740",
  {
    example: () => <FormLogin />,
  },
);
