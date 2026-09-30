import figma from "@figma/code-connect";
import { PageProduct } from "./PageProduct";

figma.connect(
  PageProduct,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=348-15147",
  {
    props: {
      platform: figma.enum("Platform", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <PageProduct {...props} />,
  },
);
