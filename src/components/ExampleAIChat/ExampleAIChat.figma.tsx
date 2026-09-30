import figma from "@figma/code-connect";
import { ExampleAIChat } from "./ExampleAIChat";

figma.connect(
  ExampleAIChat,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=5612-8819",
  {
    props: {
      platform: figma.enum("Platform", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <ExampleAIChat {...props} />,
  },
);
