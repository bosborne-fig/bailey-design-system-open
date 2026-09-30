import figma from "@figma/code-connect";
import { FormForgotPassword } from "./FormForgotPassword";

figma.connect(
  FormForgotPassword,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=197-19744",
  {
    example: () => <FormForgotPassword />,
  },
);
