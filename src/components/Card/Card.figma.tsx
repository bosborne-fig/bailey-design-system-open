import figma from "@figma/code-connect";
import { Card } from "./Card";

figma.connect(
  Card,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=2142-11380",
  {
    props: {
      heading: figma.string("Heading"),
      body: figma.string("Body"),
      icon: figma.instance("Icon"),
      asset: figma.boolean("Asset"),
      button: figma.boolean("Button"),
      assetType: figma.enum("Asset Type", {
        Icon: "icon",
        Image: "image",
      }),
      variant: figma.enum("Variant", {
        Stroke: "stroke",
        Default: "default",
      }),
      direction: figma.enum("Direction", {
        Horizontal: "horizontal",
        Vertical: "vertical",
      }),
    },
    example: (props) => <Card {...props} />,
  },
);
