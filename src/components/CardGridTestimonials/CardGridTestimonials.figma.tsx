import figma from "@figma/code-connect";
import { CardGridTestimonials } from "./CardGridTestimonials";

figma.connect(
  CardGridTestimonials,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=348-13347",
  {
    props: {
      platform: figma.enum("Platform", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <CardGridTestimonials {...props} heading="What people say" />,
  },
);
