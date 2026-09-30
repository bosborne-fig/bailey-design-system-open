import figma from "@figma/code-connect";
import { ExampleAbout } from "./ExampleAbout";

figma.connect(
  ExampleAbout,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=562-9044",
  {
    props: {
      platform: figma.enum("Platform", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <ExampleAbout {...props} />,
  },
);
