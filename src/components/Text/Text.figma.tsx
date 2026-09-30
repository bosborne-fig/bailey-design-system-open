import figma from "@figma/code-connect";
import { Text } from "./Text";

figma.connect(
  Text,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=2087-8487",
  {
    props: { text: figma.string("Text") },
    example: (props) => <Text {...props} />,
  },
);
