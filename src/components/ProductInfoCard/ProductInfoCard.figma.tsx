import figma from "@figma/code-connect";
import { ProductInfoCard } from "./ProductInfoCard";

figma.connect(
  ProductInfoCard,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=7753-4465",
  {
    props: {
      showDescription: figma.boolean("Show Description"),
    },
    example: (props) => <ProductInfoCard {...props} />,
  },
);
