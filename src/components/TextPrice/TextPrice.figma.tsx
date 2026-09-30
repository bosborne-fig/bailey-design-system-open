import figma from "@figma/code-connect";
import { TextPrice } from "./TextPrice";

figma.connect(
  TextPrice,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=1443-10386",
  {
    props: {
      price: figma.string("Price"),
      label: figma.string("Label"),
      currency: figma.string("Currency"),
      hasLabel: figma.boolean("Has Label"),
      size: figma.enum("Size", { Large: "large", Small: "small" }),
    },
    example: (props) => <TextPrice {...props} />,
  },
);
