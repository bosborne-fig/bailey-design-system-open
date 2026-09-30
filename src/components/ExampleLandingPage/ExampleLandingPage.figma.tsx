import figma from "@figma/code-connect";
import { ExampleLandingPage } from "./ExampleLandingPage";

figma.connect(
  ExampleLandingPage,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=562-10124",
  {
    props: {
      platform: figma.enum("Platform", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <ExampleLandingPage {...props} />,
  },
);
