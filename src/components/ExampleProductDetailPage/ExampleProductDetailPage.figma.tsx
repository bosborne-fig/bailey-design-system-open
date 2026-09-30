import figma from "@figma/code-connect";
import { ExampleProductDetailPage } from "./ExampleProductDetailPage";

figma.connect(
  ExampleProductDetailPage,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=562-11271",
  {
    props: {
      platform: figma.enum("Platform", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <ExampleProductDetailPage {...props} />,
  },
);
