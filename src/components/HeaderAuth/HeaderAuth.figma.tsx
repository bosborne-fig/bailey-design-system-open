import figma from "@figma/code-connect";
import { HeaderAuth } from "./HeaderAuth";

figma.connect(
  HeaderAuth,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=18-9389",
  {
    props: {
      state: figma.enum("State", {
        "Logged In": "logged-in",
        "Logged Out": "logged-out",
        "Logged In - Hover": "logged-in-hover",
      }),
    },
    example: (props) => <HeaderAuth {...props} />,
  },
);
