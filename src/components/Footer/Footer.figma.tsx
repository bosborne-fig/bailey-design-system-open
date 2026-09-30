import figma from "@figma/code-connect";
import { Footer } from "./Footer";

figma.connect(
  Footer,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=321-11357",
  {
    props: {
      platform: figma.enum("Platform", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <Footer {...props} />,
  },
);
