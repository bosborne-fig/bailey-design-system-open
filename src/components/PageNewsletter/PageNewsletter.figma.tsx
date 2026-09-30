import figma from "@figma/code-connect";
import { PageNewsletter } from "./PageNewsletter";

figma.connect(
  PageNewsletter,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=348-15133",
  {
    props: {
      platform: figma.enum("Platform", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <PageNewsletter {...props} heading="Subscribe" />,
  },
);
