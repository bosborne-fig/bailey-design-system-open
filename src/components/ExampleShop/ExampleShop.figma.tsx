import figma from "@figma/code-connect";
import { ExampleShop } from "./ExampleShop";

figma.connect(
  ExampleShop,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=562-10872",
  {
    props: {
      platform: figma.enum("Platform", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <ExampleShop {...props} />,
  },
);
