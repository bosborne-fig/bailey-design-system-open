import figma from "@figma/code-connect";
import { ExampleHomePage } from "./ExampleHomePage";

figma.connect(
  ExampleHomePage,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=562-8332",
  {
    props: {
      platform: figma.enum("Platform", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <ExampleHomePage {...props} />,
  },
);
