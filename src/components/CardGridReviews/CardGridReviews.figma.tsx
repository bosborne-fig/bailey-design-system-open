import figma from "@figma/code-connect";
import { CardGridReviews } from "./CardGridReviews";

figma.connect(
  CardGridReviews,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=348-15213",
  {
    props: {
      platform: figma.enum("Platform", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <CardGridReviews {...props} heading="Reviews" />,
  },
);
