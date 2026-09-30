import figma from "@figma/code-connect";
import { Pagination } from "./Pagination";

figma.connect(
  Pagination,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=9762-899",
  {
    example: () => <Pagination page={1} totalPages={5} />,
  },
);
