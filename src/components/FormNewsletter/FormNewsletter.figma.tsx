import figma from "@figma/code-connect";
import { FormNewsletter } from "./FormNewsletter";

figma.connect(
  FormNewsletter,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=197-19743",
  {
    example: () => <FormNewsletter />,
  },
);
