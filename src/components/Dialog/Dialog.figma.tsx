import figma from "@figma/code-connect";
import { Dialog } from "./Dialog";

figma.connect(
  Dialog,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=192-31534",
  {
    example: () => (
      <Dialog open heading="Dialog Title" body="Dialog body content." />
    ),
  },
);
