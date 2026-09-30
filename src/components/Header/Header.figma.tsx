import figma from "@figma/code-connect";
import { Header } from "./Header";

figma.connect(
  Header,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=2287-22651",
  {
    props: {
      platform: figma.enum("Platform", { Desktop: "desktop", Mobile: "mobile" }),
      state: figma.enum("State", { Open: "open", Default: "default" }),
    },
    example: (props) => <Header {...props} />,
  },
);
