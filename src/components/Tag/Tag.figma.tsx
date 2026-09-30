import figma from "@figma/code-connect";
import { Tag } from "./Tag";

figma.connect(
  Tag,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=56-8830",
  {
    props: {
      label: figma.string("Label"),
      removable: figma.boolean("Removable"),
      scheme: figma.enum("Scheme", {
        Brand: "brand",
        Neutral: "neutral",
        Positive: "positive",
        Danger: "danger",
        Warning: "warning",
      }),
      state: figma.enum("State", {
        Default: "default",
        Hover: "hover",
      }),
      variant: figma.enum("Variant", {
        Primary: "primary",
        Secondary: "secondary",
      }),
    },
    example: (props) => <Tag {...props} />,
  },
);
