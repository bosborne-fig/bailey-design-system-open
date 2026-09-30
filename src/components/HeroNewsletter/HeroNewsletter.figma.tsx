import figma from "@figma/code-connect";
import { HeroNewsletter } from "./HeroNewsletter";

figma.connect(
  HeroNewsletter,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=348-15919",
  {
    props: {
      platform: figma.enum("Platform", { Desktop: "desktop", Mobile: "mobile" }),
    },
    example: (props) => <HeroNewsletter {...props} title="Stay in the loop" subtitle="Get our updates in your inbox." />,
  },
);
