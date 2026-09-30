import figma from "@figma/code-connect";
import { Input } from "./Input";

// Replace the URL below with your Figma Input component URL once it exists.
figma.connect(
  Input,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=REPLACE_WITH_INPUT_NODE_ID",
  {
    props: {
      // Example mappings — adjust to match your Figma component properties:
      // label: figma.string("Label"),
      // placeholder: figma.string("Placeholder"),
      // hint: figma.string("Hint"),
      // error: figma.string("Error"),
      // disabled: figma.boolean("Disabled"),
    },
    example: (props) => <Input {...props} />,
  },
);
