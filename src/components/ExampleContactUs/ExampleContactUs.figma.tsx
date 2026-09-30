import figma from "@figma/code-connect";
import { ExampleContactUs } from "./ExampleContactUs";

figma.connect(
  ExampleContactUs,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=562-9227",
  {
    props: {
      platform: figma.enum("Platform", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <ExampleContactUs {...props} />,
  },
);
