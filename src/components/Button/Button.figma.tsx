import figma from "@figma/code-connect";
import { Button } from "./Button";

// Replace the URL below with your Figma Button component URL once it exists.
// Then map Figma variant/property names to the component's props.
figma.connect(
  Button,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=REPLACE_WITH_BUTTON_NODE_ID",
  {
    props: {
      // Example mappings — adjust to match your Figma component properties:
      // variant: figma.enum("Variant", {
      //   Primary: "primary",
      //   Secondary: "secondary",
      //   Ghost: "ghost",
      // }),
      // size: figma.enum("Size", { Small: "sm", Medium: "md", Large: "lg" }),
      // disabled: figma.boolean("Disabled"),
      // children: figma.string("Label"),
    },
    example: (props) => <Button {...props}>Button</Button>,
  },
);
